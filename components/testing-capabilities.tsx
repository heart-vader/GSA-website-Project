import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const testingCategories = [
  {
    title: "Dimensional Inspection",
    description: "Precision measurement and verification of all critical dimensions and tolerances.",
    equipment: [
      { name: "Coordinate Measuring Machines (CMM)", specs: "±0.001mm accuracy" },
      { name: "Optical Comparators", specs: "Profile measurement" },
      { name: "Height Gauges", specs: "Digital readout" },
      { name: "Micrometers & Calipers", specs: "Calibrated tools" },
    ],
  },
  {
    title: "Material Testing",
    description: "Comprehensive material analysis to verify composition and properties.",
    equipment: [
      { name: "Optical Emission Spectrometer", specs: "Chemical analysis" },
      { name: "Hardness Testers", specs: "Rockwell & Brinell" },
      { name: "Tensile Testing Machine", specs: "Mechanical properties" },
      { name: "Impact Testing", specs: "Charpy & Izod" },
    ],
  },
  {
    title: "Non-Destructive Testing",
    description: "Advanced NDT methods to detect internal defects without damaging parts.",
    equipment: [
      { name: "Magnetic Particle Testing", specs: "Surface crack detection" },
      { name: "Liquid Penetrant Testing", specs: "Surface defect inspection" },
      { name: "Ultrasonic Testing", specs: "Internal flaw detection" },
      { name: "Visual Inspection", specs: "Magnified examination" },
    ],
  },
  {
    title: "Performance Testing",
    description: "Functional testing to ensure products meet performance requirements.",
    equipment: [
      { name: "Load Testing Equipment", specs: "Stress analysis" },
      { name: "Fatigue Testing", specs: "Cycle testing" },
      { name: "Environmental Testing", specs: "Temperature & humidity" },
      { name: "Vibration Testing", specs: "Dynamic analysis" },
    ],
  },
]

export function TestingCapabilities() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Testing Capabilities</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our state-of-the-art testing laboratory is equipped with advanced instruments and staffed by certified
            technicians to ensure comprehensive quality verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testingCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{category.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{category.description}</p>
                <div className="space-y-3">
                  {category.equipment.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-background rounded-lg">
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.specs}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Available
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">Calibration & Traceability</h3>
            <p className="text-primary-foreground/90 leading-relaxed mb-6 max-w-3xl mx-auto">
              All our measuring and testing equipment is regularly calibrated to national standards, ensuring
              measurement traceability and accuracy. Our calibration program is maintained according to ISO/IEC 17025
              requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold text-secondary">NIST</div>
                <div className="text-sm text-primary-foreground/80">Traceable Standards</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">Annual</div>
                <div className="text-sm text-primary-foreground/80">Calibration Schedule</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">100%</div>
                <div className="text-sm text-primary-foreground/80">Equipment Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
