import { Linkedin, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/deep-bhavsar-217107192/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/DeepBhavsar05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="mailto:bhavsardeep14@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <p className="text-center font-mono text-xs text-muted-foreground">
          Designed & Built by Deep Bhavsar
        </p>
      </div>
    </footer>
  )
}
