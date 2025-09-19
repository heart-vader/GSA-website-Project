import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Eye } from "lucide-react"
import Link from "next/link"

interface Product {
  id: number
  name: string
  image: string
  price: string
  description: string
  features: string[]
  applications: string[]
}

interface ProductGridProps {
  products: Product[]
  category: string
}

export function ProductGrid({ products, category }: ProductGridProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                  <p className="text-secondary font-medium">{product.price}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.applications.map((app, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button asChild className="flex-1">
                    <Link href={`/products/${category}/${product.id}`}>
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
