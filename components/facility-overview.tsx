import { Card, CardContent } from "@/components/ui/card"
import { Factory, Cog, Shield, Truck } from "lucide-react"

const facilities = [
  {
    icon: Factory,
    title: "Production Floor",
    area: "120,000 sq ft",
    description: "Main manufacturing area with CNC machining centers, casting facilities, and assembly lines.",
    features: ["Climate Controlled", "24/7 Operations", "Automated Systems"],
  },
  {
    icon: Cog,
    title: "Machine Shop",
    area: "40,000 sq ft",
    description: "Precision machining department with advanced CNC equipment and tooling capabilities.",
    features: ["5-Axis Machining", "Precision Tooling", "Custom Fixtures"],
  },
  {
    icon: Shield,
    title: "Quality Lab",
    area: "15,000 sq ft",
    description: "Comprehensive testing and quality control laboratory with advanced measurement equipment.",
    features: ["CMM Inspection", "Material Testing", "Calibrated Equipment"],
  },
  {
    icon: Truck,
    title: "Warehouse",
    area: "25,000 sq ft",
    description: "Raw materials storage and finished goods warehouse with efficient logistics systems.",
    features: ["Inventory Management", "Climate Control", "Shipping Dock"],
  },
]

export function FacilityOverview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Facility Overview</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive manufacturing complex is designed to support every aspect of precision manufacturing, from
            raw material processing to finished product delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <facility.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{facility.title}</h3>
                      <span className="text-sm text-secondary font-medium">{facility.area}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{facility.description}</p>
                    <div className="space-y-2">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
