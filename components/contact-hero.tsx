import { Phone, Mail, MessageSquare } from "lucide-react"

export function ContactHero() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center text-primary-foreground space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
            Get In Touch
            <span className="text-white/80 block">For Premium Rice Quotes</span>
          </h1>
          <p className="text-xl leading-relaxed text-primary-foreground/90 max-w-3xl mx-auto">
            Ready to source premium basmati rice? Our experienced team provides competitive quotes, quality assurance,
            and reliable delivery for all your rice requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="h-8 w-8 text-white mx-auto mb-3" />
              <div className="text-lg font-semibold">Call Us</div>
              <div className="text-primary-foreground/80">+91 93111 12106</div>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 text-white mx-auto mb-3" />
              <div className="text-lg font-semibold">Email Us</div>
              <div className="text-primary-foreground/80">gsagrotech@outlook.com</div>
            </div>
            <div className="text-center">
              <MessageSquare className="h-8 w-8 text-white mx-auto mb-3" />
              <div className="text-lg font-semibold">Quick Response</div>
              <div className="text-primary-foreground/80">Within 24 hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
