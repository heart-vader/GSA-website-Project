import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Chief Engineer",
    company: "AgriTech Solutions",
    content:
      "Industrial Manufacturing has been our trusted partner for over 10 years. Their precision castings and pulleys have consistently exceeded our quality expectations, and their technical support is unmatched in the industry.",
    rating: 5,
    image: "/placeholder.svg?key=test1",
  },
  {
    name: "Michael Chen",
    position: "Operations Director",
    company: "FarmMax Industries",
    content:
      "The quality and reliability of their products have been instrumental in our success. Their ability to deliver custom solutions on tight deadlines has made them an invaluable manufacturing partner.",
    rating: 5,
    image: "/placeholder.svg?key=test2",
  },
  {
    name: "Emily Rodriguez",
    position: "Procurement Manager",
    company: "HarvestPro Equipment",
    content:
      "What sets Industrial Manufacturing apart is their commitment to continuous improvement and innovation. They don't just supply parts; they provide solutions that help us stay competitive in the market.",
    rating: 5,
    image: "/placeholder.svg?key=test3",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about our products and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="h-8 w-8 text-secondary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed italic pl-6">{testimonial.content}</p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-muted-foreground">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-secondary font-medium">{testimonial.company}</div>
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
