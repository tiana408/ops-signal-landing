// ============================================================
// TIANA LE - Agentic Landing Page
// Customized from pingwu/agentic-landing-template
// ============================================================

import { MobileNav } from "@/components/MobileNav";
import {
  CheckIcon,
  ArrowRightIcon,
  TrendingUpIcon,
  CalendarIcon,
  MailIcon,
  BeakerIcon,
  BriefcaseIcon,
  SparklesIcon,
  BookOpenIcon,
  UsersIcon,
  BoltIcon,
  LinkedInIcon,
  GitHubIcon,
  XTwitterIcon,
} from "@/components/Icons";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
        <nav
          aria-label="Main navigation"
          className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800"
        >
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-700 to-indigo-700 flex items-center justify-center text-white font-bold text-sm">
                TL
              </div>
              <span className="text-xl font-bold tracking-tight font-display text-slate-900 dark:text-white">
                Tiana Le
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                About
              </a>
              <a
                href="#work"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Work
              </a>
              <a
                href="#contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>

            <MobileNav />
          </div>
        </nav>

        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-purple-100/40 dark:bg-purple-900/10 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-70 -translate-x-1/3 translate-y-1/4"></div>

          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                </span>
                Open for AI tutor + cultural intelligence roles
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-6">
                AI Tutor for Viral Culture & Search Integrity
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 font-medium">
                I&apos;m Tiana Le—an X power user, meme translator, and search evaluator who keeps AI systems aligned with real-world culture.
              </p>

              <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                I audit search pages, surface model failure modes, and decode internet subcultures so engineers can ship better ranking logic, safer recommendations, and funnier chatbots. Off-hours I&apos;m deep in geopolitics, history, and AI research threads, documenting how memes travel and what makes Grok laugh. 9+ years at Google, SJSU, and freelance AI labs taught me how to turn chaos into diagnostics that leadership actually uses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-xl transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                >
                  Request cultural eval support
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-all"
                >
                  See diagnostic playbook
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                  Signals That Matter
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                  Search quality teams, xAI, and cultural research labs hire me when they need a human who speaks product, statistics, and internet subcultures at the same time.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">9 yrs</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Human evaluation & ops rigor</div>
                </div>
                <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">328+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Google bugs + escalations closed</div>
                </div>
                <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">98%+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Inter-rater reliability on audits</div>
                </div>
                <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">X trend monitoring & meme tracking</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-600 dark:text-purple-300 flex-shrink-0">
                    <SparklesIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Internet-Native Intelligence</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Daily immersion in X, Discord, and niche forums; I differentiate satire vs. sincerity, new slang vs. stale memes, and authentic virality vs. coordinated spam.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-300 flex-shrink-0">
                    <BeakerIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Search & Model Evaluation</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Built taxonomies, intent rubrics, and metadata experiments for Google Maps/Search, SJSU academic systems, and freelance AI clients.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center text-amber-600 dark:text-amber-300 flex-shrink-0">
                    <BriefcaseIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Structured Reporting</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Executive-ready briefs with severity tiers, root-cause hypotheses, and model-level recommendations that ship without clarification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-3">Resume Snapshot</p>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                  Ops-bred analyst pivoting into AI tutor work
                </h2>
                <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                  Passionate X power user and data analyst with deep interest in memes, viral trends, geopolitics, history, and current events. I&apos;m actively seeking part-time or contract AI opportunities where I can turn that obsession into better model behavior.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
                  <h3 className="text-xl font-semibold mb-3">Skills Stack</h3>
                  <ul className="space-y-2 text-sm text-slate-200">
                    <li className="flex gap-2"><span className="text-purple-300">AI & ML:</span> Human evaluation, taxonomy design, AI model training data, Python/Colab workflows, QA & bug triage.</li>
                    <li className="flex gap-2"><span className="text-purple-300">Customer & CX:</span> Executive escalations, structured annotations, policy-aligned ratings, hardware/software triage.</li>
                    <li className="flex gap-2"><span className="text-purple-300">Data & Reporting:</span> KPI dashboards, error distribution analysis, process optimization, trend tracking.</li>
                    <li className="flex gap-2"><span className="text-purple-300">Operational:</span> Cross-functional coordination, documentation systems, PeopleSoft/Jira/Zendesk navigation, compliance rigor.</li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
                  <h3 className="text-xl font-semibold mb-3">Current Focus</h3>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    Ed.D Program Analyst at San Jose State University (since Feb 2025). I manage a $5M+ doctorate program budget, coordinate faculty appointments, support accreditation prep, and serve as liaison for international field experiences—all while moonlighting as an AI tutor, meme analyst, and geopolitical trend tracker.
                  </p>
                  <p className="text-slate-200 text-sm leading-relaxed mt-4">
                    Looking to bring that analytical discipline into AI cultural intelligence teams—especially roles touching Grok, search, or discovery systems.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-purple-200 font-semibold mb-1">Google • 2019–2023</p>
                  <p className="text-slate-200">Sr. Business Analyst (Maps), QA Analyst (Search/YouTube), Executive Escalations, Pixel Tier III. Designed guideline-based ratings, closed 328 bugs, escalated policy risks, and wrote reports that engineers could ship on.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-purple-200 font-semibold mb-1">Freelance • 2022–2024</p>
                  <p className="text-slate-200">Technical coordinator for robotics + AI content projects. Built documentation for data collection, optimized AI-generated video/speech content, and tracked deliverables across multi-client pipelines.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-purple-200 font-semibold mb-1">Public Sector • 2024</p>
                  <p className="text-slate-200">Traffic Engineering Intern at Santa Clara Valley Transportation Authority—ran compliance-heavy field programs, modeled traffic flows, and coordinated multi-agency initiatives.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                  Diagnostic Focus Areas
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                  I operate like a lab partner for AI teams—feeding Grok, search ranking pipelines, and discovery surfaces with cultural intelligence and structured QA.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white mb-6">
                    <BookOpenIcon />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Search + Feed Reality Checks</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Evaluate SERPs and feeds across relevance, freshness, authority, and intent alignment. Build taxonomies to categorize failure modes and quantify harm.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />Query-set sampling & scoring rubrics</li>
                    <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />Metadata experiments (poster identity, format, recency)</li>
                    <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />Error distribution dashboards</li>
                  </ul>
                </div>

                <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-6">
                    <UsersIcon />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Cultural Nuance Lab</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Decode memes, trolling tactics, satire, and locale-specific language evolution so AI outputs stay funny, safe, and on-brand.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />Gen-Z & Millennial tone mapping</li>
                    <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />Meme lifecycle + propagation tracking</li>
                    <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />Spam vs. authentic virality diagnostics</li>
                  </ul>
                </div>

                <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white mb-6">
                    <BoltIcon />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Structured Diagnostics & Reporting</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Deliver engineering-ready briefs: severity tiers, root-cause hypotheses, recommended mitigations, and success metrics.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />Failure taxonomies + tagging schema</li>
                    <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />Inter-rater reliability calibration</li>
                    <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />Executive + PM comms templates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                  Role-Aligned Experience
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Proof that I can manage doctorate programs by day and dissect meme ecosystems by night—each role sharpened the cultural intelligence I now offer AI teams.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold opacity-20">01</span>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">
                      San Jose State University · Academic Programs
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Ed.D Intelligence & Reporting Desk
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                      Built accreditation-ready dashboards, reconciled $5M+ budgets, and maintained documentation chains for international partnerships.
                    </p>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                      <TrendingUpIcon />
                      Zero audit findings while translating fiscal data into executive-friendly storyboards
                    </div>
                  </div>
                </div>

                <div className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold opacity-20">02</span>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-pink-200 dark:text-pink-300 font-medium mb-2">
                      Google · Search, Maps & YouTube
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Search & Media Quality Command Desk
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                      Labeled geopolitical edge cases, triaged BBB/FCC escalations, and partnered with PMs/engineers to close systemic content failures.
                    </p>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                      <TrendingUpIcon />
                      Closed 328 legacy bugs, restored SLA compliance, and improved rater calibration
                    </div>
                  </div>
                </div>

                <div className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold opacity-20">03</span>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-amber-600 dark:text-amber-400 font-medium mb-2">
                      Freelance · AI Tutor & Meme Lab
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Grok-Style Meme & Trend Tutor
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                      Curated viral meme datasets, documented trolling tactics, and iteratively refined AI-generated content for clients and robotics data collection teams.
                    </p>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                      <TrendingUpIcon />
                      Delivered “banger” reports that separate satire, spam, and signal before data hits the model
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                  How I Work
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    Where do you plug in fastest?
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Search quality pods, recommender teams, academic programs, and xAI initiatives that need structured human evals with cultural fluency.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    How fast can you ramp on a new taxonomy?
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    I draft taxonomy scaffolds and severity ladders within the first week. Executive escalations taught me to build hypotheses fast, then tighten precision the moment fresh data lands.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    How do you stay current on memes & trends?
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    I live on X (power user), Discords, stan Twitter, and geopolitical feeds. I catalog emerging slang, troll tactics, and virality mechanics daily so your models aren't surprised.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    What deliverables can we expect?
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Annotated datasets, taxonomy docs, severity scorecards, and PM-ready briefs with recommended mitigations + success metrics. Each packet is written so engineers need zero follow-up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative py-20 bg-white dark:bg-slate-900 overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Looking for part-time, contract, or project-based AI tutor + cultural analyst roles. Tell me what you're building and I'll reply within 1–2 business days.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="mailto:tianale9@gmail.com"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-xl transition-all shadow-lg shadow-purple-500/25"
                >
                  <MailIcon className="w-5 h-5 mr-2" />
                  Email me directly
                </a>
                <a
                  href="https://www.linkedin.com/in/tiana-le/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all"
                >
                  <LinkedInIcon className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </div>

              <div className="flex justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/tiana-le/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://github.com/tiana408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://x.com/agarthaishome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <XTwitterIcon />
                </a>
                <a
                  href="mailto:tianale9@gmail.com"
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <MailIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-slate-600 dark:text-slate-400">
                © {new Date().getFullYear()} Tiana Le. All rights reserved.
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
