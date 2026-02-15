# Tiana Le – Landing Page

Customized from pingwu/agentic-landing-template to showcase my work as an analyst and CX strategist.

## Stack
- Next.js 15 + React 19
- Tailwind CSS (via @tailwindcss/postcss)
- Single-page layout edited directly in `app/page.tsx`
- Static export (`out/` folder) ready for any host

## Exactly What I Did
```bash
git clone https://github.com/pingwu/agentic-landing-template
cd agentic-landing-template
npm install
# manual edits to app/page.tsx for content + styling tweaks
npm run dev -- --hostname 0.0.0.0   # previewed at http://localhost:3001
npm run build                       # generated static site in out/
zip -r ../tiana-le-landing-build.zip out
```

No Docker, no CLI coding agents—just local npm commands and manual edits.

## Preview Locally
```bash
unzip tiana-le-landing-build.zip
npx serve out
```
Then open the reported localhost URL (e.g., http://localhost:3000).

## Deploy
Upload the contents of `out/` to any static host (GitHub Pages, Netlify, Vercel static, etc.).

## Contact
- Email: tianale9@gmail.com
- LinkedIn: https://www.linkedin.com/in/tiana-le/
- GitHub: https://github.com/tiana408
- X (Twitter): https://x.com/agarthaishome
