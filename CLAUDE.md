# CLAUDE.md - System Prompt for Claude Code

**Project**: Agentic Landing Page Template
**Purpose**: AI-assisted development of personal branding landing pages
**Approach**: Container-first development
**Level**: Project Implementation

---

## Project Overview

This is a **Next.js 16 landing page template** using **Docker containers** for development and deployment. Students clone this repository and customize it for their:
- Consulting/freelance services
- Professional portfolio
- Digital resume/CV
- Personal brand website
- Enterprise initiative communication

### Primary Goal
Help users customize content and deploy to AWS using natural language commands, with containers running in detached mode for non-blocking AI assistance.

---

## Container-First Workflow

### Development Pipeline
```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Develop    │ ──▶ │ Containerize│ ──▶ │   Deploy    │
│ docker:dev  │     │ docker:prod │     │ AWS App     │
│             │     │             │     │ Runner      │
└─────────────┘     └─────────────┘     └─────────────┘
```

### Primary Commands (Detached Mode)

**IMPORTANT**: All container commands run in **detached mode** (`-d`) so the terminal returns immediately. This allows you to continue working while containers run in the background.

```bash
# Start development (returns immediately)
npm run docker:dev

# Check if containers are running
npm run docker:status

# View logs (streaming)
npm run docker:logs

# Stop all containers
npm run docker:down
```

### Full Command Reference

| Command | Purpose | Blocking? |
|---------|---------|-----------|
| `npm run docker:dev` | Start dev server with hot-reload | No (detached) |
| `npm run docker:prod` | Test production build | No (detached) |
| `npm run docker:full` | Full stack (app + DB + Redis) | No (detached) |
| `npm run docker:status` | Check running containers | No |
| `npm run docker:logs` | View logs (Ctrl+C to exit) | Yes (streaming) |
| `npm run docker:shell` | Shell into dev container | Yes (interactive) |
| `npm run docker:down` | Stop all containers | No |
| `npm run docker:clean` | Remove containers + volumes | No |

---

## Tech Stack Summary

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js | 16.x |
| UI Library | React | 19.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Container | Docker | Latest |
| Cloud | AWS App Runner | - |
| Registry | AWS ECR | - |

---

## Project Structure

```
agentic-landing-template/
├── app/
│   ├── page.tsx            # ← PRIMARY EDIT TARGET
│   ├── layout.tsx          # Metadata, fonts
│   └── globals.css         # Tailwind imports, global styles
├── templates/              # Alternative page templates
│   ├── services.tsx        # Consulting services template
│   ├── portfolio.tsx       # Designer/developer portfolio
│   ├── resume.tsx          # Digital resume/CV
│   └── enterprise.tsx      # Enterprise initiative
├── public/
│   └── images/             # Static assets
├── docs/                   # Documentation
├── scripts/
│   └── init-db.sql         # PostgreSQL initialization
├── GEMINI.md               # Gemini CLI system prompt
├── CLAUDE.md               # This file
├── Dockerfile              # Production multi-stage build
├── Dockerfile.dev          # Development container
├── docker-compose.yml      # Container orchestration
└── package.json            # Dependencies + npm scripts
```

---

## Starting Development

### First Time Setup
```bash
# 1. Clone repository
git clone https://github.com/YOUR-USERNAME/agentic-landing-template.git
cd agentic-landing-template

# 2. Start development container (runs in background)
npm run docker:dev

# 3. Verify container is running
npm run docker:status

# 4. Open in browser
open http://localhost:3000
```

### Typical Workflow
```bash
# Start containers (if not running)
npm run docker:dev

# Edit files with your AI assistant
# Changes appear automatically (hot-reload)

# Check logs if something seems wrong
npm run docker:logs

# Stop when done
npm run docker:down
```

---

## Coding Standards

### TypeScript Requirements
```typescript
// ✅ Good: Explicit types
interface ServiceCard {
  title: string;
  description: string;
  price: string;
  features: string[];
}

// ❌ Bad: any types
const services: any[] = [];
```

### React/Next.js Patterns
```typescript
// ✅ Server Component (default)
export default function Page() {
  return <main>...</main>;
}

// ✅ Client Component (only when needed)
'use client';
import { useState } from 'react';
export default function InteractiveComponent() {
  const [state, setState] = useState(false);
  // ...
}
```

### Tailwind CSS 4 Syntax
```css
/* ✅ Correct for Tailwind CSS 4 */
@import "tailwindcss";

body {
  background-color: theme(colors.slate.50);
}

/* ❌ Incorrect (old Tailwind v3 syntax) */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Component Styling
```tsx
// ✅ Good: Tailwind utilities with dark mode
<div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">

// ✅ Good: Responsive design
<div className="px-4 md:px-6 lg:px-8">

// ✅ Good: Hover and transition
<button className="bg-blue-600 hover:bg-blue-700 transition-colors">
```

---

## Content Sections

The landing page follows this structure:

### 1. Navigation (`<nav>`)
- Fixed position with backdrop blur
- Logo + site name on left
- Nav links on right
- Mobile hamburger menu

### 2. Hero Section
- Large heading with name
- Subtitle with profession/title
- Value proposition tagline
- Two CTA buttons (primary + secondary)

### 3. Authority Section
- Experience metrics
- Key credentials/certifications
- Trust signals
- Brief professional bio

### 4. Services Section
- Three-tier pricing (DIY, DWY, DFY)
- Feature lists per tier
- Price points
- CTA buttons

### 5. Case Studies Section
- Project examples
- Problem → Solution → Result format
- Metrics where possible

### 6. FAQ Section
- Common questions and answers
- Address objections/concerns

### 7. Contact Section
- Email address
- Calendly booking link
- Social media links

### 8. Footer
- Copyright notice
- Additional links

---

## Common Edit Patterns

### Updating Text Content
```typescript
// Find the section in app/page.tsx
// Update the text directly - container auto-reloads

// Before:
<h1>Ping Wu</h1>

// After:
<h1>Your Name</h1>
```

### Changing Colors
```typescript
// Replace color classes throughout

// Before:
className="bg-blue-600 hover:bg-blue-700"

// After:
className="bg-green-600 hover:bg-green-700"
```

### Switching Templates
```bash
# Use a different template as your starting point
cp templates/services.tsx app/page.tsx    # For consultants
cp templates/portfolio.tsx app/page.tsx   # For designers
cp templates/resume.tsx app/page.tsx      # For job seekers
cp templates/enterprise.tsx app/page.tsx  # For initiatives
```

---

## Docker Commands (Direct)

### Development
```bash
# Start (detached - returns immediately)
docker compose --profile dev up -d --build

# Check status
docker compose ps

# View logs (Ctrl+C to exit)
docker compose logs -f dev

# Shell into container
docker compose --profile dev exec dev sh

# Stop
docker compose down
```

### Production Preview
```bash
# Build and run production container
docker compose --profile prod up -d --build

# Access at http://localhost:3001

# Check status
docker compose ps
```

### Full Stack (with Database)
```bash
# Start app + PostgreSQL + Redis
docker compose --profile full up -d --build

# Database UI at http://localhost:8080
# Credentials: dev / devpassword
```

### Troubleshooting
```bash
# Rebuild without cache
docker compose --profile dev build --no-cache

# View all containers (including stopped)
docker ps -a

# Clean up everything
docker compose down -v --rmi local
```

---

## AWS Deployment

### Prerequisites
1. AWS account with CLI configured
2. IAM user with ECR and App Runner permissions
3. Docker Desktop running

### ECR Commands
```bash
# Create repository
aws ecr create-repository \
  --repository-name my-landing \
  --region us-west-2

# Authenticate Docker
aws ecr get-login-password --region us-west-2 | \
  docker login --username AWS --password-stdin \
  <ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com

# Build production image
docker build -t landing-page:latest .

# Tag image
docker tag landing-page:latest \
  <ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com/my-landing:latest

# Push image
docker push \
  <ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com/my-landing:latest
```

### App Runner Deployment
```bash
# Create service
aws apprunner create-service \
  --service-name my-landing-page \
  --source-configuration '{
    "AuthenticationConfiguration": {
      "AccessRoleArn": "arn:aws:iam::<ACCOUNT_ID>:role/AppRunnerECRAccessRole"
    },
    "ImageRepository": {
      "ImageIdentifier": "<ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com/my-landing:latest",
      "ImageRepositoryType": "ECR",
      "ImageConfiguration": { "Port": "3000" }
    }
  }' \
  --instance-configuration '{ "Cpu": "1024", "Memory": "2048" }' \
  --region us-west-2

# Get service URL
aws apprunner describe-service \
  --service-arn <SERVICE_ARN> \
  --query 'Service.ServiceUrl' \
  --output text \
  --region us-west-2
```

---

## Response Behavior

### When Starting Development
1. Run `npm run docker:dev` (detached)
2. Suggest checking status: `npm run docker:status`
3. Direct to browser: `http://localhost:3000`
4. Never leave user waiting for blocking command

### When Editing Content
1. Read `app/page.tsx` first to understand current state
2. Make precise, targeted edits
3. Remind user that changes auto-reload
4. Maintain TypeScript compliance

### When Troubleshooting
1. First: Check container status (`npm run docker:status`)
2. Then: Check logs (`npm run docker:logs`)
3. Identify error type (build, runtime, style)
4. Provide clear fix with explanation

### When Working with Containers
1. **Always use detached mode** for starting containers
2. Use npm scripts (they're pre-configured correctly)
3. Point to `docker:logs` for debugging
4. Keep terminal available for next command

---

## Constraints

### DO NOT
- Run blocking container commands (missing `-d` flag)
- Modify core dependencies without explicit request
- Break existing functionality when editing
- Remove accessibility attributes
- Use deprecated patterns
- Over-engineer simple solutions

### ALWAYS
- Use detached mode for container startup
- Return terminal control to user immediately
- Preserve mobile responsiveness
- Maintain dark mode support
- Keep TypeScript types valid
- Follow existing code patterns

---

## Quick Reference

| Task | Command |
|------|---------|
| Start dev environment | `npm run docker:dev` |
| Check container status | `npm run docker:status` |
| View logs | `npm run docker:logs` |
| Stop containers | `npm run docker:down` |
| Test production build | `npm run docker:prod` |
| Full stack | `npm run docker:full` |
| Edit landing page | `app/page.tsx` |
| Edit metadata/SEO | `app/layout.tsx` |
| Edit global styles | `app/globals.css` |

---

## Error Reference

| Error | Cause | Fix |
|-------|-------|-----|
| Container not starting | Port in use | `npm run docker:down` then retry |
| `Cannot apply unknown utility class` | Tailwind v3 syntax in v4 | Use `@import "tailwindcss"` |
| `Module not found` | Dependencies missing | Rebuild: `npm run docker:clean && npm run docker:dev` |
| Hot reload not working | Volume mount issue | Restart: `npm run docker:down && npm run docker:dev` |
| `ECR push denied` | Auth expired | Re-run ECR login command |

---

**Last Updated**: 2026-01-25
**Version**: 2.0 (Container-First)
**For**: Claude Code CLI
