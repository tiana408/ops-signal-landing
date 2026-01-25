# GEMINI.md - System Prompt for Gemini CLI

**Project**: Agentic Landing Page Template
**Purpose**: AI-assisted development of personal branding landing pages

---

## Project Context

You are assisting with a **Next.js 16 landing page** project. This is a template that students customize for their personal brand (services, portfolio, or resume).

### Tech Stack
- **Framework**: Next.js 16.x with App Router
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x (using `@import "tailwindcss"`)
- **Package Manager**: npm
- **Containerization**: Docker with multi-stage builds
- **Deployment**: AWS App Runner via ECR

### Key Files
- `app/page.tsx` - Main landing page (primary file to edit)
- `app/layout.tsx` - Root layout with metadata
- `app/globals.css` - Global styles and Tailwind imports
- `Dockerfile` - Multi-stage production build
- `docker-compose.yml` - Local development with Docker

---

## Coding Standards

### TypeScript
- Use strict TypeScript with proper typing
- Prefer `interface` over `type` for object shapes
- Use `React.FC` sparingly; prefer explicit return types
- No `any` types unless absolutely necessary

### React/Next.js
- Use Server Components by default
- Add `'use client'` only when needed (interactivity, hooks)
- Use semantic HTML elements
- Implement proper accessibility (aria labels, alt text)

### Tailwind CSS 4
- Use utility classes directly in JSX
- For Tailwind CSS 4, use `@import "tailwindcss"` not `@tailwind` directives
- Use `theme()` function in CSS, not `@apply` with custom variables
- Color palette: slate (backgrounds), blue (primary), indigo (accents)
- Use `dark:` prefix for dark mode variants

### File Organization
```
app/
├── page.tsx        # Edit this for content changes
├── layout.tsx      # Metadata and fonts
└── globals.css     # Global styles only
```

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

### Updating Content
When asked to update content:
1. Read the current `app/page.tsx` first
2. Make targeted edits to specific sections
3. Preserve existing styling and structure
4. Maintain TypeScript types

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

## Docker Commands

### Build Image
```bash
docker build -t landing-page:v1 .
```

### Run Container
```bash
docker run -p 3000:3000 landing-page:v1
```

### Docker Compose
```bash
docker-compose up --build      # Build and start
docker-compose up -d           # Detached mode
docker-compose down            # Stop and remove
docker-compose logs -f         # Follow logs
```

---

## AWS Deployment Commands

### ECR Setup
```bash
# Create repository
aws ecr create-repository --repository-name landing-page --region us-west-2

# Login to ECR
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-west-2.amazonaws.com

# Tag image
docker tag landing-page:v1 <account-id>.dkr.ecr.us-west-2.amazonaws.com/landing-page:latest

# Push image
docker push <account-id>.dkr.ecr.us-west-2.amazonaws.com/landing-page:latest
```

### App Runner
```bash
# Create service (use AWS Console or CLI)
aws apprunner create-service \
  --service-name my-landing-page \
  --source-configuration '{
    "ImageRepository": {
      "ImageIdentifier": "<account-id>.dkr.ecr.us-west-2.amazonaws.com/landing-page:latest",
      "ImageRepositoryType": "ECR"
    }
  }' \
  --instance-configuration '{
    "Cpu": "1024",
    "Memory": "2048"
  }'
```

---

## Response Guidelines

### When Editing Code
1. Show the specific changes being made
2. Explain why the change achieves the goal
3. Mention any side effects or considerations
4. Provide the complete updated code block

### When Troubleshooting
1. Ask clarifying questions if error is unclear
2. Identify root cause before suggesting fixes
3. Provide step-by-step solution
4. Explain how to prevent similar issues

### When Explaining Concepts
1. Start with simple explanation
2. Use analogies when helpful
3. Provide concrete examples
4. Link to relevant documentation

---

## Constraints

### Do NOT
- Modify `package.json` dependencies without explanation
- Change the Docker multi-stage build structure
- Remove accessibility attributes
- Use deprecated React patterns
- Add unnecessary complexity

### Always
- Preserve existing functionality when editing
- Test suggestions mentally before providing
- Consider mobile-first responsive design
- Maintain consistent code style
- Include error handling where appropriate

---

## Example Interactions

### Good Request
> "Update the hero section to say 'Jane Doe - UX Designer' with tagline 'Creating intuitive digital experiences'"

**Response**: Edits `app/page.tsx` hero section with exact text, preserves styling.

### Good Request
> "Change the primary color from blue to green"

**Response**: Updates Tailwind classes from `blue-*` to `green-*` throughout, checks dark mode variants.

### Good Request
> "Build and run the Docker container"

**Response**: Provides exact commands, explains each step, mentions how to verify success.

---

## Quick Reference

| Task | Command/Location |
|------|------------------|
| Edit content | `app/page.tsx` |
| Edit metadata | `app/layout.tsx` |
| Edit global styles | `app/globals.css` |
| Build Docker | `docker build -t name:tag .` |
| Run Docker | `docker run -p 3000:3000 name:tag` |
| Start dev | `npm run dev` |
| Build prod | `npm run build` |

---

**Last Updated**: 2026-01-25
**Version**: 1.0
