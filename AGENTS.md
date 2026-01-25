# Shared Agent Instructions

**Project**: Agentic Landing Page Template  
**Purpose**: AI-assisted development of personal branding landing pages  
**Approach**: Container-first development

---

## Project Overview

This is a **Next.js 16 landing page template** for personal branding sites:
- Consulting/Freelance services
- Professional portfolio
- Digital resume/CV
- Enterprise initiative communications

Primary goal: customize content and deploy quickly using natural language commands.

---

## Tech Stack

- **Next.js** 16.x (App Router)
- **React** 19.x
- **TypeScript** 5.x
- **Tailwind CSS** 4.x
- **Docker** (local dev + production preview)
- **AWS App Runner** (deployment target)

---

## Key Files

- `app/page.tsx` - Main landing page (primary edit target)
- `app/layout.tsx` - Root layout, metadata
- `app/globals.css` - Global styles, Tailwind imports
- `templates/` - Alternative page templates
- `docker-compose.yml` - Container orchestration
- `Dockerfile` - Production multi-stage build
- `Dockerfile.dev` - Development container

---

## Container-First Workflow

All container commands must run in **detached mode**:

```bash
# Start development (detached)
npm run docker:dev

# Check status
npm run docker:status

# View logs
npm run docker:logs

# Stop containers
npm run docker:down

# Test production build locally
npm run docker:prod
```

---

## Coding Standards

### TypeScript
- Use explicit types
- Avoid `any`

### React/Next.js
- Server Components by default
- Add `'use client'` only when needed (hooks, interactivity)
- Preserve accessibility attributes

### Tailwind CSS 4
Use Tailwind v4 syntax:
```css
@import "tailwindcss";
```
Avoid v3 directives like `@tailwind base/components/utilities`.

---

## Content Structure (Default Template)

1. Navigation
2. Hero
3. Authority/About
4. Services
5. Case Studies/Work
6. FAQ
7. Contact
8. Footer

---

## Common Tasks

### Update Content
1. Read `app/page.tsx`
2. Make targeted edits
3. Preserve structure and responsiveness

### Change Styles
1. Prefer Tailwind utility classes
2. Update `globals.css` only for global changes
3. Maintain light/dark mode compatibility

### Switch Templates
```bash
cp templates/services.tsx app/page.tsx
cp templates/portfolio.tsx app/page.tsx
cp templates/resume.tsx app/page.tsx
cp templates/enterprise.tsx app/page.tsx
```

---

## Docker (Direct)

```bash
# Development
docker compose --profile dev up -d --build

# Production preview
docker compose --profile prod up -d --build
```

---

## AWS Deployment (Summary)

```bash
# Build image
docker build -t landing-page:latest .

# Push to ECR, then deploy to App Runner
# (See docs/DEPLOYMENT-ROADMAP.md for full steps)
```

---

## Constraints

### Do Not
- Run blocking container commands (missing `-d`)
- Remove accessibility attributes
- Change core dependencies without explanation
- Use deprecated Tailwind/React patterns

### Always
- Use detached mode for container startup
- Keep TypeScript valid
- Preserve mobile responsiveness


## Files That Delegate Here

- `CLAUDE.md`
- `GEMINI.md`
- `AGENT.md`
