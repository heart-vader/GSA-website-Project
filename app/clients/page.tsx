import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ClientsHero } from "@/components/clients-hero"
import { ClientLogos } from "@/components/client-logos"
import { Testimonials } from "@/components/testimonials"
import { CaseStudies } from "@/components/case-studies"

export const metadata = {
  title: "Our Clients | Industrial Manufacturing - Trusted by Industry Leaders",
  description:
    "Discover why leading agricultural companies worldwide trust Industrial Manufacturing for their precision equipment needs. Read testimonials and case studies.",
}

export default function ClientsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ClientsHero />
        <ClientLogos />
        <Testimonials />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  )
}
