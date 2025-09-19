import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { CompanyStory } from "@/components/company-story"
import { RiceExpertise } from "@/components/rice-expertise"

export const metadata = {
  title: "About Us | GS Agrotech - Premium Basmati Rice Suppliers",
  description:
    "Learn about GS Agrotech's commitment to delivering premium quality basmati rice. Discover our sourcing expertise, quality standards, and dedication to excellence.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AboutHero />
        <CompanyStory />
        <RiceExpertise />
      </main>
      <Footer />
    </div>
  )
}
