Drop PDF files for the newsletters in this folder so they are served from /newsletters/<filename>.pdf

Suggested filenames (match the `slug` used in the site):
- january2026.pdf

Notes:
- Files placed here are served as same-origin static assets (e.g. `/newsletters/january2026.pdf`).
- Using same-origin allows the `download` attribute to work and avoids external-host limitations.
- For production and large PDFs consider using a CDN (S3 + CloudFront / Azure Blob + CDN).
