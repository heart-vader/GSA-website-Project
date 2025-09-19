import { FileText, Download, Search } from "lucide-react"

export function ResourcesHero() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto px-4">
        <div className="text-center text-primary-foreground space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
            Resources &<span className="text-secondary block">Downloads</span>
          </h1>
          <p className="text-xl leading-relaxed text-primary-foreground/90 max-w-3xl mx-auto">
            Access comprehensive technical documentation, product catalogs, CAD drawings, and specifications. Everything
            you need to make informed decisions about our manufacturing solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto">
            <div className="text-center">
              <FileText className="h-8 w-8 text-secondary mx-auto mb-3" />
              <div className="text-lg font-semibold">Product Catalogs</div>
              <div className="text-primary-foreground/80">Comprehensive product information</div>
            </div>
            <div className="text-center">
              <Download className="h-8 w-8 text-secondary mx-auto mb-3" />
              <div className="text-lg font-semibold">Technical Specs</div>
              <div className="text-primary-foreground/80">Detailed specifications & drawings</div>
            </div>
            <div className="text-center">
              <Search className="h-8 w-8 text-secondary mx-auto mb-3" />
              <div className="text-lg font-semibold">Easy Search</div>
              <div className="text-primary-foreground/80">Find resources quickly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
