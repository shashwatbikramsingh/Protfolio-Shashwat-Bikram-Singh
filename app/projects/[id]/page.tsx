import React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Terminal,
  Workflow,
  ExternalLink,
  Zap,
  Compass,
  Telescope,
  BookOpen,
  Clock,
  Users,
} from "lucide-react"
import { GitHubIcon } from "@/components/ui/social-icons"
import { PROJECTS, Project } from "@/data/projects"
import { PERSONAL_INFO } from "@/data/profile"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const project = PROJECTS.find((p) => p.id === id)
  if (!project) return { title: "Project Not Found" }

  return {
    title: `${project.title} - Case Study & Architecture | ${PERSONAL_INFO.name}`,
    description: project.summary,
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params
  const project = PROJECTS.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  const isHackaMate = project.id === "hackamate"
  const isOngoing = project.status?.toLowerCase().includes("ongoing")

  return (
    <div className="relative px-6 py-12 md:px-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-16">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#E6D8CC] pb-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#573B2C] hover:text-[#B87333] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Projects</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="earth-badge rounded-full px-3 py-1 text-xs font-mono">
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B87333]">
              {isHackaMate ? <Users className="h-4 w-4" /> : <Zap className="h-4 w-4" />}
              <span>{isHackaMate ? "Flagship Developer Matchmaking Platform" : "Architecture Blueprint"}</span>
            </div>
            {project.status && (
              <span className={`rounded-full px-3 py-0.5 text-xs font-mono font-semibold ${
                isOngoing
                  ? "bg-amber-100 text-amber-900 border border-amber-300"
                  : project.springerPublication
                  ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                  : "bg-[#2C1E18] text-[#FAF6F0]"
              }`}>
                {project.status}
              </span>
            )}
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#2C1E18]">
            {project.title}
          </h1>
          <p className="font-serif italic text-xl md:text-2xl text-[#846353]">
            &ldquo;{project.tagline}&rdquo;
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-[#573B2C] max-w-3xl">
            {project.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brown-btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-wider"
              >
                <span>Launch Live Deployment</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#CEB8A5] bg-[#FFFFFF]/70 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#2C1E18] hover:bg-[#FAF6F0] transition-colors"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Quantified Metrics Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-3xl cream-gradient-card p-6 border border-[#CEB8A5]/60">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <span className="font-serif text-2xl md:text-3xl font-bold text-[#2C1E18]">
                {metric.value}
              </span>
              <p className="text-xs font-semibold text-[#846353] uppercase tracking-wider">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* SPRINGER RESEARCH PAPER CALLOUT SECTION */}
        {project.springerPublication && (
          <div className="cream-gradient-card rounded-3xl p-8 md:p-10 border border-emerald-300/80 bg-emerald-50/30 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <BookOpen className="h-4 w-4 text-emerald-700" />
              <span>Springer Research Paper Submission</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1E18]">
              {project.springerPublication.title}
            </h3>
            <p className="text-xs font-semibold text-[#846353] uppercase tracking-wider">
              Authors: <span className="text-[#2C1E18] font-bold">{project.springerPublication.author}</span>
            </p>
            <p className="text-sm leading-relaxed text-[#573B2C]">
              {project.springerPublication.focus}
            </p>
            <div className="pt-2 text-xs text-emerald-900 font-medium">
              Status: <span className="font-bold underline decoration-emerald-500 underline-offset-4">{project.springerPublication.status}</span>
            </div>
          </div>
        )}

        {/* Problem & Solution Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cream-gradient-card rounded-3xl p-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C482A]">
              <span>01. The Problem Space</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2C1E18]">
              Challenges & Bottlenecks
            </h3>
            <p className="text-sm leading-relaxed text-[#573B2C]">
              {project.problemStatement}
            </p>
          </div>

          <div className="cream-gradient-card rounded-3xl p-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B87333]">
              <span>02. The Architectural Solution</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2C1E18]">
              Engineered Approach
            </h3>
            <p className="text-sm leading-relaxed text-[#573B2C]">
              {project.solution}
            </p>
          </div>
        </div>

        {/* SCIENTIFIC / SYSTEM CALCULATIONS */}
        {project.scientificCalculations && (
          <div className="cream-gradient-card rounded-3xl p-8 md:p-10 border border-[#CEB8A5]/60 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B87333]">
                <Compass className="h-4 w-4" />
                <span>Calculations & Algorithmic Methods</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1E18]">
                Computational Methods Implemented
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.scientificCalculations.map((calc, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-2xl bg-[#FAF6F0] p-4 border border-[#E6D8CC]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#B87333] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-[#2C1E18]">{calc}</span>
                </div>
              ))}
            </div>

            {project.myContribution && (
              <div className="mt-6 pt-6 border-t border-[#E6D8CC] space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#846353]">
                  {PERSONAL_INFO.nickname}&apos;s Contribution & Engineering Ownership
                </span>
                <p className="text-sm leading-relaxed text-[#573B2C] italic">
                  &ldquo;{project.myContribution}&rdquo;
                </p>
              </div>
            )}
          </div>
        )}

        {/* WORKFLOW BLUEPRINT SECTION */}
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B87333]">
              <Workflow className="h-4 w-4" />
              <span>Execution Pipeline</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1E18]">
              End-to-End Workflow & Tools
            </h2>
            <p className="text-sm text-[#573B2C]">
              Step-by-step breakdown of how data travels through the system from initial trigger to delivery.
            </p>
          </div>

          {/* Workflow Sequence Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.workflow.map((w) => (
              <div
                key={w.step}
                className="cream-gradient-card rounded-3xl p-6 md:p-8 space-y-4 border border-[#CEB8A5]/60 hover:border-[#B87333] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-[#B87333]">
                    {w.step}
                  </span>
                  <span className="text-xs uppercase font-mono text-[#846353]">
                    Stage
                  </span>
                </div>
                <h4 className="font-serif text-xl font-bold text-[#2C1E18]">
                  {w.title}
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-[#573B2C]">
                  {w.details}
                </p>
                <div className="pt-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#846353] block mb-2">
                    Technologies & Protocols Utilized:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {w.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-[#FAF6F0] px-2.5 py-1 font-mono text-xs text-[#2C1E18] border border-[#E6D8CC]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comprehensive Tech Stack & Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#E6D8CC] pt-12">
          {/* Tech Stack */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#2C1E18]">
              Full Technology Ecosystem
            </h3>
            <p className="text-xs text-[#846353]">
              Selected libraries, runtime environments, and architectural tools.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded-xl border border-[#CEB8A5] bg-[#FFFFFF]/80 px-3.5 py-2 text-xs font-semibold text-[#2C1E18] shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#2C1E18]">
              Deliverables & Functional Features
            </h3>
            <p className="text-xs text-[#846353]">
              Interactive features and modules shipped in this project.
            </p>
            <ul className="space-y-3 pt-2">
              {project.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#573B2C]">
                  <CheckCircle2 className="h-4 w-4 text-[#B87333] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between border-t border-[#E6D8CC] pt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#573B2C] hover:text-[#B87333]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Projects Catalog</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2C1E18] hover:text-[#B87333]"
          >
            <span>Connect with {PERSONAL_INFO.nickname}</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  )
}
