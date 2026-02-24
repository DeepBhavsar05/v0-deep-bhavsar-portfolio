import { SectionHeading } from "@/components/about-section"
import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    name: "Microsoft 365 Certified: Fundamentals (MS-900)",
    issuer: "Microsoft",
    date: "January 2026",
    credentialId: "E7080EF97FF765AE",
    skills: [
      "Microsoft 365 Fundamentals",
      "SaaS",
      "Cloud Security",
      "Compliance",
    ],
  },
  {
    name: "ITIL v4 Foundation",
    issuer: "PeopleCert",
    date: "September 2025",
    credentialId: "GR671809080DB",
    skills: [
      "Incident Management",
      "Problem Management",
      "Change Management",
      "IT Service Management",
      "Continual Improvement",
    ],
  },
  {
    name: "AWS Cloud Practitioner (In Progress)",
    issuer: "Amazon Web Services",
    date: "Expected 2026",
    credentialId: null,
    skills: [
      "EC2",
      "S3",
      "VPC",
      "IAM",
      "RDS",
      "Cloud Architecture",
    ],
  },
  {
    name: "CompTIA A+ (In Progress)",
    issuer: "CompTIA",
    date: "Expected 2026",
    credentialId: null,
    skills: [
      "Hardware",
      "Software Troubleshooting",
      "Networking",
      "Operating Systems",
      "Security",
    ],
  },
]

const education = [
  {
    degree: "Master of Engineering - Computer Engineering",
    institution: "University of Guelph",
    period: "Jan 2024 - Aug 2024",
    grade: "87%",
    focus: "Artificial Intelligence, IT Service Management",
  },
  {
    degree: "Bachelor of Engineering - Information Technology",
    institution: "SVIT, Vasad",
    period: "2018 - 2022",
    grade: "8.12 CGPA",
    focus: "React.js, SQL, Software Development",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="05" title="Certifications & Education" />

        {/* Certifications */}
        <h3 className="mb-6 text-lg font-semibold text-foreground">
          Certifications
        </h3>
        <div className="mb-12 grid gap-6 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex gap-4 rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/40"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-foreground">
                  {cert.name}
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  {cert.issuer} &middot; {cert.date}
                </p>
                {cert.credentialId && (
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    ID: {cert.credentialId}
                  </p>
                )}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <h3 className="mb-6 text-lg font-semibold text-foreground">
          Education
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/40"
            >
              <h4 className="text-sm font-semibold text-foreground">
                {edu.degree}
              </h4>
              <p className="mt-1 text-sm text-primary">{edu.institution}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {edu.period}
              </p>
              <div className="mt-3 flex items-center gap-4">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Grade: {edu.grade}
                </span>
                <span className="text-xs text-muted-foreground">
                  {edu.focus}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
