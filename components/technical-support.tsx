import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageSquare, BookOpen, Users, Clock } from "lucide-react"
import Link from "next/link"

const supportOptions = [
  {
    icon: Phone,
    title: "Technical Hotline",
    description: "Speak directly with our engineering team for immediate technical assistance",
    contact: "+1 (555) 123-TECH",
    availability: "Mon-Fri, 8AM-6PM EST",
  },
  {
    icon: Mail,
    title: "Technical Email",
    description: "Send detailed technical questions and receive comprehensive responses",
    contact: "technical@industrialmanufacturing.com",
    availability: "Response within 4 hours",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Real-time chat support for quick questions and guidance",
    contact: "Available on website",
    availability: "Mon-Fri, 9AM-5PM EST",
  },
]

const supportServices = [
  {
    icon: BookOpen,
    title: "Application Engineering",
    description: "Expert guidance on product selection and application optimization",
  },
  {
    icon: Users,
    title: "Training & Education",
    description: "Technical training sessions and educational resources for your team",
  },
  {
    icon: Clock,
    title: "Rapid Response",
    description: "Priority support for urgent technical issues and emergency situations",
  },
]

export function TechnicalSupport() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Support</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our experienced technical team is here to help you with product selection, application guidance, and
            troubleshooting. Get expert support when you need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <option.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{option.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{option.description}</p>
                <div className="space-y-2">
                  <div className="font-medium text-foreground">{option.contact}</div>
                  <div className="text-xs text-muted-foreground">{option.availability}</div>
                </div>
                <Button className="w-full">Contact Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportServices.map((service, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-primary-foreground/90 leading-relaxed mb-6 max-w-2xl mx-auto">
            For urgent technical support or emergency manufacturing needs, our rapid response team is available to
            provide immediate assistance and solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href="/contact">Contact Support Team</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Emergency Hotline: +1 (555) 911-HELP
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
