import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    primary: "+919311112106",
    secondary: "WhatsApp: +919311112106",
    description: "Direct line to our sales team",
  },
  {
    icon: Mail,
    title: "Email",
    primary: "gsagrotech@outlook.com",
    secondary: "quotes@gsagrotech.com",
    description: "Get detailed quotes within 24 hours",
  },
  {
    icon: MapPin,
    title: "Address",
    primary: "1730, Nayi Basti, Naya Bazar, Delhi 110006, India",
    secondary: "Rice Processing Hub",
    description: "Located in premium rice growing region",
  },
]

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM IST" },
  { day: "Saturday", hours: "9:00 AM - 2:00 PM IST" },
  { day: "Sunday", hours: "Closed" },
]

export function ContactInfo() {
  return (
    <section className="py-12 px-4 lg:px-8 bg-muted/30">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
          <p className="text-muted-foreground">Multiple ways to reach our team for rice inquiries and quotes.</p>
        </div>

        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <method.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{method.title}</h3>
                    <p className="text-sm text-foreground">{method.primary}</p>
                    <p className="text-sm text-muted-foreground">{method.secondary}</p>
                    <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Business Hours</h3>
            </div>
            <div className="space-y-2">
              {businessHours.map((schedule, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-foreground">{schedule.day}</span>
                  <span className="text-muted-foreground">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold mb-2">Bulk Orders</h3>
            <p className="text-sm text-primary-foreground/90 mb-3">Special pricing for bulk and export orders</p>
            <Button
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Get Bulk Quote
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
