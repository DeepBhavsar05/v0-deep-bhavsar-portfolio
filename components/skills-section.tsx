import { SectionHeading } from "@/components/about-section"

const skillCategories = [
  {
    title: "Help Desk & Support",
    skills: [
      "Tier 1-2 Help Desk Support",
      "Desktop Support (500+ users)",
      "Incident Management",
      "Problem Management",
      "Change Management",
      "ServiceNow ITSM",
    ],
  },
  {
    title: "Systems & Directory Services",
    skills: [
      "Active Directory",
      "Azure AD (Entra ID)",
      "Microsoft 365 Admin",
      "Windows Server",
      "Windows 10/11",
      "macOS Support",
    ],
  },
  {
    title: "Networking & Infrastructure",
    skills: [
      "TCP/IP, DNS, DHCP",
      "VPN Configuration",
      "LAN/WAN Troubleshooting",
      "NTFS Permissions",
      "Group Policy (GPO)",
      "Printer & Peripheral Support",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3, VPC, RDS, IAM)",
      "Microsoft Azure Fundamentals",
      "DynamoDB",
      "Cloud Deployment",
      "Virtualization",
      "System Imaging (MDT, WDS)",
    ],
  },
  {
    title: "Tools & Remote Support",
    skills: [
      "AnyDesk / TeamViewer",
      "Remote Desktop (RDP)",
      "UltraViewer",
      "SQL Databases",
      "Technical Documentation",
      "Knowledge Base Management",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Customer Service Excellence",
      "Root Cause Analysis",
      "SLA Compliance",
      "Cross-team Collaboration",
      "Mentoring & Knowledge Transfer",
      "Critical Thinking",
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="02" title="Skills & Technologies" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40"
            >
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-primary">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
