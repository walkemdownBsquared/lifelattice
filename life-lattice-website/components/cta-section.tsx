import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary via-secondary to-primary border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/water-ripples-pattern.jpg')] opacity-10" />
            <CardContent className="p-8 md:p-16 relative z-10 text-center space-y-6 text-primary-foreground">
              <h2 className="text-3xl md:text-5xl font-bold text-balance">Interested in Life Lattice?</h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty max-w-2xl mx-auto leading-relaxed">
                Whether you're a judge for the Conrad Challenge, a potential partner, or simply interested in our
                innovation, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6 group"
                >
                  Contact Our Team
                  <Mail className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 group bg-transparent"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
