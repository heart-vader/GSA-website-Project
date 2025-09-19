import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, CheckCircle, Globe } from "lucide-react"

const certifications = [
  {
    icon: Shield,
    title: "ISO 9001:2015",
    description: "Quality Management Systems",
    status: "Certified",
    year: "2020",
  },
  {
    icon: Award,
    title: "ISO 14001:2015",
    description: "Environmental Management",
    status: "Certified",
    year: "2021",
  },
  {
    icon: CheckCircle,
    title: "OHSAS 18001",
    description: "Occupational Health & Safety",
    status: "Certified",
    year: "2019",
  },
  {
    icon: Globe,
    title: "CE Marking",
    description: "European Conformity",
    status: "Compliant",
    year: "2018",
  },
]

const qualityProcesses = [
  "Incoming material inspection and testing",
  "In-process quality control at every stage",
  "Final product inspection and testing",
  "Statistical process control (SPC)",
  "Continuous improvement programs",
  "Customer feedback integration",
  "Supplier quality management",
  "Calibrated testing equipment",
]

export function Certifications() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Certifications & Quality Standards</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to quality is validated through rigorous certifications and adherence to international
            standards, ensuring our products meet the highest quality and safety requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <cert.icon className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
                <div className="flex justify-center gap-2">
                  <Badge variant="secondary">{cert.status}</Badge>
                  <Badge variant="outline">{cert.year}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Quality Control Process</h3>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                Our comprehensive quality control process ensures every product meets our exacting standards. From raw
                material inspection to final testing, we maintain strict quality protocols at every stage.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {qualityProcesses.map((process, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-sm text-primary-foreground/90">{process}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/quality-control-testing-laboratory.jpg"
                alt="Quality control laboratory"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
