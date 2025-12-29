import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Globe, Trophy } from "lucide-react"

export function ImpactSection() {
  const impacts = [
    {
      icon: Heart,
      title: "Saving Lives",
      description: "Every deployment of Life Lattice has the potential to prevent a tragedy and keep families whole.",
    },
    {
      icon: Users,
      title: "Peace of Mind",
      description: "Parents and pool owners can relax knowing an AI guardian is always watching over their loved ones.",
    },
    {
      icon: Globe,
      title: "Global Solution",
      description:
        "Scalable technology that can be deployed in residential pools, public aquatic centers, and water parks worldwide.",
    },
    {
      icon: Trophy,
      title: "Prevention First",
      description:
        "Shifting pool safety from reactive response to proactive prevention through intelligent automation.",
    },
  ]

  return (
    <section id="impact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Our Intended Impact</h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Life Lattice isn't just technology—it's a commitment to protecting what matters most: human life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {impacts.map((impact, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <impact.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{impact.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{impact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-balance">Join Us in Making Pools Safer</h3>
              <p className="text-lg text-primary-foreground/90 text-pretty max-w-2xl mx-auto leading-relaxed">
                Life Lattice represents the future of aquatic safety. With your support and interest, we can bring this
                life-saving technology to pools everywhere and prevent drowning tragedies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="#team"
                  className="inline-flex items-center justify-center px-8 py-3 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-colors"
                >
                  Meet Our Team
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
