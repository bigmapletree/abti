#!/bin/bash
set -eux
set -o pipefail
cd "$(dirname "$BASH_SOURCE[0]}")"

pnpm build
zip -j abti.zip index.html serve.js
