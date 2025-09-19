import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { QuickContact } from "@/components/quick-contact"
import { BrandShowcase } from "@/components/brand-showcase"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <BrandShowcase />
        <WhyChooseUs />
        <QuickContact />
      </main>
      <Footer />
    </div>
  )
}
