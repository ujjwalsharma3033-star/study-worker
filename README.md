# Cloudflare Worker - Study Redirector

This Worker redirects incoming requests like `/Study_XYZ.zip` to a signed Wasabi S3 URL.

## How it works

- Deploy to Cloudflare Workers.
- Use this endpoint:  
  `https://study-worker.<your-cloudflare-subdomain>.workers.dev/Study_XYZ.zip`
- It will 302 redirect to your Wasabi-signed URL.

## Setup

1. Replace the placeholder `REPLACE_ME` in `index.js` with your actual signed query string.
2. Push this to GitHub.
3. Deploy from GitHub in the Cloudflare dashboard.
