import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { QualityHero } from "@/components/quality-hero"
import { QualityManagement } from "@/components/quality-management"
import { TestingCapabilities } from "@/components/testing-capabilities"
import { QualityGuarantee } from "@/components/quality-guarantee"

export const metadata = {
  title: "Quality Assurance | Industrial Manufacturing - ISO Certified Excellence",
  description:
    "Discover our comprehensive quality management system, advanced testing capabilities, and commitment to delivering products that exceed industry standards.",
}

export default function QualityPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <QualityHero />
        <QualityManagement />
        <TestingCapabilities />
        <QualityGuarantee />
      </main>
      <Footer />
    </div>
  )
}
