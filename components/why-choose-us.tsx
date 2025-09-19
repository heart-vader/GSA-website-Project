"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  "Premium quality sourced from finest rice-growing regions",
  "Rigorous quality control for consistent excellence",
  "Fast delivery with efficient logistics network",
  "Expert rice specialists for personalized support",
  "Competitive pricing for bulk orders",
  "Trusted by hundreds of businesses nationwide",
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-1000">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-in fade-in slide-in-from-bottom duration-800">
                Why Choose GS Agrotech?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom duration-800 delay-200">
                We combine decades of expertise with modern supply chain solutions to deliver the finest rice products
                to your business. From premium basmati to specialty varieties, we ensure consistent quality and reliable
                service that keeps your operations running smoothly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group animate-in fade-in slide-in-from-bottom duration-600"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="text-sm text-foreground group-hover:text-secondary transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-in fade-in slide-in-from-bottom duration-800 delay-500">
              <Button
                asChild
                size="lg"
                className="group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/about" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Link href="/products">View Our Products</Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center animate-in fade-in slide-in-from-right duration-1000 delay-300">
            <Card className="overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-red-50 p-16 shadow-2xl border-2 border-yellow-200/50 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl group relative">
              <div className="relative">
                {/* Enhanced decorative background elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-400/20 rounded-full animate-pulse" />
                <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-red-400/20 rounded-full animate-pulse delay-1000" />
                <div className="absolute top-1/2 -right-8 w-6 h-6 bg-yellow-300/30 rounded-full animate-pulse delay-500" />
                <div className="absolute bottom-1/4 -left-8 w-4 h-4 bg-red-300/30 rounded-full animate-pulse delay-700" />

                <img
                  src="/gsa-logo-new.jpg"
                  alt="GS Agrotech - Premium Rice Supplier"
                  className="w-full h-80 object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 filter drop-shadow-2xl"
                />

                {/* Enhanced premium badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-red-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-bounce">
                  Premium Quality
                </div>

                {/* Additional floating elements */}
                <div className="absolute top-1/4 -left-4 bg-gradient-to-r from-yellow-300 to-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md animate-pulse delay-300">
                  Trusted
                </div>
              </div>

              {/* Enhanced border animation */}
              <div
                className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background: "linear-gradient(45deg, #fbbf24, #ef4444, #fbbf24)",
                  backgroundSize: "200% 200%",
                  animation: "gradient 3s ease infinite",
                }}
              />
            </Card>
          </div>
        </div>
      </div>

      {/* Custom CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}
