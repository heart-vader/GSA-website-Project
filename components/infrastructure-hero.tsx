import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"
import Link from "next/link"

export function InfrastructureHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
              State-of-the-Art
              <span className="text-secondary block">Manufacturing Infrastructure</span>
            </h1>
            <p className="text-xl leading-relaxed text-primary-foreground/90">
              Our world-class facilities span over 200,000 square feet, housing the latest in precision manufacturing
              technology and quality control systems. Every aspect is designed for excellence and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90">
                <Link href="/contact" className="flex items-center gap-2">
                  Schedule Tour
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Video
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/modern-industrial-manufacturing-facility-with-heav.jpg"
              alt="Manufacturing facility exterior"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">200K+</div>
              <div className="text-sm">Sq Ft Facility</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
