import React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Award, Calendar, CheckCircle2, ExternalLink, GraduationCap, MapPin, ShieldCheck } from "lucide-react"
import { EXPERIENCES, EDUCATION, CERTIFICATIONS } from "@/data/experience"
import { PERSONAL_INFO } from "@/data/profile"

export const metadata = {
  title: "Experience & Certifications | Shashwat Bikram Singh",
  description: "Chronological engineering trajectory, DSU Hackathon Runner-Up honors, empirical ML research submitted to Springer, full-stack architectures, and academic tenure at Jain University.",
}

export default function ExperiencePage() {
  return (
    <div className="relative px-6 py-12 md:px-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-16">
        
        {/* Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#573B2C] hover:text-[#B87333] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <span className="earth-badge rounded-full px-3 py-1 text-xs font-mono">
            Track Record & Credentials
          </span>
        </div>

        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#B87333]">
            Track Record & Milestones
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#2C1E18]">
            Experience & Engineering Journey
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[#573B2C]">
            A chronicle of technical leadership, research milestones, and academic pursuits—from winning hackathon runner-up honors and co-authoring empirical machine learning research to architecting full-stack web applications.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="cream-gradient-card group relative rounded-3xl p-6 sm:p-10 border border-[#CEB8A5]/60 hover:border-[#B87333] transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#E6D8CC]/80 pb-6">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="earth-badge rounded-full px-2.5 py-0.5 text-[11px] font-mono font-medium">
                      {exp.type}
                    </span>
                    <span className="text-xs text-[#846353] flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1E18]">
                    {exp.role}
                  </h3>
                  <p className="font-medium text-sm text-[#B87333]">
                    {exp.company}
                  </p>
                </div>

                {exp.period && (
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#FAF6F0] px-4 py-1.5 text-xs font-mono font-semibold text-[#573B2C] border border-[#E6D8CC]">
                    <Calendar className="h-3.5 w-3.5 text-[#846353]" />
                    <span>{exp.period}</span>
                  </div>
                )}
              </div>

              {/* Summary */}
              <p className="mt-6 text-sm leading-relaxed text-[#573B2C]">
                {exp.summary}
              </p>

              {/* Achievements */}
              <div className="mt-6 space-y-2.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#846353]">
                  Key Milestones & Deliverables:
                </span>
                <ul className="space-y-2">
                  {exp.achievements.map((ach, achIdx) => (
                    <li key={achIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#573B2C]">
                      <CheckCircle2 className="h-4 w-4 text-[#B87333] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="mt-8 pt-6 border-t border-[#E6D8CC]/80 flex flex-wrap gap-2">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-lg bg-[#FAF6F0] px-3 py-1 font-mono text-xs text-[#573B2C] border border-[#E6D8CC]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* LICENSES & CERTIFICATIONS SECTION */}
        <div className="space-y-6 pt-8 border-t border-[#E6D8CC]">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B87333]">
                <Award className="h-4 w-4" />
                <span>Verified Credentials</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#2C1E18] mt-1">
                Honors & Certifications
              </h2>
            </div>
            <span className="earth-badge rounded-full px-3 py-1 text-xs font-mono">
              Academic & Hackathons
            </span>
          </div>

          {CERTIFICATIONS.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="cream-gradient-card rounded-3xl p-6 sm:p-7 border border-[#CEB8A5]/60 hover:border-[#B87333] transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="earth-badge rounded-full px-2.5 py-0.5 text-[10px] font-mono font-medium">
                        {cert.category}
                      </span>
                      <ShieldCheck className="h-4 w-4 text-[#B87333]" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#2C1E18]">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-[#B87333]">
                      {cert.issuer}
                    </p>
                    {cert.credentialId && (
                      <div className="pt-1">
                        <span className="text-[11px] font-mono uppercase text-[#846353] block">Credential ID:</span>
                        <code className="text-xs font-mono font-semibold text-[#2C1E18] bg-[#FAF6F0] px-2 py-0.5 rounded border border-[#E6D8CC]">
                          {cert.credentialId}
                        </code>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#E6D8CC]/80 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="rounded-md bg-[#FAF6F0] px-2 py-0.5 font-mono text-[11px] text-[#573B2C] border border-[#E6D8CC]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2C1E18] hover:text-[#B87333] transition-colors"
                      >
                        <span>Show Credential on LinkedIn</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="cream-gradient-card rounded-3xl p-8 border border-[#CEB8A5]/60 space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#B87333]" />
                <h3 className="font-serif text-2xl font-bold text-[#2C1E18]">
                  Direct LinkedIn Credential Registry
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[#573B2C] max-w-2xl">
                To guarantee 100% authenticity, all official licenses, hackathon achievements, and degree credentials are verifiable directly on Shashwat&apos;s LinkedIn credentials registry.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.linkedin.com/in/shashwat-bikram-singh-62364438a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brown-btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-wider"
                >
                  <span>View Verified Profile on LinkedIn</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Education Section */}
        <div className="space-y-6 pt-8 border-t border-[#E6D8CC]">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B87333]">
            <GraduationCap className="h-4 w-4" />
            <span>Academic Tenure</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#2C1E18]">
            Education & Degrees
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="cream-gradient-card rounded-2xl p-6 border border-[#CEB8A5]/60 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h4 className="font-serif text-xl font-bold text-[#2C1E18]">
                    {edu.degree}
                  </h4>
                  <span className="font-mono text-xs text-[#846353]">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-[#B87333]">
                  {edu.institution}
                </p>
                <p className="text-xs text-[#573B2C] leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
