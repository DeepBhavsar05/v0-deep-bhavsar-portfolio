const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "98-99%", label: "Customer Satisfaction" },
  { value: "150+", label: "Monthly Tickets" },
  { value: "500+", label: "Enterprise Users Supported" },
]

export function StatsBar() {
  return (
    <section className="border-y border-border px-6 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-bold text-primary">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
