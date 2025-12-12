// Netlify Function: send-email
// Sends contact form submissions via SendGrid. Configure env:
// SENDGRID_API_KEY (required), SENDGRID_FROM (from email), SENDGRID_TO (destination email).
// DRY_RUN=true will skip sending and return success for local testing.

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_FROM = process.env.SENDGRID_FROM || process.env.SENDGRID_TO;
const SENDGRID_TO = process.env.SENDGRID_TO;
const DRY_RUN = process.env.DRY_RUN === 'true';

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  if (!DRY_RUN && (!SENDGRID_API_KEY || !SENDGRID_FROM || !SENDGRID_TO)) {
    return { statusCode: 500, body: 'Email not configured' };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (err) {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  const { name = '', email = '', message = '' } = payload;
  if (!email || !message) {
    return { statusCode: 400, body: 'Email and message are required' };
  }

  const subject = `Portfolio contact from ${name || 'visitor'}`;
  const textBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

  if (DRY_RUN) {
    console.log('DRY_RUN send-email payload:', { subject, textBody });
    return { statusCode: 200, body: 'ok' };
  }

  try {
    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: SENDGRID_TO }] }],
        from: { email: SENDGRID_FROM },
        subject,
        content: [
          { type: 'text/plain', value: textBody },
        ],
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return { statusCode: 502, body: `SendGrid error: ${res.status} ${errText}` };
    }

    return { statusCode: 200, body: 'ok' };
  } catch (err) {
    console.error('send-email error', err);
    return { statusCode: 500, body: 'internal error' };
  }
};
