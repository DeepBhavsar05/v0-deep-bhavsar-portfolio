import { SectionHeading } from "@/components/about-section"
import { Mail, Linkedin, Github, MapPin, FileText } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading number="06" title="Get In Touch" />

        <p className="mb-8 text-balance leading-relaxed text-muted-foreground">
          I am currently seeking full-time IT Support Analyst, Desktop Support Engineer,
          Technical Support Specialist, or Help Desk positions in the Greater Toronto
          Area, Guelph, Kitchener-Waterloo, or remote opportunities within Ontario.
          Whether you have a question or just want to connect, feel free to reach out.
        </p>

        <a
          href="mailto:bhavsardeep14@gmail.com"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
        >
          <Mail className="h-4 w-4" />
          Say Hello
        </a>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <ContactCard
            icon={<Mail className="h-5 w-5 text-primary" />}
            label="Email"
            value="bhavsardeep14@gmail.com"
            href="mailto:bhavsardeep14@gmail.com"
          />
          <ContactCard
            icon={<Linkedin className="h-5 w-5 text-primary" />}
            label="LinkedIn"
            value="linkedin.com/in/deep-bhavsar"
            href="https://www.linkedin.com/in/deep-bhavsar/"
          />
          <ContactCard
            icon={<Github className="h-5 w-5 text-primary" />}
            label="GitHub"
            value="github.com/DeepBhavsar05"
            href="https://github.com/DeepBhavsar05"
          />
          <ContactCard
            icon={<MapPin className="h-5 w-5 text-primary" />}
            label="Location"
            value="Ontario, Canada"
            href={null}
          />
        </div>

        <div className="mt-8">
          <a
            href="/Deep_Bhavsar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <FileText className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href: string | null
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/40">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
        {icon}
      </div>
      <div className="text-left">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-card-foreground">{value}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return content
}
