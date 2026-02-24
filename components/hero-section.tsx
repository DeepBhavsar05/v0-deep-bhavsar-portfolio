"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Linkedin, Github, Mail } from "lucide-react"

const titles = [
  "IT Support Specialist",
  "Technical Support Analyst",
  "Service Desk Engineer",
  "Cloud & Systems Support",
]

export function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentTitle((prev) => (prev + 1) % titles.length)
        setFade(true)
      }, 300)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 font-mono text-sm tracking-widest text-primary">
          Hello, my name is
        </p>
        <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
          <span className="text-balance">Deep Bhavsar</span>
        </h1>
        <h2
          className={`mb-6 text-2xl font-semibold text-muted-foreground transition-opacity duration-300 md:text-4xl ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {titles[currentTitle]}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-balance leading-relaxed text-muted-foreground">
          ITIL v4 & Microsoft 365 certified IT Support professional with 3+ years of
          hands-on experience delivering exceptional technical support in enterprise and
          higher education environments. Based in Canada.
        </p>

        <div className="mb-12 flex items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            className="rounded-md border border-border px-8 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
          >
            View My Work
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/deep-bhavsar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/DeepBhavsar05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="mailto:bhavsardeep14@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
