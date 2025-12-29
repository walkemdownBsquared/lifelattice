import { Card, CardContent } from "@/components/ui/card"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Continuous Monitoring",
      description:
        "Multiple cameras capture real-time video of the entire pool area, both above and below the water surface.",
    },
    {
      number: "02",
      title: "AI Analysis",
      description:
        "Our machine learning model processes video frames to identify drowning behavior patterns and distress signals.",
    },
    {
      number: "03",
      title: "Instant Detection",
      description:
        "When drowning behavior is detected with high confidence, the system immediately triggers the rescue mechanism.",
    },
    {
      number: "04",
      title: "Mechanical Deployment",
      description:
        "The lattice structure rapidly rises from the pool floor, creating a stable platform beneath the victim.",
    },
    {
      number: "05",
      title: "Surface Rescue",
      description:
        "The victim is brought to the surface where they can breathe and rescuers can provide immediate assistance.",
    },
    {
      number: "06",
      title: "Alert System",
      description:
        "Simultaneously, emergency alerts are sent to pool owners, lifeguards, and emergency services if needed.",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">How Life Lattice Works</h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            A seamless integration of computer vision, machine learning, and mechanical engineering to create a
            life-saving solution.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-2 hover:border-primary/50 transition-all bg-card group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-colors" />
              <CardContent className="p-6 relative">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
