import { Card, CardContent } from "@/components/ui/card"

const clientCategories = [
  {
    title: "Agricultural Equipment Manufacturers",
    description: "Leading OEMs trust us for precision components",
    logos: [
      { name: "AgriTech Solutions", logo: "/placeholder.svg?key=logo1" },
      { name: "FarmMax Industries", logo: "/placeholder.svg?key=logo2" },
      { name: "GreenField Manufacturing", logo: "/placeholder.svg?key=logo3" },
      { name: "HarvestPro Equipment", logo: "/placeholder.svg?key=logo4" },
    ],
  },
  {
    title: "Global Distributors",
    description: "Worldwide distribution partners",
    logos: [
      { name: "Global Parts Network", logo: "/placeholder.svg?key=logo5" },
      { name: "AgriSupply International", logo: "/placeholder.svg?key=logo6" },
      { name: "Farm Equipment Direct", logo: "/placeholder.svg?key=logo7" },
      { name: "Rural Solutions Group", logo: "/placeholder.svg?key=logo8" },
    ],
  },
  {
    title: "Large Scale Farms",
    description: "Commercial farming operations",
    logos: [
      { name: "MegaFarm Enterprises", logo: "/placeholder.svg?key=logo9" },
      { name: "Continental Agriculture", logo: "/placeholder.svg?key=logo10" },
      { name: "Prairie Harvest Co.", logo: "/placeholder.svg?key=logo11" },
      { name: "Golden Valley Farms", logo: "/placeholder.svg?key=logo12" },
    ],
  },
]

export function ClientLogos() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Valued Clients</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're proud to serve a diverse range of clients, from global manufacturers to local farming operations.
          </p>
        </div>

        <div className="space-y-12">
          {clientCategories.map((category, index) => (
            <div key={index}>
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.logos.map((client, idx) => (
                  <Card key={idx} className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-xs font-medium text-muted-foreground">LOGO</span>
                        </div>
                        <div className="text-sm font-medium text-foreground">{client.name}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
