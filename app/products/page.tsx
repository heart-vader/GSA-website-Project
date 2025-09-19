import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductsHero } from "@/components/products-hero"
import { RiceVarieties } from "@/components/rice-varieties"
import { ProductSpecs } from "@/components/product-specs"

export const metadata = {
  title: "Premium Basmati Rice Varieties | GS Agrotech - Quality Rice Suppliers",
  description:
    "Explore our premium basmati rice varieties including 1121, Pusa, and traditional basmati. High-quality rice for export and domestic markets.",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ProductsHero />
        <RiceVarieties />
        <ProductSpecs />
      </main>
      <Footer />
    </div>
  )
}
