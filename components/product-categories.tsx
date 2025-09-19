import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    title: "Agricultural Pulleys",
    description:
      "High-performance pulleys for tractors, combines, and farming equipment. Precision-engineered for durability and efficiency.",
    image: "/agricultural-pulleys-and-castings-products.jpg",
    productCount: "150+ Products",
    href: "/products/pulleys",
  },
  {
    title: "Precision Castings",
    description: "Custom and standard castings for agricultural machinery. Superior strength and dimensional accuracy.",
    image: "/placeholder.svg?key=cast1",
    productCount: "200+ Products",
    href: "/products/castings",
  },
  {
    title: "Farm Equipment Parts",
    description: "Replacement and OEM parts for various agricultural equipment. Reliable performance you can trust.",
    image: "/placeholder.svg?key=equip1",
    productCount: "300+ Products",
    href: "/products/equipment",
  },
  {
    title: "Custom Solutions",
    description: "Tailored manufacturing solutions for unique agricultural applications. From concept to production.",
    image: "/placeholder.svg?key=custom1",
    productCount: "Unlimited Options",
    href: "/products/custom",
  },
]

export function ProductCategories() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Product Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of agricultural manufacturing solutions, each category designed to meet
            specific industry needs and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  <span className="text-sm text-secondary font-medium">{category.productCount}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                <Button asChild className="w-full group">
                  <Link href={category.href} className="flex items-center justify-center gap-2">
                    View Products
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
