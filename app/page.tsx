import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ImpactSection } from "@/components/impact-section"
import { TeamSection } from "@/components/team-section"
import { CTASection } from "@/components/cta-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <ImpactSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
