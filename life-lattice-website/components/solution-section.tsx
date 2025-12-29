import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, Shield } from "lucide-react"

export function SolutionSection() {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning Detection",
      description:
        "Our AI model analyzes video feeds in real-time to identify drowning behavior patterns with high accuracy.",
      color: "primary",
    },
    {
      icon: Zap,
      title: "Instant Response",
      description:
        "When drowning is detected, our mechanical rescue system deploys immediately, reaching the victim in seconds.",
      color: "secondary",
    },
    {
      icon: Shield,
      title: "Reliable Protection",
      description: "Works 24/7 without fatigue, providing consistent monitoring and protection for your pool.",
      color: "accent",
    },
  ]

  return (
    <section id="solution" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Meet <span className="text-primary">Life Lattice</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            An intelligent drowning detection and rescue system that combines cutting-edge AI with automated mechanical
            intervention to save lives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg bg-card">
              <CardContent className="p-8 space-y-4 text-center">
                <div
                  className={`w-16 h-16 rounded-full bg-${feature.color}/10 flex items-center justify-center mx-auto`}
                >
                  <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-2 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">How It Works</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Life Lattice uses underwater and overhead cameras to continuously monitor pool activity. Our trained
                    machine learning model recognizes drowning patterns such as vertical body position, lack of
                    movement, and submersion time.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Within milliseconds of detection, our mechanical lattice system deploys from the pool floor,
                    creating a supportive platform that brings the victim to the surface for rescue.
                  </p>
                </div>
                <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="text-6xl font-bold text-primary">{"<3s"}</div>
                    <div className="text-lg font-semibold text-foreground">Response Time</div>
                    <div className="text-sm text-muted-foreground">From detection to rescue</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
