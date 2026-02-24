"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/about-section"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "Luman AI",
    role: "Technical Advisor",
    period: "May 2025 - Present",
    location: "United States - Remote",
    type: "Advisory",
    description: [
      "Collaborate with the founding team to refine technical strategy and product architecture for the Luman AI platform.",
      "Provide ongoing feedback on system scalability, cloud infrastructure, and deployment workflows.",
      "Assist in defining technical requirements and evaluating new features for the product roadmap.",
      "Conduct testing and validation of AI-driven workflows to ensure reliability and performance.",
    ],
    skills: ["Technical Architecture", "Change Management", "Cloud Infrastructure", "AI Workflows"],
  },
  {
    company: "University of Guelph",
    role: "IT Service Desk Analyst",
    period: "Sep 2024 - Apr 2025",
    location: "Guelph, Ontario, Canada - Hybrid",
    type: "Internship",
    description: [
      "Delivered frontline and advanced technical support for students and staff, achieving high customer satisfaction through timely resolution of escalated issues.",
      "Troubleshot Active Directory, DHCP/DNS, Windows, macOS, and printer/network connectivity issues, reducing downtime and improving service availability.",
      "Collaborated with IT teams during network outages, reconfiguring services and escalating issues to ensure rapid service restoration.",
      "Logged and resolved incidents in ServiceNow, performing root cause analysis and creating documentation that reduced repeat issues by 15%.",
      "Contributed to knowledge base content by documenting new resolutions and improving existing articles, ensuring consistent service delivery.",
    ],
    skills: [
      "ServiceNow",
      "Active Directory",
      "DHCP/DNS",
      "Windows/macOS",
      "Incident Management",
      "Knowledge Base",
    ],
  },
  {
    company: "Compucare India Pvt. Ltd.",
    role: "Desktop & Deployment Support Technician",
    period: "Oct 2022 - Nov 2023",
    location: "Vadodara, Gujarat, India - On-site",
    type: "Full-time",
    description: [
      "Delivered customer and technical support for enterprise solutions (Industrial Automation, ANDON systems, HRMS, Tempus) through calls, emails, and remote sessions.",
      "Applied ITIL-based incident management practices to log, prioritize, and resolve customer issues efficiently, ensuring minimal downtime.",
      "Performed remote troubleshooting of SQL databases, application errors, and configuration issues, improving client satisfaction and response time.",
      "Assisted in Windows Server administration tasks, including Active Directory user management, permissions, and authentication support.",
      "Provided basic networking support (IP configuration, connectivity testing, LAN/WAN troubleshooting) to ensure seamless deployment and integration.",
      "Created and maintained technical documentation and system configuration records for future reference and service improvement.",
    ],
    skills: [
      "SQL Troubleshooting",
      "Windows Server",
      "Active Directory",
      "ITIL Incident Management",
      "Remote Support",
      "Technical Documentation",
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
      "Used S3 for object storage and configured bucket policies.",
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
