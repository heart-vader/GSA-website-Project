import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, Users, Cog } from "lucide-react"

const qualityPillars = [
  {
    icon: FileText,
    title: "Quality Management System",
    description:
      "ISO 9001:2015 certified QMS with documented procedures, work instructions, and continuous improvement processes.",
    features: ["Document Control", "Process Mapping", "Corrective Actions", "Management Review"],
  },
  {
    icon: Users,
    title: "Skilled Quality Team",
    description:
      "Dedicated quality professionals with extensive experience in manufacturing quality control and assurance.",
    features: ["Certified Inspectors", "Quality Engineers", "Continuous Training", "Best Practices"],
  },
  {
    icon: Cog,
    title: "Process Control",
    description:
      "Statistical process control and real-time monitoring to ensure consistent quality throughout production.",
    features: ["SPC Implementation", "Control Charts", "Process Capability", "Real-time Monitoring"],
  },
  {
    icon: CheckCircle,
    title: "Customer Focus",
    description:
      "Customer satisfaction is our primary measure of success, with feedback integrated into our improvement processes.",
    features: ["Customer Surveys", "Feedback Integration", "Satisfaction Metrics", "Continuous Improvement"],
  },
]

export function QualityManagement() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Quality Management System</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive quality management system is built on four fundamental pillars that ensure consistent
            excellence in every product we manufacture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qualityPillars.map((pillar, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <pillar.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{pillar.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {pillar.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
