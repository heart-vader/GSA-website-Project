import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const processSteps = [
  {
    step: "01",
    title: "Raw Material Procurement",
    description: "Sourcing high-quality materials from certified suppliers with rigorous incoming inspection.",
    details: ["Material Certification", "Chemical Analysis", "Dimensional Verification"],
  },
  {
    step: "02",
    title: "Precision Casting",
    description: "Advanced casting processes including sand casting, investment casting, and die casting.",
    details: ["Pattern Making", "Mold Preparation", "Pouring & Cooling"],
  },
  {
    step: "03",
    title: "CNC Machining",
    description: "Computer-controlled machining for precise dimensions and superior surface finishes.",
    details: ["5-Axis Machining", "Turning Operations", "Surface Finishing"],
  },
  {
    step: "04",
    title: "Heat Treatment",
    description: "Controlled heat treatment processes to achieve optimal material properties.",
    details: ["Stress Relief", "Hardening", "Tempering"],
  },
  {
    step: "05",
    title: "Quality Control",
    description: "Comprehensive inspection and testing to ensure all specifications are met.",
    details: ["Dimensional Inspection", "Material Testing", "Performance Validation"],
  },
  {
    step: "06",
    title: "Finishing & Packaging",
    description: "Final finishing operations and secure packaging for safe delivery.",
    details: ["Surface Treatment", "Protective Coating", "Custom Packaging"],
  },
]

export function ManufacturingProcess() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Manufacturing Process</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our systematic approach ensures consistent quality and precision at every stage of production, from raw
            materials to finished products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((process, index) => (
            <div key={index} className="relative">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{process.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{process.description}</p>
                  <div className="space-y-2">
                    {process.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-secondary rounded-full" />
                        <span className="text-sm text-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Arrow connector for desktop */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-secondary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
