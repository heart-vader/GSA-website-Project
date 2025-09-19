import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InfrastructureHero } from "@/components/infrastructure-hero"
import { FacilityOverview } from "@/components/facility-overview"
import { ManufacturingProcess } from "@/components/manufacturing-process"
import { EquipmentShowcase } from "@/components/equipment-showcase"
import { CapacityStats } from "@/components/capacity-stats"

export const metadata = {
  title: "Infrastructure | Industrial Manufacturing - State-of-the-Art Facilities",
  description:
    "Explore our advanced manufacturing facilities, cutting-edge equipment, and comprehensive production capabilities. 200,000+ sq ft of modern manufacturing space.",
}

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <InfrastructureHero />
        <FacilityOverview />
        <ManufacturingProcess />
        <EquipmentShowcase />
        <CapacityStats />
      </main>
      <Footer />
    </div>
  )
}
