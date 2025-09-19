import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageSquare, MapPin } from "lucide-react"
import Link from "next/link"

export function QuickContact() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Partner with Us?</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Join hundreds of businesses that trust GS Agrotech for their rice supply needs. Get started with a custom
            quote today and experience the difference quality makes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="border-0 bg-primary-foreground/10 backdrop-blur transition-all duration-300 hover:bg-primary-foreground/20 hover:-translate-y-2 hover:shadow-xl group animate-in fade-in slide-in-from-bottom-4 duration-700">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
                <MapPin className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground">Visit Us</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                1730, Nayi Basti
                <br />
                Naya Bazar, Delhi 110006
                <br />
                India
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-primary-foreground/10 backdrop-blur transition-all duration-300 hover:bg-primary-foreground/20 hover:-translate-y-2 hover:shadow-xl group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
                <Phone className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground">Call Us</h3>
              <p className="text-primary-foreground/80 text-sm">Speak directly with our rice specialists</p>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent transition-all duration-300 w-full"
                >
                  +91 9311112106
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent transition-all duration-300 w-full"
                >
                  +91 9470602877
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent transition-all duration-300 w-full"
                >
                  +91 9999421399
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-primary-foreground/10 backdrop-blur transition-all duration-300 hover:bg-primary-foreground/20 hover:-translate-y-2 hover:shadow-xl group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
                <Mail className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground">Email Us</h3>
              <p className="text-primary-foreground/80 text-sm">Get detailed product information and quotes</p>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent transition-all duration-300"
              >
                <Link href="mailto:info@gsagro.co.in">Send Email</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 bg-primary-foreground/10 backdrop-blur transition-all duration-300 hover:bg-primary-foreground/20 hover:-translate-y-2 hover:shadow-xl group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
                <MessageSquare className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground">Get Quote</h3>
              <p className="text-primary-foreground/80 text-sm">Request a custom quote for bulk orders</p>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent transition-all duration-300"
              >
                <Link href="/contact">Request Quote</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
