export function CompanyStory() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a vision to bring the finest basmati rice from the fertile fields of India to tables
              worldwide, GS Agrotech has built a reputation for uncompromising quality and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver premium quality basmati rice that exceeds customer expectations while maintaining sustainable
                farming practices and supporting local agricultural communities.
              </p>

              <h3 className="text-2xl font-semibold">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted name in premium basmati rice globally, known for consistent quality, reliability,
                and exceptional customer service.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Why Choose GS Agrotech</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Direct sourcing from premium rice growing regions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Rigorous quality control at every stage</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Consistent supply and reliable delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Competitive pricing for bulk orders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
