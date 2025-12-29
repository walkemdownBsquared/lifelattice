import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Beckett Bonness",
      role: "Glorious Six foot Chad Leader",
      bio: "Passionate about applying computer vision to solve real-world safety challenges.",
      image: "/professional-student-portrait.png",
    },
    {
      name: "Windsor Kiang",
      role: "Quant",
      bio: "Designing reliable mechanical systems that deploy in critical moments.",
      image: "/engineering-student-portrait.png",
    },
    {
      name: "Rohan Rai",
      role: "AI Maestro",
      bio: "Building the software infrastructure that connects AI detection to mechanical response.",
      image: "/technology-student-portrait.jpg",
    },
    {
      name: "Derek Wang",
      role: "Unc",
      bio: "Conducting research on drowning patterns and testing detection algorithms.",
      image: "/research-student-portrait.jpg",
    },
    {
      name: "David Huser",
      role: "Head of Tomfoolery",
      bio: "Creating intuitive interfaces and ensuring Life Lattice integrates seamlessly into pool environments.",
      image: "/design-student-portrait.jpg",
    },
  ]

  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            A dedicated group of innovators committed to saving lives through technology and engineering excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
                <div className="flex gap-2 pt-2">
                  <button className="w-8 h-8 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group">
                    <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group">
                    <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <Card className="bg-card border-2">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">About Our Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team came together with a shared vision: to leverage technology to address one of the most pressing
                safety challenges in aquatic environments. Through countless hours of research, prototyping, and
                testing, we've developed Life Lattice as our contribution to the Conrad Challenge and, more importantly,
                to pool safety worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We combine expertise in artificial intelligence, mechanical engineering, software development, and
                safety research to create a comprehensive solution that addresses both the detection and intervention
                aspects of drowning prevention.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
