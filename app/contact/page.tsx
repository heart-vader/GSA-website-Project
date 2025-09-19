import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { SimpleContactForm } from "@/components/simple-contact-form"
import { ContactInfo } from "@/components/contact-info"

export const metadata = {
  title: "Contact Us | GS Agrotech - Get Quote for Premium Basmati Rice",
  description:
    "Contact GS Agrotech for premium basmati rice quotes and inquiries. Quick response guaranteed for all business inquiries.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ContactHero />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <SimpleContactForm />
          <ContactInfo />
        </div>
      </main>
      <Footer />
    </div>
  )
}
