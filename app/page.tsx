import React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  Code2,
  Workflow,
  Cpu,
  Compass,
  FileText,
  User,
  BookOpen,
  Database,
  Terminal,
  Trophy,
} from "lucide-react"
import { PERSONAL_INFO } from "@/data/profile"
import { PROJECTS } from "@/data/projects"
import SocialConnector from "@/components/sections/SocialConnector"
import ProjectCard from "@/components/sections/ProjectCard"

export default function HomePage() {
  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section className="relative px-6 pt-12 pb-20 md:px-12 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#CEB8A5]/60 bg-[#FFFFFF]/70 px-4 py-1.5 backdrop-blur-md shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B87333] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B87333]" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#573B2C]">
                  {PERSONAL_INFO.status}
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#2C1E18] leading-[1.08]">
                  Data Systems, <span className="italic font-normal text-[#B87333]">Intelligent AI</span> & Scalable Web.
                </h1>
                <p className="max-w-xl text-base sm:text-lg leading-relaxed text-[#573B2C]">
                  Hi, I&apos;m <strong>{PERSONAL_INFO.name}</strong>. Data engineer, software developer, and builder of <Link href="/projects/hackamate" className="text-[#B87333] font-semibold underline decoration-dotted underline-offset-4 hover:text-[#2C1E18]">HackaMate</Link>. Focused on high-performance data systems, machine learning empirical research, and full-stack web applications.
                </p>
              </div>

              {/* Call-to-Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/projects"
                  className="brown-btn-primary inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wider"
                >
                  <span>Explore Projects ({PROJECTS.length})</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-[#CEB8A5] bg-[#FFFFFF]/60 px-6 py-3.5 text-sm font-medium text-[#2C1E18] backdrop-blur-md transition-all hover:bg-[#FAF6F0] hover:border-[#2C1E18]"
                >
                  <User className="h-4 w-4 text-[#846353]" />
                  <span>About & Journey</span>
                </Link>
              </div>

              {/* Key Stats Bar */}
              <div className="pt-8 border-t border-[#E6D8CC]/80">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {PERSONAL_INFO.stats.map((stat, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1E18]">
                        {stat.value}
                      </span>
                      <p className="text-xs font-medium text-[#846353] uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Profile Photo / Portrait Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Decorative Earth Glow Ring */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#E6D8CC] via-[#DFCEBE] to-[#C8965A]/30 blur-xl opacity-60" />

                {/* Main Card Frame */}
                <div className="cream-gradient-card relative overflow-hidden rounded-3xl p-3 md:p-4 shadow-xl">
                  {/* Photo container */}
                  <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-[#EDE4DB] border border-[#CEB8A5]/40 flex flex-col justify-end p-6">
                    {/* Shashwat's Real Picture */}
                    <Image
                      src="/profile.jpg"
                      alt={PERSONAL_INFO.name}
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-500 hover:scale-105"
                    />

                    {/* Gradient Overlay for Readable Text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E18]/85 via-[#2C1E18]/25 to-transparent z-10" />

                    {/* Bottom overlay card info */}
                    <div className="relative z-20 space-y-1 text-white">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#DFCEBE]">
                        {PERSONAL_INFO.title}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#FAF6F0]">
                        {PERSONAL_INFO.name}
                      </h3>
                      <p className="text-xs text-[#EFE7DE] leading-relaxed">
                        {PERSONAL_INFO.location} • Jain University
                      </p>
                    </div>
                  </div>

                  {/* Card quick tag banner */}
                  <div className="mt-3 flex items-center justify-between px-2 text-xs text-[#573B2C]">
                    <span className="font-medium">HackaMate • MEDEQUIP • PCA Research</span>
                    <span className="font-mono text-[#846353]">BENGALURU</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONNECTED SOCIAL CHANNELS SECTION */}
      <section className="relative px-6 py-12 md:px-12 border-y border-[#E6D8CC]/80 bg-[#FFFFFF]/40 backdrop-blur-md">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#846353]">
                Direct Connectors
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2C1E18]">
                LinkedIn, GitHub, Email & Reachout
              </h2>
            </div>
            <p className="text-xs text-[#846353] max-w-xs sm:text-right">
              Direct links to Shashwat&apos;s active profiles and software repositories.
            </p>
          </div>

          <SocialConnector showDescription={true} />
        </div>
      </section>

      {/* FEATURED WORK & WORKFLOW HIGHLIGHTS */}
      <section className="relative px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B87333]">
                <Layers className="h-4 w-4" />
                <span>Curated Project Portfolio</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#2C1E18]">
                HackaMate, MEDEQUIP, PCA Research & More
              </h2>
              <p className="text-base text-[#573B2C] leading-relaxed">
                Prioritized engineering portfolio featuring HackaMate (developer matchmaking flagship), MEDEQUIP (full-stack medical e-commerce), PCA Classification Research (Springer paper submitted), Ghumau (travel exploration platform), and AlertNet (disaster preparedness hackathon UI).
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-[#CEB8A5] bg-[#FFFFFF]/70 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#2C1E18] transition-all hover:border-[#2C1E18] hover:bg-[#2C1E18] hover:text-[#FAF6F0]"
            >
              <span>View All ({PROJECTS.length}) Case Studies</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACKS & SKILLS SECTION */}
      <section className="relative px-6 py-20 md:px-12 border-t border-[#E6D8CC] bg-[#FFFFFF]/50 backdrop-blur-md">
        <div className="mx-auto max-w-7xl space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B87333]">
                <Cpu className="h-4 w-4" />
                <span>Engineering Competencies & Toolchain</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#2C1E18]">
                Tech Stacks & Technical Skills
              </h2>
              <p className="text-base text-[#573B2C] leading-relaxed">
                A structured overview of core competencies across data engineering, machine learning research, distributed systems, full-stack web, and low-level algorithmic foundations.
              </p>
            </div>

            <Link
              href="/experience"
              className="inline-flex items-center gap-2 rounded-full border border-[#CEB8A5] bg-[#FFFFFF]/70 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#2C1E18] transition-all hover:border-[#2C1E18] hover:bg-[#2C1E18] hover:text-[#FAF6F0]"
            >
              <span>View Verified Credentials</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Stacks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Category 1: Data Engineering & Analytics */}
            <div className="cream-gradient-card rounded-3xl p-7 border border-[#CEB8A5]/60 hover:border-[#B87333] transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2C1E18] text-[#FAF6F0]">
                    <Database className="h-5 w-5" />
                  </div>
                  <span className="earth-badge rounded-full px-2.5 py-0.5 text-[10px] font-mono font-medium">
                    Data Core
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C1E18]">
                  Data Engineering & Analytics
                </h3>
                <p className="text-xs text-[#573B2C] leading-relaxed">
                  Scalable tabular preprocessing, ETL pipelines, SQL schema modeling, Pandas transformations, and high-volume data ingest architectures.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E6D8CC]/80 flex flex-wrap gap-1.5">
                {["Python", "Pandas", "NumPy", "SQL Databases", "ETL Pipelines", "Data Modeling", "Matplotlib"].map((s, idx) => (
                  <span key={idx} className="rounded-md bg-[#FAF6F0] px-2 py-0.5 font-mono text-[11px] text-[#573B2C] border border-[#E6D8CC]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 2: Machine Learning & Research */}
            <div className="cream-gradient-card rounded-3xl p-7 border border-[#CEB8A5]/60 hover:border-[#B87333] transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2C1E18] text-[#FAF6F0]">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <span className="earth-badge rounded-full px-2.5 py-0.5 text-[10px] font-mono font-medium">
                    Springer Paper
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C1E18]">
                  Machine Learning & Empirical ML
                </h3>
                <p className="text-xs text-[#573B2C] leading-relaxed">
                  Principal Component Analysis eigen-decomposition, supervised classification benchmarking, covariance matrices, and empirical validation pipelines.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E6D8CC]/80 flex flex-wrap gap-1.5">
                {["Python", "Scikit-Learn", "NumPy", "Pandas", "Matplotlib", "PCA Eigen Analysis", "Statistical ML"].map((s, idx) => (
                  <span key={idx} className="rounded-md bg-[#FAF6F0] px-2 py-0.5 font-mono text-[11px] text-[#573B2C] border border-[#E6D8CC]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 3: Frontend & Modern Web Systems */}
            <div className="cream-gradient-card rounded-3xl p-7 border border-[#CEB8A5]/60 hover:border-[#B87333] transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2C1E18] text-[#FAF6F0]">
                    <Layers className="h-5 w-5" />
                  </div>
                  <span className="earth-badge rounded-full px-2.5 py-0.5 text-[10px] font-mono font-medium">
                    Frontend Core
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C1E18]">
                  Frontend Engineering & UI/UX
                </h3>
                <p className="text-xs text-[#573B2C] leading-relaxed">
                  High-velocity TypeScript and React development, Next.js page routers, Tailwind CSS design systems, Framer Motion transitions, and responsive mobile interfaces.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E6D8CC]/80 flex flex-wrap gap-1.5">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 & CSS3", "Framer Motion", "Vite"].map((s, idx) => (
                  <span key={idx} className="rounded-md bg-[#FAF6F0] px-2 py-0.5 font-mono text-[11px] text-[#573B2C] border border-[#E6D8CC]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 4: Backend & Systems Architecture */}
            <div className="cream-gradient-card rounded-3xl p-7 border border-[#CEB8A5]/60 hover:border-[#B87333] transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2C1E18] text-[#FAF6F0]">
                    <Workflow className="h-5 w-5" />
                  </div>
                  <span className="earth-badge rounded-full px-2.5 py-0.5 text-[10px] font-mono font-medium">
                    Backend Core
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C1E18]">
                  Backend & Systems Architecture
                </h3>
                <p className="text-xs text-[#573B2C] leading-relaxed">
                  RESTful microservices, Node.js and Express servers, Java Spring Boot backends, MySQL relational schemas, and secure Stripe payment processing.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E6D8CC]/80 flex flex-wrap gap-1.5">
                {["Node.js", "Express", "Java", "Spring Boot", "MySQL", "REST APIs", "Stripe Payments"].map((s, idx) => (
                  <span key={idx} className="rounded-md bg-[#FAF6F0] px-2 py-0.5 font-mono text-[11px] text-[#573B2C] border border-[#E6D8CC]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 5: Foundations & Algorithmic Tooling */}
            <div className="cream-gradient-card rounded-3xl p-7 border border-[#CEB8A5]/60 hover:border-[#B87333] transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2C1E18] text-[#FAF6F0]">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <span className="earth-badge rounded-full px-2.5 py-0.5 text-[10px] font-mono font-medium">
                    Computer Science
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C1E18]">
                  Foundations & Dev Tooling
                </h3>
                <p className="text-xs text-[#573B2C] leading-relaxed">
                  Data structures and algorithms, memory management in C/C++, Java object-oriented principles, Docker containers, Postman API validation, and Linux CLI environments.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E6D8CC]/80 flex flex-wrap gap-1.5">
                {["C/C++", "Java DSA", "Git & GitHub", "Docker", "Postman", "Linux CLI", "REST APIs"].map((s, idx) => (
                  <span key={idx} className="rounded-md bg-[#FAF6F0] px-2 py-0.5 font-mono text-[11px] text-[#573B2C] border border-[#E6D8CC]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 6: Hackathon Innovation & Team Collaboration */}
            <div className="cream-gradient-card rounded-3xl p-7 border border-[#CEB8A5]/60 hover:border-[#B87333] transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2C1E18] text-[#FAF6F0]">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <span className="earth-badge rounded-full px-2.5 py-0.5 text-[10px] font-mono font-medium">
                    Hackathon Runner-Up
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C1E18]">
                  Rapid Prototyping & Collaboration
                </h3>
                <p className="text-xs text-[#573B2C] leading-relaxed">
                  Rapid hackathon MVP execution, user journey mapping, multidisciplinary squad leadership, cross-functional sprints, and architectural pitching.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E6D8CC]/80 flex flex-wrap gap-1.5">
                {["Rapid Prototyping", "MVP Architecture", "User Workflows", "Team Leadership", "Pitch Demonstrations"].map((s, idx) => (
                  <span key={idx} className="rounded-md bg-[#FAF6F0] px-2 py-0.5 font-mono text-[11px] text-[#573B2C] border border-[#E6D8CC]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Philosophy Banner */}
          <div className="rounded-3xl bg-[#2C1E18] p-6 sm:p-8 text-[#FAF6F0] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B87333]">
                Core Engineering Standard
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF6F0]">
                Clean Architecture & Precise Execution
              </h4>
              <p className="text-xs sm:text-sm text-[#EFE7DE] leading-relaxed">
                No superficial abstractions or unnecessary boilerplate. Every project combines verified computational logic, robust data integrity, and dependable system resilience.
              </p>
            </div>
            <Link
              href="/contact"
              className="brown-btn-primary shrink-0 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-wider"
            >
              <span>Initiate Technical Dialogue</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DEDICATED SECTIONS PREVIEW / MULTI-PAGE DIRECTORY */}
      <section className="relative px-6 py-20 md:px-12 border-t border-[#E6D8CC] bg-[#F5EFEB]/60 backdrop-blur-md">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#846353]">
              Independent Dedicated Destinations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1E18]">
              Deep-Dive Section Portals
            </h2>
            <p className="text-sm text-[#573B2C]">
              Zero in-tab compression. Each section opens as a full, dedicated route with isolated context.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1: Projects */}
            <Link
              href="/projects"
              className="cream-gradient-card group flex flex-col justify-between rounded-3xl p-6 transition-all"
            >
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2C1E18] text-[#FAF6F0] group-hover:bg-[#B87333] transition-colors">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C1E18] group-hover:text-[#B87333] transition-colors">
                  Projects Catalog
                </h3>
                <p className="text-xs text-[#573B2C] leading-relaxed">
                  Deep case studies on HackaMate, MEDEQUIP, PCA Research, Ghumau, and AlertNet.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#2C1E18]">
                <span>Open Page</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Box 2: Experience */}
            <Link
              href="/experience"
              className="cream-gradient-card group flex flex-col justify-between rounded-3xl p-6 transition-all"
            >
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2C1E18] text-[#FAF6F0] group-hover:bg-[#B87333] transition-colors">
                  <Workflow className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C1E18] group-hover:text-[#B87333] transition-colors">
                  Experience & Timeline
                </h3>
                <p className="text-xs text-[#573B2C] leading-relaxed">
                  Hackathon Runner-Up, Jain University B.Tech CSE (2025 — 2029), and empirical research.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#2C1E18]">
                <span>Open Page</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Box 3: About */}
            <Link
              href="/about"
              className="cream-gradient-card group flex flex-col justify-between rounded-3xl p-6 transition-all"
            >
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2C1E18] text-[#FAF6F0] group-hover:bg-[#B87333] transition-colors">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C1E18] group-hover:text-[#B87333] transition-colors">
                  About {PERSONAL_INFO.nickname}
                </h3>
                <p className="text-xs text-[#573B2C] leading-relaxed">
                  Biographical story, builder ethos, data engineering trajectory, and personal mindset.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#2C1E18]">
                <span>Open Page</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Box 4: Contact */}
            <Link
              href="/contact"
              className="cream-gradient-card group flex flex-col justify-between rounded-3xl p-6 transition-all"
            >
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2C1E18] text-[#FAF6F0] group-hover:bg-[#B87333] transition-colors">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C1E18] group-hover:text-[#B87333] transition-colors">
                  Contact & Dispatch
                </h3>
                <p className="text-xs text-[#573B2C] leading-relaxed">
                  Direct inquiry dispatch, {PERSONAL_INFO.email}, and direct social connectors.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#2C1E18]">
                <span>Open Page</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
