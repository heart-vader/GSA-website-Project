import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export function RiceVarieties() {
  const varieties = [
    {
      name: "DILLI HAAT Diamond Basmati Rice",
      image: "/dilli-haat-diamond.jpg",
      description:
        "Premium quality basmati rice with exceptional aroma and long grains, featuring traditional Delhi heritage",
      features: ["Extra long grain", "Premium quality", "Traditional Delhi heritage", "25kg packaging"],
      price: "Contact for pricing",
      brand: "DILLI HAAT",
      rating: 5,
      popular: true,
    },
    {
      name: "KASHMIRI GATE Premium Basmati Rice",
      image: "/kashmiri-gate-premium.jpg",
      description: "Luxurious basmati rice with authentic Kashmiri quality and ornate packaging design",
      features: ["Premium grade", "Kashmiri quality", "Ornate packaging", "26kg packaging"],
      price: "Contact for pricing",
      brand: "KASHMIRI GATE",
      rating: 5,
      popular: true,
    },
    {
      name: "DILLI HAAT Gold Basmati Rice",
      image: "/dilli-haat-gold.jpg",
      description: "High-quality basmati rice with rich aroma and perfect texture for special occasions",
      features: ["Gold grade quality", "Rich aroma", "Perfect texture", "25kg packaging"],
      price: "Contact for pricing",
      brand: "DILLI HAAT",
      rating: 4,
    },
    {
      name: "DILLI HAAT Silver Basmati Rice",
      image: "/dilli-haat-silver.jpg",
      description: "Quality basmati rice with consistent grain length and natural fragrance",
      features: ["Silver grade", "Consistent grains", "Natural fragrance", "25kg packaging"],
      price: "Contact for pricing",
      brand: "DILLI HAAT",
      rating: 4,
    },
    {
      name: "KASHMIRI GATE Classic Basmati Rice",
      image: "/kashmiri-gate-classic.jpg",
      description: "Classic basmati variety with traditional Kashmiri processing and authentic taste",
      features: ["Classic variety", "Traditional processing", "Authentic taste", "26kg packaging"],
      price: "Contact for pricing",
      brand: "KASHMIRI GATE",
      rating: 4,
    },
    {
      name: "KASHMIRI GATE Royale Basmati Rice",
      image: "/kashmiri-gate-royale.jpg",
      description: "Royal quality basmati rice with premium grading and luxurious packaging",
      features: ["Royal quality", "Premium grading", "Luxurious packaging", "26kg packaging"],
      price: "Contact for pricing",
      brand: "KASHMIRI GATE",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-200/10 rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-red-200/10 rounded-full animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-secondary to-yellow-600 bg-clip-text text-transparent">
            Our Premium Rice Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our authentic basmati rice varieties from two prestigious brands - DILLI HAAT and KASHMIRI GATE,
            each offering exceptional quality and traditional flavors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {varieties.map((variety, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl overflow-hidden shadow-lg border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group relative animate-in fade-in slide-in-from-bottom duration-800 ${
                variety.popular
                  ? "border-yellow-300 bg-gradient-to-br from-card to-yellow-50/30"
                  : "border-border hover:border-secondary/50"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {variety.popular && (
                <div className="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                  Most Popular
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={variety.image || "/placeholder.svg"}
                  alt={variety.name}
                  className="w-full h-72 object-contain bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                  {variety.brand}
                </div>

                <div className="absolute bottom-4 left-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < variety.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-balance group-hover:text-secondary transition-colors duration-300">
                  {variety.name}
                </h3>
                <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{variety.description}</p>

                <ul className="space-y-3 mb-8">
                  {variety.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-secondary to-yellow-500 rounded-full transition-transform group-hover/item:scale-150"></div>
                      <span className="group-hover/item:text-secondary transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg text-secondary">{variety.price}</span>
                  <Button
                    size="sm"
                    asChild
                    className="flex items-center gap-2 group/btn bg-gradient-to-r from-secondary to-yellow-500 hover:from-secondary/90 hover:to-yellow-500/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/contact">
                      Get Quote
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-foreground to-secondary bg-clip-text text-transparent">
            Premium Gift Packaging Available
          </h3>
          <div className="max-w-lg mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-yellow-200/50 bg-gradient-to-br from-white to-yellow-50/30 p-6 group hover:scale-105 transition-all duration-500">
              <img
                src="/dilli-haat-gift-bag.jpg"
                alt="DILLI HAAT Gift Packaging"
                className="w-full h-80 object-contain rounded-xl transition-transform duration-700 group-hover:scale-110 filter drop-shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </div>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Special gift packaging available for corporate orders and festive occasions featuring our premium rice
              varieties.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
