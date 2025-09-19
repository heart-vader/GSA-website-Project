export function ClientsHero() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto px-4">
        <div className="text-center text-primary-foreground space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
            Trusted by
            <span className="text-secondary block">Industry Leaders</span>
          </h1>
          <p className="text-xl leading-relaxed text-primary-foreground/90 max-w-3xl mx-auto">
            For over 25 years, we've been the preferred manufacturing partner for leading agricultural companies
            worldwide. Our commitment to quality and innovation has earned the trust of industry leaders across 50+
            countries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-primary-foreground/80">Global Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">50+</div>
              <div className="text-primary-foreground/80">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">98%</div>
              <div className="text-primary-foreground/80">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
