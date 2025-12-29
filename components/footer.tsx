import { Waves } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M12 2L12 12M12 12L17 7M12 12L7 7M12 12L12 22M5 22L19 22" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              </div>
              <span className="text-lg font-bold">Life Lattice</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              AI-powered drowning detection and rescue system for safer pools.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Innovation</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#problem" className="hover:text-primary-foreground transition-colors">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-primary-foreground transition-colors">
                  Our Solution
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-primary-foreground transition-colors">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#team" className="hover:text-primary-foreground transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-primary-foreground transition-colors">
                  Our Impact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Conrad Challenge
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Email Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Request Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Partnership Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} Life Lattice. Created for the Conrad Challenge.
          </p>
          <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <Waves className="w-4 h-4" />
            <span>Saving lives, one pool at a time</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
