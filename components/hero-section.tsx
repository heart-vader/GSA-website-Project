import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/premium-basmati-rice-fields-golden-harvest.jpg"
          alt="Premium basmati rice fields"
          className="w-full h-full object-cover animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Premium Basmati Rice
            <span className="text-secondary block">from fields to your plate</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            Leading rice supplier providing exceptional quality rice products to businesses countrywide. From premium
            basmati to specialty varieties, we deliver excellence in every grain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Button
              size="lg"
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground group transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/products" className="flex items-center gap-2">
                Explore Our Products
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent group transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Request Quote
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary">10+</div>
              <div className="text-sm text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary">60+</div>
              <div className="text-sm text-primary-foreground/80">Business Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary">100%</div>
              <div className="text-sm text-primary-foreground/80">Quality Assured</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
