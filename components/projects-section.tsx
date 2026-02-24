import { SectionHeading } from "@/components/about-section"
import { ExternalLink, Github, Folder } from "lucide-react"

const projects = [
  {
    title: "IoT Based Virtual Keypad",
    description:
      "A Virtual Keypad using Python and OpenCV, incorporating contours, visualization, and image processing. Integrated IoT components like Raspberry Pi and Pi Camera. The system captures the background and detects interactions in real time, transmitting data to the cloud and displaying the selected character on a web application.",
    highlights: [
      "Functions as a wireless keyboard with secure, touchless input",
      "Prevents fingerprint theft for enhanced ATM security",
      "Real-time character recognition using computer vision",
    ],
    tech: ["Python", "OpenCV", "Raspberry Pi", "IoT", "Cloud"],
    github: "https://github.com/DeepBhavsar05/IOT-Based-Virtual-Keypad",
  },
  {
    title: "Smoke's Poutinerie Digital Marketing",
    description:
      "Volunteered technical expertise to enhance the brand's local digital footprint. Managed Local SEO and Instagram growth strategy to drive foot traffic for a popular Canadian restaurant chain.",
    highlights: [
      "Successfully increased 20% of total revenue on YoY basis",
      "Managed Local SEO optimization and strategy",
      "Developed Instagram growth strategy for foot traffic",
    ],
    tech: ["SEO", "Digital Marketing", "Instagram", "Analytics"],
  },
  {
    title: "Enterprise IT Support Operations",
    description:
      "Led comprehensive IT support operations at the University of Guelph and Compucare India, managing incidents, deploying systems, and improving service delivery for hundreds of users.",
    highlights: [
      "Maintained 98%+ customer satisfaction across 150+ monthly tickets",
      "Created 10+ knowledge base articles improving self-resolution by 22%",
      "Managed 300+ endpoint deployments and configurations",
    ],
    tech: ["ServiceNow", "Active Directory", "SCCM", "Windows Server"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="04" title="Projects" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center justify-between">
                <Folder className="h-10 w-10 text-primary" />
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mb-6 space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
