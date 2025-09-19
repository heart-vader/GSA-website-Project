import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, MessageSquare, Phone } from "lucide-react"
import Link from "next/link"

export function ProductCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Finding the Right Product?</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Our expert team is here to help you find the perfect solution for your agricultural needs. Get
              personalized recommendations and technical support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 bg-primary-foreground/10 backdrop-blur">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto">
                  <FileText className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground">Download Catalogs</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Access detailed product specifications and technical drawings
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Link href="/resources">Download Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-primary-foreground/10 backdrop-blur">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto">
                  <MessageSquare className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground">Custom Quote</h3>
                <p className="text-primary-foreground/80 text-sm">Get pricing for custom solutions and bulk orders</p>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Link href="/contact">Request Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-primary-foreground/10 backdrop-blur">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto">
                  <Phone className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground">Expert Support</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Speak with our technical experts for personalized assistance
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  +1 (555) 123-4567
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
