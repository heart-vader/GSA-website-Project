import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Download } from "lucide-react"
import Link from "next/link"

const featuredProducts = [
  {
    name: "Heavy-Duty V-Belt Pulley",
    category: "Pulleys",
    image: "/placeholder.svg?key=pulley1",
    rating: 4.9,
    reviews: 127,
    features: ["Cast Iron Construction", "Precision Balanced", "Multiple Sizes"],
    applications: ["Tractors", "Combines", "Hay Equipment"],
    badge: "Best Seller",
  },
  {
    name: "Agricultural Gear Housing",
    category: "Castings",
    image: "/placeholder.svg?key=casting1",
    rating: 4.8,
    reviews: 89,
    features: ["Ductile Iron", "Machined Surfaces", "Custom Designs"],
    applications: ["Gearboxes", "Transmissions", "Drive Systems"],
    badge: "New",
  },
  {
    name: "Combine Harvester Sprocket",
    category: "Equipment Parts",
    image: "/placeholder.svg?key=sprocket1",
    rating: 4.9,
    reviews: 156,
    features: ["Heat Treated Steel", "Wear Resistant", "OEM Quality"],
    applications: ["Combines", "Harvesters", "Conveyors"],
    badge: "Popular",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and innovative products, trusted by agricultural professionals worldwide for their
            quality and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">{product.badge}</Badge>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <div className="text-sm text-secondary font-medium mb-1">{product.category}</div>
                  <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-secondary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.applications.map((app, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button asChild className="flex-1">
                    <Link href={`/products/${product.category.toLowerCase()}/${index + 1}`}>View Details</Link>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/products/all">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
