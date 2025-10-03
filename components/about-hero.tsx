import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutHero() {
  return (
    <section className="relative py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
              Premium Quality
              <span className="text-white/80 block">Basmati Rice Suppliers</span>
            </h1>
            <p className="text-xl leading-relaxed text-primary-foreground/90">
              G S Agrotech has been delivering the finest quality basmati rice to discerning customers worldwide. Our
              commitment to excellence and rigorous quality standards ensure every grain meets the highest standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-white text-black hover:bg-white/90">
                <Link href="/products" className="flex items-center gap-2">
                  View Our Rice Varieties
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/public/clarkrice.png"
              alt="Premium basmati rice fields"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-black p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">Premium</div>
              <div className="text-sm">Quality Assured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
