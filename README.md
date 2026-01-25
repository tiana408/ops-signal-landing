# Agentic Landing Page Template

**Build and deploy your professional landing page using AI-assisted development**

A complete template for creating personal branding landing pages (services, portfolio, resume) using Agentic Coding tools like **Gemini CLI** or **Claude Code**. Deploy to AWS in minutes with natural language commands.

---

## What You'll Build

A modern, responsive landing page that can serve as:
- **Consulting Services** page
- **Professional Portfolio**
- **Digital Resume/CV**
- **Freelance Business** site
- **Personal Brand** presence
- **Enterprise Initiative** communication site (NEW!)

### Enterprise Use Cases
This template also works for internal corporate communications:
- **Digital Transformation Programs** - Communicate vision, roadmap, and benefits
- **Change Management Initiatives** - Align teams around organizational changes
- **Strategic Projects** - Share business context and progress with stakeholders
- **Innovation Programs** - Build excitement and drive adoption
- **IT Modernization** - Explain cloud migrations, system upgrades
- **Employee Programs** - DEI, wellness, sustainability initiatives

**Live Demo**: [Your deployed URL here]

---

## Quick Start

**Prerequisites:** [Docker Desktop](https://www.docker.com/products/docker-desktop/)

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-USERNAME/agentic-landing-template.git
cd agentic-landing-template

# 2. Start development container
npm run docker:dev
# Open http://localhost:3000
```

That's it! The container includes Node.js, TypeScript, and all dependencies. Hot-reload is enabled - edit files and see changes instantly.

### Development Commands

| Command | Purpose |
|---------|---------|
| `npm run docker:dev` | Start development with hot-reload |
| `npm run docker:prod` | Test production build locally |
| `npm run docker:down` | Stop all containers |
| `npm run docker:logs` | View container logs |

### Customize with AI

Open a new terminal and use your preferred AI coding assistant:

**Gemini CLI:**
```bash
gemini "Update the hero section with my name 'John Smith' and tagline 'Full Stack Developer'"
```

**Claude Code:**
```bash
claude "Update the hero section with my name 'John Smith' and tagline 'Full Stack Developer'"
```

The AI assistant can read/edit files while the container serves your app. Changes appear immediately.

---

## Development → Production Pipeline

This template teaches the real-world workflow:

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Develop    │ ──▶ │ Containerize│ ──▶ │   Deploy    │
│ docker:dev  │     │ docker:prod │     │ AWS App     │
│             │     │             │     │ Runner      │
└─────────────┘     └─────────────┘     └─────────────┘
```

**Why Docker from Day 1?**
- Same environment locally and in production
- No "works on my machine" issues
- Deployment-ready from the start
- Industry-standard workflow

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.x | React framework with App Router |
| React | 19.x | UI component library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| Docker | Latest | Containerization |
| AWS App Runner | - | Cloud deployment |
| AWS ECR | - | Container registry |

---

## Project Structure

```
agentic-landing-template/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page (EDIT THIS)
│   └── globals.css         # Global styles
├── public/
│   └── images/             # Your images here
├── docs/
│   ├── PRD.md              # Product Requirements
│   ├── TECH-STACK.md       # Technical details
│   ├── DEPLOYMENT-ROADMAP.md # AWS deployment guide
│   └── CONTENT-TEMPLATES.md  # Content examples
├── templates/
│   ├── services.tsx        # Consulting services template
│   ├── portfolio.tsx       # Designer/developer portfolio template
│   ├── resume.tsx          # Digital resume/CV template
│   └── enterprise.tsx      # Enterprise initiative template
├── GEMINI.md               # System prompt for Gemini CLI
├── CLAUDE.md               # System prompt for Claude Code
├── Dockerfile              # Container configuration
├── docker-compose.yml      # Local Docker setup
└── package.json            # Dependencies
```

---

## Using Templates

This project includes **4 ready-to-use templates** optimized for different use cases. Choose the one that fits your needs:

### Template Options

| Template | Best For | Key Sections |
|----------|----------|--------------|
| **Default** (`app/page.tsx`) | General personal branding | Hero, About, Services, Work, FAQ, Contact |
| **Services** (`templates/services.tsx`) | Consultants, coaches, freelancers | DIY/DWY/DFY tiers, case studies, testimonials |
| **Portfolio** (`templates/portfolio.tsx`) | Designers, developers, creatives | Project grid, skills, experience timeline |
| **Resume** (`templates/resume.tsx`) | Job seekers, career changers | Experience, skills matrix, education, projects |
| **Enterprise** (`templates/enterprise.tsx`) | Internal initiatives, change management | Vision, benefits, roadmap, FAQ, get involved |

### Quick Start with Templates

**Option 1: Copy and Replace**
```bash
# For consulting services
cp templates/services.tsx app/page.tsx

# For portfolio
cp templates/portfolio.tsx app/page.tsx

# For resume
cp templates/resume.tsx app/page.tsx

# For enterprise initiative
cp templates/enterprise.tsx app/page.tsx
```

**Option 2: Use AI to Switch**
```
"Replace the current page.tsx with the services template optimized for consultants"
```

```
"Switch to the portfolio template for showcasing my design work"
```

```
"Use the enterprise template for our digital transformation initiative"
```

### Customizing Templates

Each template has placeholder content marked with `[brackets]`. Use AI prompts to customize:

**Services Template:**
```
"Customize the services template with:
- Name: Sarah Chen
- Specialty: AI Strategy Consulting
- Tier 1: AI Readiness Assessment - $497
- Tier 2: Implementation Coaching - $2,500/month
- Tier 3: Full-Service AI Transformation - Custom"
```

**Portfolio Template:**
```
"Update the portfolio template with:
- Name: Alex Rivera
- Role: Product Designer
- Add 5 projects from my work at [Company]
- Skills: Figma, Framer, React, TailwindCSS"
```

**Resume Template:**
```
"Customize the resume with:
- Name: Jordan Park
- Target role: Senior Software Engineer
- Current: Tech Lead at StartupCo (2022-present)
- Previous: SDE II at BigTech (2019-2022)
- Skills: TypeScript, React, AWS, Go"
```

**Enterprise Template:**
```
"Customize the enterprise template for 'Project Phoenix':
- Initiative: Cloud Migration Program
- Sponsor: CTO Jane Wilson
- Phase 1: Assessment (Complete)
- Phase 2: Pilot Migration (Active - 65%)
- Phase 3: Full Migration (Upcoming)
- Key metric: 40% cost reduction target"
```

---

## Prompt Library

Copy and paste these prompts into your agentic CLI tool. Replace bracketed content with your information.

### Setup & Configuration

| Task | Prompt |
|------|--------|
| Install dependencies | `"Install all npm dependencies for this project"` |
| Start dev server | `"Start the Next.js development server"` |
| Build for production | `"Build the project for production"` |
| Check for errors | `"Run TypeScript type checking and fix any errors"` |

### Content Customization

#### Hero Section
```
"Update the hero section with:
- Name: [Your Name]
- Title: [Your Title/Profession]
- Tagline: [Your value proposition in one sentence]
- Primary CTA button: [Button text] linking to [#section or URL]
- Secondary CTA: [Button text] linking to [URL]"
```

#### Services Section
```
"Replace the services section with these 3 services:
1. [Service Name]: [Description] - $[Price] or [Pricing model]
2. [Service Name]: [Description] - $[Price] or [Pricing model]
3. [Service Name]: [Description] - $[Price] or [Pricing model]
Include icons that match each service theme."
```

#### About/Authority Section
```
"Update the authority/about section with:
- Years of experience: [X years]
- Key credential 1: [Certification/Degree/Achievement]
- Key credential 2: [Notable client/project/publication]
- Key credential 3: [Award/Recognition]
- Brief bio: [2-3 sentences about your background]"
```

#### Case Studies/Portfolio
```
"Add a case studies section with these projects:
1. [Project Name]: [Problem solved] → [Result achieved] for [Client type]
2. [Project Name]: [Problem solved] → [Result achieved] for [Client type]
3. [Project Name]: [Problem solved] → [Result achieved] for [Client type]
Include metrics where possible (%, $, time saved)."
```

#### Testimonials
```
"Add a testimonials section with these quotes:
1. '[Quote]' - [Name], [Title] at [Company]
2. '[Quote]' - [Name], [Title] at [Company]
3. '[Quote]' - [Name], [Title] at [Company]"
```

#### FAQ Section
```
"Create an FAQ section answering these questions:
1. [Common question about your services]
2. [Question about pricing/process]
3. [Question about qualifications/experience]
4. [Question about getting started]
Make answers concise (2-3 sentences each)."
```

#### Contact Section
```
"Update the contact section with:
- Email: [your@email.com]
- Calendly link: [https://calendly.com/yourusername]
- LinkedIn: [https://linkedin.com/in/yourusername]
- GitHub: [https://github.com/yourusername] (optional)
- Location: [City, State/Country]"
```

### Styling & Design

| Task | Prompt |
|------|--------|
| Change color scheme | `"Change the primary color from blue to [green/purple/orange/teal] throughout the site"` |
| Update fonts | `"Change the display font to [Poppins/Montserrat/Raleway] and body font to [Open Sans/Lato/Roboto]"` |
| Add dark mode | `"Ensure all sections have proper dark mode styling with slate backgrounds"` |
| Improve mobile | `"Review and fix mobile responsiveness issues, especially in the [section name]"` |
| Add animations | `"Add subtle fade-in animations when sections scroll into view"` |

### Docker & Local Testing

| Task | Prompt |
|------|--------|
| Build Docker image | `"Build a Docker image tagged my-landing:v1"` |
| Run container | `"Run the Docker container on port 3000"` |
| Check container health | `"Show me the status of running Docker containers"` |
| View container logs | `"Show the logs from my running container"` |
| Stop container | `"Stop and remove all running containers"` |
| Rebuild after changes | `"Rebuild the Docker image and restart the container"` |

### AWS Deployment

| Task | Prompt |
|------|--------|
| Configure AWS CLI | `"Help me configure AWS CLI with my credentials"` |
| Create ECR repository | `"Create an ECR repository named my-landing-page in us-west-2"` |
| Login to ECR | `"Authenticate Docker with my ECR registry"` |
| Push to ECR | `"Tag and push my-landing:v1 to my ECR repository"` |
| Deploy to App Runner | `"Deploy my ECR image to AWS App Runner with 1 vCPU and 2GB memory"` |
| Get deployment URL | `"Show me the public URL of my App Runner service"` |
| Check deployment status | `"Check the status of my App Runner deployment"` |
| View CloudWatch logs | `"Show me recent logs from my App Runner service"` |
| Estimate costs | `"Estimate the monthly cost of running this on App Runner"` |
| Clean up resources | `"Delete my App Runner service and ECR repository to avoid charges"` |

### Git & Version Control

| Task | Prompt |
|------|--------|
| Initialize git | `"Initialize git and create initial commit"` |
| Create feature branch | `"Create a new branch for adding [feature name]"` |
| Commit changes | `"Commit my changes with a descriptive message"` |
| Push to GitHub | `"Push my branch to GitHub"` |
| Create PR | `"Create a pull request for my changes"` |

### Troubleshooting

| Issue | Prompt |
|-------|--------|
| Build errors | `"The build is failing with this error: [paste error]. Help me fix it."` |
| Styling issues | `"The [section] looks broken on mobile. Fix the responsive design."` |
| Docker issues | `"My Docker container exits immediately. Debug and fix the issue."` |
| AWS errors | `"I'm getting this AWS error: [paste error]. What's wrong?"` |
| Type errors | `"Fix all TypeScript errors in the project"` |

### Enterprise Initiative Prompts

#### Transform to Initiative Site
```
"Transform this landing page into an internal initiative communication site for [Initiative Name] sponsored by [Executive Name, Title]"
```

#### Vision & Business Context
```
"Replace the about section with a Vision & Business Context section explaining:
- The Challenge: [Current business problem]
- Our Vision: [Future state we're creating]
- Why Now: [Market forces, competitive pressure, opportunity]
- Strategic Alignment: [How this supports company OKRs]"
```

#### Benefits by Stakeholder
```
"Replace the services section with a Benefits section for three audiences:
- For Employees: [How this improves their work]
- For Customers: [How this improves their experience]
- For the Business: [Revenue, cost, competitive impact]"
```

#### Program Roadmap
```
"Replace case studies with a Roadmap showing:
- Phase 1 [Name] (Q1-Q2): [Deliverables] - Status: Active
- Phase 2 [Name] (Q3-Q4): [Deliverables] - Status: Upcoming
- Phase 3 [Name] (Next Year): [Deliverables] - Status: Future
Include success metrics for each phase."
```

#### Internal FAQ
```
"Update FAQ for an internal initiative addressing:
- How will this affect my day-to-day work?
- Will there be job losses?
- What if I have concerns or ideas?
- What's the timeline for my team?"
```

#### Get Involved Section
```
"Replace contact section with a Get Involved section:
- Ways to Participate: [Champion role, working groups, pilot program]
- Stay Informed: [Newsletter, town halls, Slack channel]
- Key Contacts: [Program lead, change management, support]"
```

#### Progress Updates
```
"Add a Metrics Dashboard section showing current vs target:
- Adoption: [X]% → [Y]% employees using new system
- Efficiency: [X] days → [Y] days cycle time
- Savings: $[X]M → $[Y]M annual cost reduction
- Satisfaction: [X] → [Y] employee NPS"
```

---

## Content Templates

Choose a template that matches your use case:

### 1. Services Template (Consultants, Freelancers)
- Hero with value proposition
- 3-tier service offerings (DIY/DWY/DFY)
- Authority/credentials section
- Case studies with metrics
- FAQ section
- Contact with Calendly

### 2. Portfolio Template (Designers, Developers)
- Hero with specialty
- Project gallery with filters
- Skills/technologies section
- Work experience timeline
- Testimonials
- Contact form

### 3. Resume Template (Job Seekers)
- Professional headshot hero
- Experience timeline
- Skills matrix
- Education & certifications
- Publications/projects
- Download PDF option

### 4. Enterprise Initiative Template (Internal Communications)
- Vision & business context section
- Executive sponsor highlight
- Benefits by stakeholder (employees, customers, business)
- Program roadmap with phases
- Metrics dashboard
- FAQ addressing change concerns
- Get involved / participation options
- Progress updates and milestones

See `docs/CONTENT-TEMPLATES.md` for complete examples and prompts.

---

## How to Use This Project Documentation

This project includes comprehensive documentation for each use case. Follow the guide below based on your needs.

### Step 1: Choose Your Use Case

| If you're building... | Start with PRD | Then use Content Template |
|-----------------------|----------------|---------------------------|
| Consulting/Freelance site | [PRD Template 1: Consulting Services](docs/PRD-TEMPLATES.md#prd-template-1-consulting-services) | [Template 1: Consulting Services](docs/CONTENT-TEMPLATES.md#template-1-consulting-services) |
| Designer/Developer portfolio | [PRD Template 2: Portfolio](docs/PRD-TEMPLATES.md#prd-template-2-portfolio-designersdevelopers) | [Template 2: Portfolio](docs/CONTENT-TEMPLATES.md#template-2-portfolio-designersdevelopers) |
| Digital resume/CV | [PRD Template 3: Digital Resume](docs/PRD-TEMPLATES.md#prd-template-3-digital-resume) | [Template 3: Digital Resume](docs/CONTENT-TEMPLATES.md#template-3-digital-resume) |
| Internal initiative site | [PRD Template 4: Enterprise Initiative](docs/PRD-TEMPLATES.md#prd-template-4-enterprise-initiative-communication) | [Template 4: Enterprise Initiative](docs/CONTENT-TEMPLATES.md#template-4-enterprise-initiative-communication) |

### Step 2: Review Your PRD Template

Each PRD template provides:

| Section | What You'll Learn |
|---------|-------------------|
| **Executive Summary** | What your landing page should achieve |
| **Problem Statement** | Who your target audience is and their challenges |
| **User Stories** | Specific requirements with acceptance criteria |
| **Functional Requirements** | Which sections to include and what content |
| **Success Metrics** | How to measure if your page is working |
| **Content Requirements** | Detailed guidance for each section |

**Agentic Prompt to Generate Custom PRD**:
```
"Create a PRD for my [consulting/portfolio/resume/initiative] landing page
targeting [audience] who need [what they need].
My goal is [primary goal] and success means [success metric]."
```

### Step 3: Customize Content Using Templates

Each content template provides:

| Component | What's Included |
|-----------|-----------------|
| **Section-by-section content** | Exactly what text to include |
| **Examples** | Real-world examples you can adapt |
| **Agentic prompts** | Copy-paste prompts to customize each section |
| **Best practices** | Tips for effective content |

### Step 4: Build and Deploy

| Phase | Documentation | Key Actions |
|-------|---------------|-------------|
| **Local Development** | [Quick Start](#quick-start-5-minutes) | Fork, install, customize |
| **Docker Testing** | [DEPLOYMENT-ROADMAP.md](docs/DEPLOYMENT-ROADMAP.md#phase-2-docker-containerization-day-1-2) | Build image, test container |
| **AWS Deployment** | [DEPLOYMENT-ROADMAP.md](docs/DEPLOYMENT-ROADMAP.md#phase-5-deploy-to-app-runner-day-2-3) | Push to ECR, deploy to App Runner |

### Documentation Map

```
┌─────────────────────────────────────────────────────────────────┐
│                    PLANNING PHASE                                │
│                                                                  │
│  ┌──────────────────┐     ┌──────────────────┐                 │
│  │  PRD-TEMPLATES   │────▶│ Choose your PRD  │                 │
│  │  (docs/)         │     │ template (1-4)   │                 │
│  └──────────────────┘     └──────────────────┘                 │
│           │                        │                            │
│           ▼                        ▼                            │
│  ┌──────────────────┐     ┌──────────────────┐                 │
│  │  TECH-STACK.md   │     │ Understand user  │                 │
│  │  (Skills/Agents) │     │ stories & metrics│                 │
│  └──────────────────┘     └──────────────────┘                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                   CUSTOMIZATION PHASE                            │
│                                                                  │
│  ┌──────────────────┐     ┌──────────────────┐                 │
│  │ CONTENT-TEMPLATES│────▶│ Copy prompts for │                 │
│  │  (docs/)         │     │ each section     │                 │
│  └──────────────────┘     └──────────────────┘                 │
│           │                        │                            │
│           ▼                        ▼                            │
│  ┌──────────────────┐     ┌──────────────────┐                 │
│  │  GEMINI.md or    │     │ Run prompts with │                 │
│  │  CLAUDE.md       │     │ AI assistant     │                 │
│  └──────────────────┘     └──────────────────┘                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    DEPLOYMENT PHASE                              │
│                                                                  │
│  ┌──────────────────┐     ┌──────────────────┐                 │
│  │ DEPLOYMENT-      │────▶│ Follow step-by-  │                 │
│  │ ROADMAP.md       │     │ step guide       │                 │
│  └──────────────────┘     └──────────────────┘                 │
│           │                        │                            │
│           ▼                        ▼                            │
│  ┌──────────────────┐     ┌──────────────────┐                 │
│  │ Docker + AWS     │     │ Live site on     │                 │
│  │ commands         │     │ App Runner       │                 │
│  └──────────────────┘     └──────────────────┘                 │
└─────────────────────────────────────────────────────────────────┘
```

### Quick Reference: Which Doc When?

| When you need to... | Use this document |
|---------------------|-------------------|
| Understand requirements for your use case | `docs/PRD-TEMPLATES.md` |
| Get copy-paste content and prompts | `docs/CONTENT-TEMPLATES.md` |
| Learn the tech stack and AI agents | `docs/TECH-STACK.md` |
| Deploy to AWS step-by-step | `docs/DEPLOYMENT-ROADMAP.md` |
| Understand the overall project | `docs/PRD.md` |
| Configure Gemini CLI | `GEMINI.md` |
| Configure Claude Code | `CLAUDE.md` |

---

## Deployment Roadmap

### Phase 1: Local Development (Day 1)
1. Fork and clone repository
2. Install dependencies
3. Customize content with prompts
4. Test locally with `npm run dev`

### Phase 2: Docker Testing (Day 1-2)
1. Build Docker image
2. Test container locally
3. Verify all sections render
4. Check mobile responsiveness

### Phase 3: AWS Setup (Day 2)
1. Create AWS account (if needed)
2. Configure AWS CLI
3. Create ECR repository
4. Set up IAM permissions

### Phase 4: Production Deploy (Day 2-3)
1. Push image to ECR
2. Create App Runner service
3. Configure custom domain (optional)
4. Set up monitoring

### Phase 5: Maintenance
1. Update content as needed
2. Monitor costs (~$5-15/month)
3. Review CloudWatch logs
4. Update dependencies quarterly

---

## Cost Estimate

| Service | Monthly Cost |
|---------|-------------|
| AWS App Runner (1 vCPU, 2GB) | $5-15 |
| ECR Storage | <$1 |
| Data Transfer | <$1 |
| **Total** | **~$7-17/month** |

*Costs vary based on traffic. First 12 months may qualify for AWS Free Tier.*

---

## System Prompts

This project includes optimized system prompts for AI assistants:

- **GEMINI.md** - Configuration for Google's Gemini CLI
- **CLAUDE.md** - Configuration for Anthropic's Claude Code

These files help the AI understand your project structure and coding standards.

---

## Support

### Documentation
- [Product Requirements](docs/PRD.md) - Main PRD for the template project
- [PRD Templates by Use Case](docs/PRD-TEMPLATES.md) - Tailored PRDs for each landing page type
- [Tech Stack Details](docs/TECH-STACK.md) - Technology and agent documentation
- [Deployment Guide](docs/DEPLOYMENT-ROADMAP.md) - AWS deployment walkthrough
- [Content Templates](docs/CONTENT-TEMPLATES.md) - Ready-to-use content for all 4 templates

### Getting Help
- Open an issue on GitHub
- Check the FAQ in documentation
- Review troubleshooting prompts above

---

## License

MIT License - Feel free to use for personal or commercial projects.

---

## Credits

Created for **CSTU CSE 651: Container Development to AWS Deployment**

Instructor: Ping Wu
Course: Agentic Development with Cloud Deployment

---

**Ready to build your landing page?** Start with the [Quick Start](#quick-start-5-minutes) above!
