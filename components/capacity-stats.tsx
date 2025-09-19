import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    value: "50,000+",
    label: "Parts per Month",
    description: "Production capacity across all product lines",
  },
  {
    value: "500+",
    label: "Active SKUs",
    description: "Different products in regular production",
  },
  {
    value: "24/7",
    label: "Operations",
    description: "Continuous production capabilities",
  },
  {
    value: "99.9%",
    label: "On-Time Delivery",
    description: "Consistent delivery performance",
  },
]

export function CapacityStats() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Production Capacity</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our advanced infrastructure enables us to meet demanding production schedules while maintaining the highest
            quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-3">
                <div className="text-3xl md:text-4xl font-bold text-secondary">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
