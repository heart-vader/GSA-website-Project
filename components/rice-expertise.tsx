import { Brain as Grain, Shield, Truck, Award } from "lucide-react"

export function RiceExpertise() {
  const expertise = [
    {
      icon: Grain,
      title: "Premium Sourcing",
      description: "Direct partnerships with the finest basmati rice farmers in Punjab and Haryana regions",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Multi-stage quality testing ensuring every grain meets international standards",
    },
    {
      icon: Truck,
      title: "Reliable Supply",
      description: "Consistent inventory management and timely delivery to meet your business needs",
    },
    {
      icon: Award,
      title: "Export Excellence",
      description: "Certified for international markets with proper documentation and compliance",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Years of experience in the rice industry have given us deep insights into quality, sourcing, and customer
            requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((item, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto">
                <item.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
