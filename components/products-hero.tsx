import { Search } from "lucide-react"

export function ProductsHero() {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center text-primary-foreground space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
            Premium Quality
            <span className="text-white/80 block">Basmati Rice Varieties</span>
          </h1>
          <p className="text-xl leading-relaxed text-primary-foreground/90 max-w-3xl mx-auto">
            Discover our carefully selected range of premium basmati rice varieties. Each grain is sourced from the
            finest farms and processed to maintain exceptional quality and aroma.
          </p>

          <div className="max-w-xl mx-auto pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search rice varieties..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border-0 bg-background text-foreground focus:ring-2 focus:ring-secondary transition-all duration-300 focus:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
