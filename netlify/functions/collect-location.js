// Netlify Function: collect-location
// Accepts POST requests with JSON { location, page, ua }
// Persists to a file in the configured GitHub repo via the Contents API.

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO; // format: owner/repo
const GITHUB_FILE_PATH = process.env.GITHUB_FILE_PATH || 'data/locations.csv';
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';

const headersAuth = GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Server-side toggle: if collection is disabled, skip processing (no writes).
  // Set COLLECT_LOCATION_ENABLED=true in Netlify env to enable persistent storage.
  if (process.env.COLLECT_LOCATION_ENABLED !== 'true' && process.env.DRY_RUN !== 'true') {
    return { statusCode: 204, body: 'Collection disabled' };
  }

  if (!GITHUB_REPO || !GITHUB_TOKEN) {
    return { statusCode: 500, body: 'Function not configured: missing GITHUB_REPO or GITHUB_TOKEN' };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (err) {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  const { location = {}, page = '', ua = '' } = payload;
  const ts = new Date().toISOString();

  const lineParts = [
    ts,
    (location.ip || '').replace(/\n|\r/g, ' '),
    (location.country || '').replace(/,/g, ' '),
    (location.region || '').replace(/,/g, ' '),
    (location.city || '').replace(/,/g, ' '),
    location.latitude || '',
    location.longitude || '',
    page,
    ua.replace(/\n|\r/g, ' '),
  ];

  const csvLine = lineParts.map((p) => (p === undefined || p === null ? '' : String(p))).join(',') + '\n';

  // Support a dry-run mode for local testing: skip GitHub writes and return the CSV line
  if (process.env.DRY_RUN === 'true') {
    console.log('DRY_RUN enabled — CSV line:', csvLine.trim());
    return { statusCode: 200, body: csvLine };
  }

  const apiBase = 'https://api.github.com';
  const fileUrl = `${apiBase}/repos/${GITHUB_REPO}/contents/${encodeURIComponent(GITHUB_FILE_PATH)}?ref=${encodeURIComponent(GITHUB_BRANCH)}`;

  try {
    // Try to get existing file
    const getRes = await fetch(fileUrl, { headers: { ...headersAuth, Accept: 'application/vnd.github.v3+json' } });
    let newContent;
    let sha;

    if (getRes.status === 200) {
      const body = await getRes.json();
      const existing = Buffer.from(body.content || '', 'base64').toString('utf8');
      newContent = existing + csvLine;
      sha = body.sha;
    } else if (getRes.status === 404) {
      // create new file with header
      const header = 'timestamp,ip,country,region,city,lat,lon,page,userAgent\n';
      newContent = header + csvLine;
    } else {
      const text = await getRes.text();
      return { statusCode: 502, body: `GitHub API error: ${getRes.status} ${text}` };
    }

    const putUrl = `${apiBase}/repos/${GITHUB_REPO}/contents/${encodeURIComponent(GITHUB_FILE_PATH)}`;
    const putBody = {
      message: `Add visitor location ${ts}`,
      content: Buffer.from(newContent, 'utf8').toString('base64'),
      branch: GITHUB_BRANCH,
    };
    if (sha) putBody.sha = sha;

    const putRes = await fetch(putUrl, {
      method: 'PUT',
      headers: { ...headersAuth, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
      body: JSON.stringify(putBody),
    });

    if (!putRes.ok) {
      const text = await putRes.text();
      return { statusCode: 502, body: `Failed to write file: ${putRes.status} ${text}` };
    }

    return { statusCode: 200, body: 'ok' };
  } catch (err) {
    console.error('collect-location error', err);
    return { statusCode: 500, body: 'internal error' };
  }
};
