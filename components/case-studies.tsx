import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    title: "Reducing Downtime for Major Tractor Manufacturer",
    client: "AgriTech Solutions",
    industry: "Equipment Manufacturing",
    challenge:
      "Frequent pulley failures were causing costly production downtime and affecting delivery schedules for a major tractor manufacturer.",
    solution:
      "Developed custom high-strength pulleys with improved bearing systems and implemented predictive maintenance protocols.",
    results: [
      { metric: "95%", description: "Reduction in pulley failures" },
      { metric: "40%", description: "Decrease in maintenance costs" },
      { metric: "99.8%", description: "Production uptime achieved" },
    ],
    image: "/placeholder.svg?key=case1",
    duration: "6 months",
    category: "Manufacturing Optimization",
  },
  {
    title: "Custom Casting Solution for Harvester Components",
    client: "HarvestPro Equipment",
    industry: "Agricultural Equipment",
    challenge:
      "Required lightweight yet durable casting components for new harvester design with strict weight and strength requirements.",
    solution:
      "Engineered advanced aluminum alloy castings with optimized geometry and implemented rigorous testing protocols.",
    results: [
      { metric: "30%", description: "Weight reduction achieved" },
      { metric: "25%", description: "Increase in component strength" },
      { metric: "15%", description: "Improvement in fuel efficiency" },
    ],
    image: "/placeholder.svg?key=case2",
    duration: "8 months",
    category: "Product Development",
  },
]

export function CaseStudies() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped our clients overcome challenges and achieve their manufacturing goals through
            innovative solutions and expert collaboration.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">{study.category}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {study.duration}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{study.title}</h3>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium text-secondary">{study.client}</span> • {study.industry}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-secondary" />
                      Results Achieved
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold text-secondary">{result.metric}</div>
                          <div className="text-xs text-muted-foreground">{result.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      Discuss Your Project
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Your Success Story?</h3>
            <p className="text-primary-foreground/90 leading-relaxed mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their operations with our manufacturing solutions.
              Let's discuss how we can help you achieve your goals.
            </p>
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
