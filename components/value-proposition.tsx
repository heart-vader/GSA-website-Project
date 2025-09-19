import { Card, CardContent } from "@/components/ui/card"
import { Factory, Shield, Globe, Wrench } from "lucide-react"

const valueProps = [
  {
    icon: Factory,
    title: "What We Do",
    description:
      "Precision manufacturing of agricultural equipment, castings, and pulleys with cutting-edge technology and decades of expertise.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description:
      "ISO certified processes with rigorous quality control at every stage. Our commitment to excellence ensures reliable, durable products.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Serving clients worldwide with efficient logistics and local support. Trusted by leading agricultural companies across 50+ countries.",
  },
  {
    icon: Wrench,
    title: "In-House Capability",
    description:
      "Complete manufacturing ecosystem from raw materials to finished products. Full control over quality, timing, and customization.",
  },
]

export function ValueProposition() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Industrial Manufacturing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built on a foundation of innovation, quality, and reliability. We deliver solutions that power agricultural
            success worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <prop.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{prop.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{prop.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
