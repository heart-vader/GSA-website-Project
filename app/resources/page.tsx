import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ResourcesHero } from "@/components/resources-hero"
import { DownloadCenter } from "@/components/download-center"
import { TechnicalSupport } from "@/components/technical-support"

export const metadata = {
  title: "Resources & Downloads | Industrial Manufacturing - Catalogs & Technical Documents",
  description:
    "Access product catalogs, technical specifications, CAD drawings, and other resources. Download brochures, spec sheets, and documentation.",
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ResourcesHero />
        <DownloadCenter />
        <TechnicalSupport />
      </main>
      <Footer />
    </div>
  )
}
