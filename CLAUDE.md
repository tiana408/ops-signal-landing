# CLAUDE.md - System Prompt for Claude Code

**Project**: Agentic Landing Page Template
**Purpose**: AI-assisted development of personal branding landing pages
**Level**: Project Implementation

---

## Project Overview

This is a **Next.js 16 landing page template** for personal branding. Students clone this repository and customize it for their:
- Consulting/freelance services
- Professional portfolio
- Digital resume/CV
- Personal brand website

### Primary Goal
Help users customize content and deploy to AWS using natural language commands.

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
├── public/
│   └── images/             # Static assets
├── docs/                   # Documentation
├── templates/              # Alternative page templates
├── GEMINI.md              # Gemini CLI config
├── CLAUDE.md              # This file
├── Dockerfile             # Multi-stage build
├── docker-compose.yml     # Local Docker
├── next.config.ts         # Next.js config
├── postcss.config.mjs     # PostCSS/Tailwind
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies
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

@apply bg-background; /* Won't work without config */
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
- Nav links on right (Services, About, Contact)
- Mobile hamburger menu

### 2. Hero Section
- Large heading with name
- Subtitle with profession/title
- Value proposition tagline
- Two CTA buttons (primary + secondary)
- Optional badge (event, promotion)

### 3. Authority Section
- Experience metrics (years, clients, etc.)
- Key credentials/certifications
- Trust signals
- Brief professional bio

### 4. Services Section
- Three-tier pricing (DIY, DWY, DFY)
- Feature lists per tier
- Price points
- CTA buttons
- "Most Popular" badge on middle tier

### 5. Case Studies Section
- 2-3 project examples
- Problem → Solution → Result format
- Metrics where possible
- Client type (anonymized if needed)

### 6. FAQ Section
- 4-6 common questions
- Expandable or static answers
- Address objections/concerns

### 7. Contact Section
- Email address
- Calendly booking link
- Social media links
- Location (optional)

### 8. Footer
- Copyright notice
- Additional links
- Social icons

---

## Common Edit Patterns

### Updating Text Content
```typescript
// Find the section in app/page.tsx
// Update the text directly

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

### Adding a New Section
```typescript
// Add section with id for navigation
<section id="new-section" className="py-20 bg-slate-50 dark:bg-slate-900">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl font-bold font-display text-center mb-12">
      Section Title
    </h2>
    {/* Section content */}
  </div>
</section>

// Add navigation link
<a href="#new-section">New Section</a>
```

---

## Docker Commands

### Local Development
```bash
# Build image
docker build -t landing-page:v1 .

# Run container
docker run -p 3000:3000 landing-page:v1

# Using Docker Compose
docker-compose up --build      # Build and start
docker-compose up -d           # Background mode
docker-compose down            # Stop
docker-compose logs -f         # View logs
docker-compose ps              # Check status
```

### Troubleshooting Docker
```bash
# Rebuild without cache
docker build --no-cache -t landing-page:v1 .

# Check running containers
docker ps -a

# View container logs
docker logs <container-id>

# Shell into container
docker exec -it <container-id> /bin/sh
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

# Tag image
docker tag landing-page:v1 \
  <ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com/my-landing:latest

# Push image
docker push \
  <ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com/my-landing:latest
```

### App Runner Deployment
```bash
# Create service (replace values)
aws apprunner create-service \
  --service-name my-landing-page \
  --source-configuration '{
    "AuthenticationConfiguration": {
      "AccessRoleArn": "arn:aws:iam::<ACCOUNT_ID>:role/AppRunnerECRAccessRole"
    },
    "ImageRepository": {
      "ImageIdentifier": "<ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com/my-landing:latest",
      "ImageRepositoryType": "ECR",
      "ImageConfiguration": {
        "Port": "3000"
      }
    }
  }' \
  --instance-configuration '{
    "Cpu": "1024",
    "Memory": "2048"
  }' \
  --region us-west-2

# Check service status
aws apprunner describe-service \
  --service-arn <SERVICE_ARN> \
  --region us-west-2

# Get service URL
aws apprunner describe-service \
  --service-arn <SERVICE_ARN> \
  --query 'Service.ServiceUrl' \
  --output text \
  --region us-west-2
```

### Cleanup Commands
```bash
# Delete App Runner service
aws apprunner delete-service \
  --service-arn <SERVICE_ARN> \
  --region us-west-2

# Delete ECR repository
aws ecr delete-repository \
  --repository-name my-landing \
  --force \
  --region us-west-2
```

---

## Response Behavior

### When Editing Content
1. Read `app/page.tsx` first to understand current state
2. Make precise, targeted edits
3. Preserve all existing styling
4. Maintain TypeScript compliance
5. Test changes mentally for edge cases

### When Troubleshooting
1. Identify the error type (build, runtime, style)
2. Check common causes first
3. Provide clear fix with explanation
4. Suggest prevention for future

### When Explaining
1. Be concise and practical
2. Use code examples
3. Link concepts to the project
4. Avoid unnecessary theory

---

## Constraints

### DO NOT
- Modify core dependencies without explicit request
- Break existing functionality when editing
- Remove accessibility attributes
- Use deprecated patterns
- Over-engineer simple solutions
- Add features not requested

### ALWAYS
- Preserve mobile responsiveness
- Maintain dark mode support
- Keep TypeScript types valid
- Follow existing code patterns
- Test edge cases mentally
- Consider performance implications

---

## Quick Reference

| Action | Command/File |
|--------|--------------|
| Edit landing page | `app/page.tsx` |
| Edit metadata/SEO | `app/layout.tsx` |
| Edit global styles | `app/globals.css` |
| Start dev server | `npm run dev` |
| Build production | `npm run build` |
| Build Docker | `docker build -t name:tag .` |
| Run Docker | `docker run -p 3000:3000 name:tag` |
| Start with Compose | `docker-compose up --build` |

---

## Git Workflow

```bash
# Feature branch workflow
git checkout -b feature/update-hero
# ... make changes ...
git add app/page.tsx
git commit -m "feat: Update hero with new branding"
git push -u origin feature/update-hero
# Create PR on GitHub
```

### Commit Message Format
```
type: short description

Types:
- feat: New feature
- fix: Bug fix
- style: Styling changes
- docs: Documentation
- refactor: Code restructuring
- chore: Maintenance tasks
```

---

## Error Reference

| Error | Cause | Fix |
|-------|-------|-----|
| `Cannot apply unknown utility class` | Tailwind v3 syntax in v4 | Use `@import "tailwindcss"` |
| `Module not found` | Missing dependency | Run `npm install` |
| `Type error` | TypeScript mismatch | Check types, add proper interfaces |
| `Container exits immediately` | Build or runtime error | Check `docker logs` |
| `ECR push denied` | Auth expired | Re-run `aws ecr get-login-password` |

---

**Last Updated**: 2026-01-25
**Version**: 1.0
**For**: Claude Code CLI
