import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, TrendingUp, Clock } from "lucide-react"

export function ProblemSection() {
  const statistics = [
    {
      icon: AlertCircle,
      number: "4,000+",
      label: "Annual drowning deaths in the US",
      description: "Drowning is the leading cause of death for children ages 1-4",
    },
    {
      icon: Clock,
      number: "20-60s",
      label: "Time until brain damage",
      description: "Every second counts in a drowning emergency",
    },
    {
      icon: TrendingUp,
      number: "70%",
      label: "Occur in residential pools",
      description: "Most drownings happen in familiar settings with supervision nearby",
    },
  ]

  return (
    <section id="problem" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">The Drowning Crisis</h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Drowning is a silent killer. It happens fast, without warning, and often without the splashing or cries for
            help we expect to see.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {statistics.map((stat, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-destructive" />
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-lg font-semibold text-foreground">{stat.label}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Traditional lifeguards and surveillance systems are reactive, not proactive. By the time someone notices a
            drowning victim, precious seconds have already been lost. We need a solution that acts faster than human
            reaction time.
          </p>
        </div>
      </div>
    </section>
  )
}
