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
                Available for strategic CX + ops projects
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-6">
                Hi, I&apos;m
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
                  {" "}
                  Tiana Le
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 font-medium">
                Analyst & CX Strategist for complex customer-facing teams
              </p>

              <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                I translate messy operational data into clear action for higher ed programs, enterprise product orgs, and large service teams—combining budget stewardship, escalation management, and systems know-how.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-xl transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                >
                  Book a working session
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-all"
                >
                  See recent work
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
                  What I Bring
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Hybrid operator who can parachute into academic programs, public agencies, or Big Tech to stabilize systems, keep stakeholders informed, and surface the insights leaders need.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">9+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Years improving CX & ops</div>
                </div>
                <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">300+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Executive escalations resolved</div>
                </div>
                <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">$5M+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Academic budget stewardship</div>
                </div>
                <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">4</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Industries navigated</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-600 dark:text-purple-300 flex-shrink-0">
                    <BeakerIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Education</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      MBA + Data Science (in progress) & BS in Computer Systems Engineering at California Science & Technology University.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-300 flex-shrink-0">
                    <BriefcaseIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Experience</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      San Jose State University, Santa Clara Valley Transportation Authority, and five years across Google Maps, Search, and hardware support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center text-amber-600 dark:text-amber-300 flex-shrink-0">
                    <SparklesIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Recognition</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Promoted into Google&apos;s Executive Escalations team in &lt;3 months; trusted to manage accreditation, budget, and international partnerships for SJSU&apos;s Ed.D. program.
                    </p>
                  </div>
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
                  Ways to Work Together
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Choose the engagement model that fits your team&apos;s maturity—from quick insight sprints to embedded operational leadership.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white mb-6">
                    <BookOpenIcon />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Ops Intel Sprint</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    2-week dive into your reporting, ticketing, or enrollment data to surface the trends your leaders need now.
                  </p>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                    $750
                    <span className="text-base font-normal text-slate-500"> / engagement</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      Data gathering + cleanup
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      KPI dashboard & brief
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      Executive-ready recap
                    </li>
                  </ul>
                  <a
                    href="#contact"
                    className="block w-full text-center py-3 px-6 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-xl font-medium transition-colors"
                  >
                    Book sprint
                  </a>
                </div>

                <div className="relative group bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-purple-500 shadow-xl shadow-purple-500/10">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Most popular
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-6">
                    <UsersIcon />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">CX Command Center</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Ongoing partner for support, academic, or civic teams that need someone to triage issues, handle escalations, and keep leadership informed.
                  </p>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                    $2,500
                    <span className="text-base font-normal text-slate-500"> / month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      Executive escalation ownership
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      Weekly scorecards + insights
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      Cross-functional coordination
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      Process fixes & docs
                    </li>
                  </ul>
                  <a
                    href="#contact"
                    className="block w-full text-center py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-colors"
                  >
                    Apply for retainer
                  </a>
                </div>

                <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white mb-6">
                    <BoltIcon />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Embedded Ops Lead</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Fractional leader embedded with your team to stabilize systems, manage budgets, and stand up new processes.
                  </p>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                    Custom
                    <span className="text-base font-normal text-slate-500"> scope-based</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      Budget + vendor oversight
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      Systems + policy compliance
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      Accreditation & reporting support
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      International partnership liaison
                    </li>
                  </ul>
                  <a
                    href="#contact"
                    className="block w-full text-center py-3 px-6 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-xl font-medium transition-colors"
                  >
                    Discuss scope
                  </a>
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
                  Featured Work & Wins
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  A sampling of the projects and outcomes I&apos;ve driven across academia, transportation, and Big Tech.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold opacity-20">01</span>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">
                      San Jose State University · Higher Education
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Ed.D Program Ops Overhaul
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                      Managed budgets, faculty appointments, and accreditation reporting while coordinating international field experiences.
                    </p>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                      <TrendingUpIcon />
                      Protected multi-million dollar budget with zero audit findings
                    </div>
                  </div>
                </div>

                <div className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold opacity-20">02</span>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-pink-200 dark:text-pink-300 font-medium mb-2">
                      Google · Maps & Search
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Executive Escalation Command Desk
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                      Resolved high-priority CEO-level complaints, triaged BBB/FCC issues, and partnered with PMs/engineers to deploy fixes.
                    </p>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                      <TrendingUpIcon />
                      Closed 328 legacy bugs & restored SLA compliance
                    </div>
                  </div>
                </div>

                <div className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold opacity-20">03</span>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-amber-600 dark:text-amber-400 font-medium mb-2">
                      Santa Clara Valley Transportation Authority · Public Sector
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Keep SCV Beautiful Program Launch
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                      Ran county-wide anti-litter events with Caltrans & city partners, modernized the volunteer website, and supported traffic model analysis.
                    </p>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                      <TrendingUpIcon />
                      12 events coordinated with 5+ agencies and partners
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
                  FAQs
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    What types of teams do you support?
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Higher education programs, support orgs, public agencies, and product teams that need someone who can navigate policy constraints while keeping stakeholders aligned.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    How fast can you ramp?
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    I typically ship insights within the first week. My background in executive escalations means I&apos;m comfortable diving in with incomplete context and building clarity fast.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    Do you only work remotely?
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Mostly remote, but I can be on-site in the Bay Area for key workshops, onboarding, or executive sessions.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    Can you help with compliance-heavy work?
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Yes—my roles at SJSU and Google required careful handling of FERPA, CSU policies, and regulatory complaints. I build documentation trails leaders can trust.
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
                Share what you&apos;re building, where you&apos;re stuck, and the outcomes you need. I&apos;ll reply within 1–2 business days.
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
