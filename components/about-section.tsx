import { GraduationCap, MapPin, Award, Briefcase } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="01" title="About Me" />

        <div className="grid gap-12 md:grid-cols-5">
          <div className="space-y-6 md:col-span-3">
            <p className="leading-relaxed text-muted-foreground">
              I am an ITIL v4 Foundation & MS-900 certified IT Service Desk Analyst with 3+
              years of Tier 1-2 support experience delivering reliable end-user, application,
              and endpoint support across Windows, macOS, and mobile environments. I have a
              strong background in IT Service Management (ITSM), including incident, request,
              and change management.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              From troubleshooting Active Directory and Azure AD authentication issues to
              resolving network connectivity problems with DNS, DHCP, and VPN, I thrive on
              diagnosing root causes and implementing lasting solutions. I maintain high
              customer satisfaction (98-99% CSAT) while consistently meeting SLA/OLA targets.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I hold a Master{"'"}s degree in Computer Engineering from the{" "}
              <span className="text-primary">University of Guelph</span> (87/100 GPA) and a
              Bachelor{"'"}s in Information Technology from Gujarat Technological University.
              I am currently pursuing CompTIA A+ certification to complement my existing
              credentials.
            </p>
          </div>

          <div className="space-y-4 md:col-span-2">
            <InfoCard
              icon={<MapPin className="h-4 w-4 text-primary" />}
              label="Location"
              value="Ontario, Canada"
            />
            <InfoCard
              icon={<GraduationCap className="h-4 w-4 text-primary" />}
              label="Education"
              value="M.Eng Computer Engineering, UoG"
            />
            <InfoCard
              icon={<Briefcase className="h-4 w-4 text-primary" />}
              label="Experience"
              value="3+ Years in IT Support"
            />
            <InfoCard
              icon={<Award className="h-4 w-4 text-primary" />}
              label="Certifications"
              value="ITIL v4, Microsoft 365, AWS"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-secondary">
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-card-foreground">{value}</p>
      </div>
    </div>
  )
}

export function SectionHeading({
  number,
  title,
}: {
  number: string
  title: string
}) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <span className="font-mono text-sm text-primary">{number}.</span>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <div className="hidden h-px flex-1 bg-border md:block" />
    </div>
  )
}
