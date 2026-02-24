import { SectionHeading } from "@/components/about-section"

const skillCategories = [
  {
    title: "ITSM, Networking & Security",
    skills: [
      "ServiceNow (Incident, Request, Change, SLAs)",
      "JIRA & Confluence",
      "TCP/IP, DNS, DHCP",
      "VPN Configuration",
      "MFA / SSO",
      "Endpoint Security",
      "ITIL v4 Practices",
    ],
  },
  {
    title: "Microsoft, Cloud & Tools",
    skills: [
      "Microsoft 365 & Exchange Online",
      "Active Directory",
      "Microsoft Entra ID (Azure AD)",
      "Intune (MDM)",
      "Microsoft Azure",
      "AWS (EC2, S3, IAM, VPC, RDS)",
      "PowerShell & CMD",
    ],
  },
  {
    title: "End-User Support",
    skills: [
      "Windows 10/11",
      "macOS & Linux",
      "Desktops / Laptops / Printers",
      "AV & Mobile Devices",
      "System Imaging & Patching",
      "Onboarding / Offboarding",
      "Asset Management",
    ],
  },
  {
    title: "Remote & Diagnostic Tools",
    skills: [
      "Remote Desktop (RDP)",
      "AnyDesk / TeamViewer",
      "UltraViewer",
      "Wireshark",
      "SQL Databases",
      "Technical Documentation",
      "Knowledge Base Management",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS EC2, S3, VPC, RDS, IAM",
      "DynamoDB",
      "Cloud Deployment",
      "Virtualization",
      "System Imaging (MDT, WDS)",
      "Group Policy (GPO)",
      "NTFS Permissions",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Customer Service (98-99% CSAT)",
      "Root Cause Analysis",
      "SLA / OLA Compliance",
      "Cross-team Collaboration",
      "Structured Documentation",
      "Critical Thinking",
      "Mentoring & Knowledge Transfer",
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
