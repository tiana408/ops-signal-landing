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

**Live Demo**: [Your deployed URL here]

---

## Quick Start (5 Minutes)

### 1. Fork & Clone

```bash
# Fork this repo on GitHub, then:
git clone https://github.com/YOUR-USERNAME/agentic-landing-template.git
cd agentic-landing-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development

```bash
npm run dev
# Open http://localhost:3000
```

### 4. Customize with AI

Using **Gemini CLI**:
```bash
gemini "Update the hero section with my name 'John Smith' and tagline 'Full Stack Developer'"
```

Using **Claude Code**:
```bash
claude "Update the hero section with my name 'John Smith' and tagline 'Full Stack Developer'"
```

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
│   ├── services.tsx        # Services page template
│   ├── portfolio.tsx       # Portfolio template
│   └── resume.tsx          # Resume/CV template
├── GEMINI.md               # System prompt for Gemini CLI
├── CLAUDE.md               # System prompt for Claude Code
├── Dockerfile              # Container configuration
├── docker-compose.yml      # Local Docker setup
└── package.json            # Dependencies
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

See `templates/` folder for complete examples.

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
- [Product Requirements](docs/PRD.md)
- [Tech Stack Details](docs/TECH-STACK.md)
- [Deployment Guide](docs/DEPLOYMENT-ROADMAP.md)
- [Content Templates](docs/CONTENT-TEMPLATES.md)

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
