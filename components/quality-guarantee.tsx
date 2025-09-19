import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Award, RefreshCw, Phone } from "lucide-react"
import Link from "next/link"

const guarantees = [
  {
    icon: Shield,
    title: "Quality Warranty",
    description: "All products backed by comprehensive warranty against manufacturing defects.",
    details: ["12-month warranty", "Defect replacement", "Performance guarantee"],
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description: "Ongoing process improvement based on customer feedback and industry best practices.",
    details: ["Regular audits", "Process optimization", "Technology upgrades"],
  },
  {
    icon: Award,
    title: "Certification Compliance",
    description: "Full compliance with industry standards and customer-specific requirements.",
    details: ["ISO certifications", "Industry standards", "Customer specifications"],
  },
]

export function QualityGuarantee() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Quality Guarantee</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We stand behind every product we manufacture with comprehensive guarantees and continuous support to ensure
            your complete satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <guarantee.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{guarantee.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{guarantee.description}</p>
                <div className="space-y-2">
                  {guarantee.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-2">
                      <div className="w-1 h-1 bg-secondary rounded-full" />
                      <span className="text-sm text-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary text-secondary-foreground rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Quality Support & Service</h3>
          <p className="text-secondary-foreground/90 leading-relaxed mb-6 max-w-3xl mx-auto">
            Our commitment to quality extends beyond manufacturing. We provide ongoing support, technical assistance,
            and quality consultation to ensure your continued success with our products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
            >
              <Link href="/contact">Contact Quality Team</Link>
            </Button>
            <Button size="lg" className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
              <Phone className="h-5 w-5 mr-2" />
              +1 (555) 123-4567
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
