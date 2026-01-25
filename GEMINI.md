# GEMINI.md - System Prompt for Gemini CLI

**Project**: Agentic Landing Page Template
**Purpose**: AI-assisted development of personal branding landing pages
**Approach**: Container-first development

---

## Project Context

You are assisting with a **Next.js 16 landing page** project that uses **Docker containers** for development and deployment. This is a template that students customize for their personal brand (services, portfolio, or resume).

### Tech Stack
- **Framework**: Next.js 16.x with App Router
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x (using `@import "tailwindcss"`)
- **Container**: Docker (development + production)
- **Deployment**: AWS App Runner via ECR

### Key Files
- `app/page.tsx` - Main landing page (primary file to edit)
- `app/layout.tsx` - Root layout with metadata
- `app/globals.css` - Global styles and Tailwind imports
- `Dockerfile` - Multi-stage production build
- `Dockerfile.dev` - Development container
- `docker-compose.yml` - Container orchestration

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

All commands run containers in **detached mode** (-d) so you can continue working:

```bash
# Start development (runs in background)
npm run docker:dev

# Check container status
npm run docker:status

# View logs
npm run docker:logs

# Stop containers
npm run docker:down
```

### Full Command Reference

| Command | Purpose |
|---------|---------|
| `npm run docker:dev` | Start dev server (detached, hot-reload) |
| `npm run docker:prod` | Test production build (detached) |
| `npm run docker:full` | Full stack with DB + Redis (detached) |
| `npm run docker:status` | Check running containers |
| `npm run docker:logs` | View container logs (follow mode) |
| `npm run docker:shell` | Shell into dev container |
| `npm run docker:down` | Stop all containers |
| `npm run docker:clean` | Stop and remove volumes/images |

---

## Coding Standards

### TypeScript
- Use strict TypeScript with proper typing
- Prefer `interface` over `type` for object shapes
- No `any` types unless absolutely necessary

### React/Next.js
- Use Server Components by default
- Add `'use client'` only when needed (interactivity, hooks)
- Use semantic HTML elements
- Implement proper accessibility (aria labels, alt text)

### Tailwind CSS 4
- Use utility classes directly in JSX
- Use `@import "tailwindcss"` not `@tailwind` directives
- Use `theme()` function in CSS, not `@apply` with custom variables
- Color palette: slate (backgrounds), blue (primary), indigo (accents)
- Use `dark:` prefix for dark mode variants

---

## Content Structure

The landing page has these sections (in order):

1. **Navigation** - Fixed header with logo and nav links
2. **Hero** - Name, title, tagline, CTA buttons
3. **Authority** - Credentials, experience, trust signals
4. **Services** - 3-tier offerings (DIY/DWY/DFY pattern)
5. **Case Studies** - Project examples with results
6. **FAQ** - Common questions and answers
7. **Contact** - Email, Calendly, social links
8. **Footer** - Copyright, additional links

---

## Common Tasks

### Starting Development
```bash
# 1. Start containers (runs in background)
npm run docker:dev

# 2. Verify it's running
npm run docker:status

# 3. Open browser
open http://localhost:3000

# 4. Edit files - changes appear automatically (hot-reload)
```

### Updating Content
When asked to update content:
1. Read the current `app/page.tsx` first
2. Make targeted edits to specific sections
3. Preserve existing styling and structure
4. Container auto-reloads on save

### Changing Styles
When asked to change styling:
1. Prefer Tailwind utility classes
2. Update `globals.css` only for global changes
3. Test both light and dark modes
4. Ensure mobile responsiveness

### Adding Sections
When asked to add new sections:
1. Follow existing section patterns
2. Add navigation link in header
3. Use consistent spacing (`py-20` or `py-24`)
4. Include `id` attribute for anchor links

---

## Docker Commands (Direct)

### Development Container
```bash
# Start (detached)
docker compose --profile dev up -d --build

# Check status
docker compose ps

# View logs
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

## AWS Deployment Commands

### ECR Setup
```bash
# Create repository
aws ecr create-repository --repository-name landing-page --region us-west-2

# Login to ECR
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-west-2.amazonaws.com

# Build production image
docker build -t landing-page:latest .

# Tag for ECR
docker tag landing-page:latest <account-id>.dkr.ecr.us-west-2.amazonaws.com/landing-page:latest

# Push image
docker push <account-id>.dkr.ecr.us-west-2.amazonaws.com/landing-page:latest
```

### App Runner
```bash
# Create service
aws apprunner create-service \
  --service-name my-landing-page \
  --source-configuration '{
    "ImageRepository": {
      "ImageIdentifier": "<account-id>.dkr.ecr.us-west-2.amazonaws.com/landing-page:latest",
      "ImageRepositoryType": "ECR",
      "ImageConfiguration": { "Port": "3000" }
    }
  }' \
  --instance-configuration '{ "Cpu": "1024", "Memory": "2048" }' \
  --region us-west-2
```

---

## Response Guidelines

### When Editing Code
1. Show the specific changes being made
2. Explain why the change achieves the goal
3. Changes apply immediately (hot-reload)
4. Provide the complete updated code block

### When Working with Containers
1. Use npm scripts (they run detached)
2. Remind user to check status: `npm run docker:status`
3. Direct to logs if issues: `npm run docker:logs`
4. Never leave user with blocking terminal

### When Troubleshooting
1. First check: Is container running? (`npm run docker:status`)
2. Check logs: `npm run docker:logs`
3. Identify root cause before suggesting fixes
4. Provide step-by-step solution

---

## Constraints

### Do NOT
- Modify `package.json` dependencies without explanation
- Change the Docker multi-stage build structure
- Remove accessibility attributes
- Use deprecated React patterns
- Run blocking commands (always use `-d` flag)

### Always
- Use detached mode for container commands
- Preserve existing functionality when editing
- Consider mobile-first responsive design
- Maintain consistent code style
- Include error handling where appropriate

---

## Quick Reference

| Task | Command |
|------|---------|
| Start dev environment | `npm run docker:dev` |
| Check status | `npm run docker:status` |
| View logs | `npm run docker:logs` |
| Stop containers | `npm run docker:down` |
| Test production build | `npm run docker:prod` |
| Edit content | `app/page.tsx` |
| Edit metadata | `app/layout.tsx` |
| Edit global styles | `app/globals.css` |

---

**Last Updated**: 2026-01-25
**Version**: 2.0 (Container-First)
