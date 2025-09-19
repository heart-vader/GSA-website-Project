import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

const leaders = [
  {
    name: "John Mitchell",
    position: "Chief Executive Officer",
    experience: "25+ years in manufacturing",
    description:
      "Visionary leader with extensive experience in precision manufacturing and global business development.",
    image: "/professional-ceo-headshot.png",
  },
  {
    name: "Sarah Chen",
    position: "Chief Technology Officer",
    experience: "20+ years in engineering",
    description:
      "Expert in advanced manufacturing technologies and quality systems, driving innovation across all operations.",
    image: "/professional-cto-headshot.jpg",
  },
  {
    name: "Michael Rodriguez",
    position: "VP of Operations",
    experience: "18+ years in operations",
    description:
      "Operational excellence specialist focused on efficiency, safety, and continuous improvement initiatives.",
    image: "/professional-vp-headshot.jpg",
  },
  {
    name: "Emily Thompson",
    position: "VP of Quality Assurance",
    experience: "15+ years in quality",
    description: "Quality systems expert ensuring all products meet the highest standards and regulatory requirements.",
    image: "/placeholder-ncqmf.png",
  },
]

export function Leadership() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our experienced leadership team brings together decades of expertise in manufacturing, engineering, and
            business development to drive our continued success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{leader.name}</h3>
                  <p className="text-secondary font-medium text-sm">{leader.position}</p>
                  <p className="text-muted-foreground text-xs">{leader.experience}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{leader.description}</p>
                <div className="flex gap-2 pt-2">
                  <button className="p-2 rounded-full bg-muted hover:bg-secondary/10 transition-colors">
                    <Linkedin className="h-4 w-4 text-muted-foreground hover:text-secondary" />
                  </button>
                  <button className="p-2 rounded-full bg-muted hover:bg-secondary/10 transition-colors">
                    <Mail className="h-4 w-4 text-muted-foreground hover:text-secondary" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Skilled Workforce</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Beyond our leadership team, we're proud to employ over 150 skilled professionals including engineers,
            machinists, quality technicians, and support staff. Our team's expertise and dedication are the foundation
            of our success, ensuring every product meets our exacting standards.
          </p>
        </div>
      </div>
    </section>
  )
}
