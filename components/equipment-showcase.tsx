import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const equipment = [
  {
    category: "CNC Machining Centers",
    items: [
      { name: "5-Axis Machining Centers", count: "8 Units", specs: "Up to 2000mm travel" },
      { name: "Horizontal Machining Centers", count: "12 Units", specs: "Pallet changer systems" },
      { name: "Vertical Machining Centers", count: "15 Units", specs: "High-speed spindles" },
    ],
  },
  {
    category: "Casting Equipment",
    items: [
      { name: "Induction Furnaces", count: "4 Units", specs: "Up to 5 ton capacity" },
      { name: "Sand Molding Lines", count: "3 Lines", specs: "Automated systems" },
      { name: "Core Making Machines", count: "6 Units", specs: "Various core sizes" },
    ],
  },
  {
    category: "Quality Control",
    items: [
      { name: "CMM Machines", count: "5 Units", specs: "Zeiss & Mitutoyo" },
      { name: "Spectrometers", count: "3 Units", specs: "Material analysis" },
      { name: "Hardness Testers", count: "8 Units", specs: "Rockwell & Brinell" },
    ],
  },
  {
    category: "Support Equipment",
    items: [
      { name: "Overhead Cranes", count: "12 Units", specs: "Up to 20 ton capacity" },
      { name: "Heat Treatment Furnaces", count: "6 Units", specs: "Controlled atmosphere" },
      { name: "Surface Grinders", count: "10 Units", specs: "Precision finishing" },
    ],
  },
]

export function EquipmentShowcase() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Advanced Equipment</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our facility is equipped with the latest manufacturing technology from leading global suppliers, ensuring
            precision, efficiency, and reliability in every operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {equipment.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start p-3 bg-muted/50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.specs}</p>
                      </div>
                      <Badge variant="secondary" className="ml-3">
                        {item.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Continuous Investment in Technology</h3>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                We continuously invest in the latest manufacturing technology to maintain our competitive edge. Our
                equipment is regularly updated and maintained to ensure optimal performance and precision.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-secondary">$5M+</div>
                  <div className="text-sm text-primary-foreground/80">Annual Equipment Investment</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">99.5%</div>
                  <div className="text-sm text-primary-foreground/80">Equipment Uptime</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/modern-factory-floor.png"
                alt="Advanced manufacturing equipment"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
