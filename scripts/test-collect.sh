#!/usr/bin/env bash
set -euo pipefail

# Simple helper to test the local collect-location Netlify Function in DRY_RUN mode.
# Usage:
# 1) In one terminal: `DRY_RUN=true netlify dev`
# 2) In another terminal: `scripts/test-collect.sh` (or make it executable first)

HOST=${HOST:-127.0.0.1}
PORT=${PORT:-8888}
URL="http://${HOST}:${PORT}/.netlify/functions/collect-location"

PAYLOAD=${1:-'{"location":{"ip":"1.2.3.4","country":"Local","region":"Local","city":"Local","latitude":"0","longitude":"0"},"page":"/test","ua":"script-test"}'}

check_endpoint() {
  # try a HEAD request; if it fails, assume not running
  curl --silent --fail --head "$URL" >/dev/null 2>&1
}

if ! check_endpoint; then
  cat <<EOF
Netlify dev function endpoint not reachable at $URL.
Start the dev server with DRY_RUN=true in another terminal, for example:

  DRY_RUN=true netlify dev

Then re-run this script.
EOF
  exit 1
fi

echo "Sending test payload to $URL (dry run)..."
curl -v "$URL" -H "Content-Type: application/json" -d "$PAYLOAD"
echo

exit 0
