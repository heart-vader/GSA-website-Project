import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award } from "lucide-react"

export function CompanyHistory() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Story</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded in 1999, Industrial Manufacturing began as a small precision casting company with a vision to
            revolutionize agricultural equipment manufacturing. Today, we're a global leader serving clients across 50+
            countries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-8 space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver precision-engineered agricultural equipment solutions that enhance productivity, reliability,
                and sustainability for farmers worldwide through innovative manufacturing processes and unwavering
                quality standards.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8 space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in agricultural equipment manufacturing, recognized for our innovation, quality,
                and commitment to sustainable practices that support the future of farming and food security.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8 space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Excellence in every product, integrity in every relationship, innovation in every solution, and
                sustainability in every process. These core values guide our decisions and define our culture.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Manufacturing Excellence</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our state-of-the-art facilities span over 200,000 square feet, housing the latest in precision
                manufacturing technology. From computer-controlled machining centers to advanced quality testing
                laboratories, every aspect of our operation is designed for excellence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-secondary">200K+</div>
                  <div className="text-sm text-muted-foreground">Sq Ft Facility</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">150+</div>
                  <div className="text-sm text-muted-foreground">Skilled Workers</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/modern-factory-floor.png"
                alt="Manufacturing facility interior"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
