import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-secondary/30 to-accent/20">
        {/* Animated wave layers */}
        <div className="absolute inset-0 opacity-40">
          <div className="wave-layer wave-layer-1"></div>
          <div className="wave-layer wave-layer-2"></div>
          <div className="wave-layer wave-layer-3"></div>
        </div>
        {/* Texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Conrad Challenge Innovation
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance leading-tight">
            Saving Lives with <span className="text-primary">AI-Powered</span> Pool Safety
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Life Lattice uses advanced machine learning to detect drowning in real-time and deploys an automated rescue
            mechanism to save lives before it's too late.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
              Learn More
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              Watch Demo
            </Button>
          </div>

          <div className="pt-12 animate-bounce">
            <a
              href="#problem"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm">Discover Our Innovation</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>
    </section>
  )
}
