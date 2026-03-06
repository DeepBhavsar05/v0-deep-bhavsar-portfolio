"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/about-section"

const experiences = [
  {
    company: "University of Guelph",
    role: "IT Service Desk Analyst",
    period: "Sep 2024 - Apr 2025",
    location: "Guelph, Ontario, Canada - Hybrid",
    type: "Internship",
    description: [
      "Delivered onsite and remote Tier 1-2 support for a large academic environment, resolving hardware, software, AV, and network issues while maintaining 98%+ SLA compliance.",
      "Managed and prioritized 150+ monthly tickets in ServiceNow, ensuring accurate documentation, ITIL-aligned incident handling, and timely escalation.",
      "Administered Microsoft 365 and Entra ID (Azure AD), supporting user access, licensing, group membership, MFA setup, and access control for faculty and staff.",
      "Reduced repeat incidents and resolution time by performing advanced desk-side troubleshooting, root-cause analysis, and collaborating with internal teams on permanent fixes.",
    ],
    skills: [
      "ServiceNow",
      "Active Directory",
      "Microsoft 365",
      "Entra ID",
      "DHCP/DNS",
      "ITIL",
    ],
  },
  {
    company: "Compucare India Pvt. Ltd.",
    role: "IT Support Specialist",
    period: "Oct 2022 - Nov 2023",
    location: "Vadodara, Gujarat, India - On-site",
    type: "Full-time",
    description: [
      "Served as first point of contact for 500+ enterprise users, handling high-volume Tier 1-2 support and consistently meeting SLA targets.",
      "Strengthened service reliability by logging, prioritizing, and escalating incidents in ITSM tools with audit-ready documentation.",
      "Supported endpoint, identity, and collaboration services including Active Directory, Microsoft 365, onboarding/offboarding, and endpoint security.",
      "Improved operational consistency by collaborating on root-cause analysis and creating SOPs, documentation, and standardized fix procedures.",
    ],
    skills: [
      "Active Directory",
      "Microsoft 365",
      "ITSM",
      "SQL Troubleshooting",
      "Remote Support",
      "Documentation",
    ],
  },
  {
    company: "CloudTech Solutions",
    role: "Cloud Computing Intern",
    period: "Jan 2023 - Jun 2023",
    location: "Remote",
    type: "Internship",
    description: [
      "Created and managed EC2 instances and VPCs (Virtual Private Clouds) for secure networking.",
      "Designed subnets, route tables, and internet gateways for networking needs.",
      "Used S3 for object storage and configured bucket policies for security.",
      "Managed RDS (Relational Database Service) and NoSQL databases like DynamoDB.",
      "Set up IAM roles, users, and policies for access control.",
    ],
    skills: [
      "AWS EC2",
      "VPC",
      "S3",
      "RDS",
      "DynamoDB",
      "IAM",
    ],
  },
  {
    company: "Concentrix India Pvt. Ltd.",
    role: "IT Helpdesk Technician",
    period: "Sep 2020 - Jun 2021",
    location: "Gujarat, India - On-site",
    type: "Full-time",
    description: [
      "Delivered frontline hardware and software support for 35+ daily tickets using JIRA, maintaining 99% customer satisfaction.",
      "Supported secure access technologies including VPN, MFA, and authentication systems to ensure business continuity.",
      "Improved Tier 2 efficiency by maintaining detailed incident documentation and knowledge articles in Confluence.",
      "Supported asset tracking and hardware lifecycle management while developing strong customer-facing communication skills.",
    ],
    skills: ["JIRA", "Confluence", "VPN", "MFA", "Hardware Support", "Asset Management"],
  },
  {
    company: "Friendly IT Solution",
    role: "IoT Based Python Intern",
    period: "Jan 2022 - Apr 2022",
    location: "Vadodara, Gujarat, India - On-site",
    type: "Internship",
    description: [
      "Developed computer vision applications using Python and libraries like OpenCV.",
      "Gained hands-on experience with IoT practices and Raspberry Pi integration.",
      "Built image processing pipelines for real-time object detection and recognition.",
    ],
    skills: ["Python", "OpenCV", "Raspberry Pi", "IoT", "Computer Vision"],
  },
]

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="03" title="Experience" />

        <div className="flex flex-col gap-8 md:flex-row">
          {/* Tab List */}
          <div className="flex flex-row overflow-x-auto border-b border-border md:flex-col md:border-b-0 md:border-l">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`whitespace-nowrap px-4 py-3 text-left text-sm font-medium transition-all md:border-l-2 md:border-b-0 ${
                  activeTab === index
                    ? "border-b-2 border-primary text-primary md:border-b-0 md:border-l-2"
                    : "border-b-2 border-transparent text-muted-foreground hover:bg-secondary hover:text-foreground md:border-b-0 md:border-l-2"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px] flex-1">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {experiences[activeTab].role}{" "}
                  <span className="text-primary">@ {experiences[activeTab].company}</span>
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <p className="font-mono text-xs text-muted-foreground">
                    {experiences[activeTab].period}
                  </p>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                    {experiences[activeTab].type}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {experiences[activeTab].location}
                </p>
              </div>

              <ul className="space-y-3">
                {experiences[activeTab].description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {experiences[activeTab].skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
