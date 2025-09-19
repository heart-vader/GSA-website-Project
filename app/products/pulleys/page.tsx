import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductCategoryHero } from "@/components/product-category-hero"
import { ProductGrid } from "@/components/product-grid"

const pulleyProducts = [
  {
    id: 1,
    name: "Heavy-Duty V-Belt Pulley",
    image: "/placeholder.svg?key=pulley1",
    price: "Starting at $89",
    description: "Cast iron construction with precision balancing for agricultural equipment.",
    features: ["Cast Iron", "Precision Balanced", "Multiple Sizes", "Corrosion Resistant"],
    applications: ["Tractors", "Combines", "Hay Equipment"],
  },
  {
    id: 2,
    name: "Variable Speed Pulley",
    image: "/placeholder.svg?key=pulley2",
    price: "Starting at $156",
    description: "Adjustable pulley system for variable speed applications in farming equipment.",
    features: ["Variable Speed", "Steel Construction", "Easy Adjustment", "Long Lasting"],
    applications: ["Threshers", "Conveyors", "Processing Equipment"],
  },
  {
    id: 3,
    name: "Timing Belt Pulley",
    image: "/placeholder.svg?key=pulley3",
    price: "Starting at $67",
    description: "Precision timing pulleys for synchronized agricultural machinery operations.",
    features: ["Precise Timing", "Aluminum Alloy", "Lightweight", "High Strength"],
    applications: ["Planters", "Seeders", "Precision Equipment"],
  },
]

export const metadata = {
  title: "Agricultural Pulleys | Industrial Manufacturing",
  description:
    "High-quality agricultural pulleys for tractors, combines, and farming equipment. Precision-engineered for durability and performance.",
}

export default function PulleysPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ProductCategoryHero
          title="Agricultural Pulleys"
          description="Precision-engineered pulleys for reliable power transmission in agricultural equipment. Built to withstand demanding farming conditions."
          productCount="150+ Products"
        />
        <ProductGrid products={pulleyProducts} category="pulleys" />
      </main>
      <Footer />
    </div>
  )
}
