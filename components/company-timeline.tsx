import { Card, CardContent } from "@/components/ui/card"

const milestones = [
  {
    year: "1999",
    title: "Company Founded",
    description: "Industrial Manufacturing established with focus on precision casting for agricultural equipment.",
  },
  {
    year: "2003",
    title: "First Major Contract",
    description: "Secured partnership with leading agricultural equipment manufacturer, expanding production capacity.",
  },
  {
    year: "2007",
    title: "ISO Certification",
    description: "Achieved ISO 9001 certification, establishing quality management systems and processes.",
  },
  {
    year: "2012",
    title: "Global Expansion",
    description: "Opened international sales offices and began serving clients across Europe and Asia.",
  },
  {
    year: "2016",
    title: "Technology Upgrade",
    description: "Invested $5M in advanced CNC machinery and automated production systems.",
  },
  {
    year: "2019",
    title: "Sustainability Initiative",
    description: "Launched comprehensive environmental program, achieving carbon-neutral manufacturing.",
  },
  {
    year: "2022",
    title: "Innovation Center",
    description: "Opened dedicated R&D facility for product development and testing.",
  },
  {
    year: "2024",
    title: "Digital Transformation",
    description: "Implemented Industry 4.0 technologies and smart manufacturing systems.",
  },
]

export function CompanyTimeline() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to global leadership, explore the key milestones that have shaped our company's
            growth and success over the past 25 years.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary/30 transform md:-translate-x-0.5" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-secondary rounded-full transform -translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="ml-8 md:ml-0 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                          {milestone.year}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
