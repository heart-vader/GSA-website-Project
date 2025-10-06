export function ProductSpecs() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">G S Agrotech - Company's Mission</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering businesses with premium rice solutions that drive success through our comprehensive business approach and premium quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-card p-6 rounded-lg shadow-lg">
            <div className="bg-green-600 text-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-sm font-bold">✓</span>
            </div>
            <h3 className="font-semibold mb-2">Quality First</h3>
            <p className="text-sm text-muted-foreground">
              We maintain the highest quality standards through rigorous testing, careful sourcing, and continuous
              improvement of our processes. Your success depends on our quality.
            </p>
          </div>

          <div className="text-center bg-card p-6 rounded-lg shadow-lg">
            <div className="bg-green-600 text-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-sm font-bold">$</span>
            </div>
            <h3 className="font-semibold mb-2">Partnership Approach</h3>
            <p className="text-sm text-muted-foreground">
              We don't just supply rice - we build lasting partnerships. Our team works closely with each client to
              understand their unique needs and provide tailored solutions.
            </p>
          </div>

          <div className="text-center bg-card p-6 rounded-lg shadow-lg">
            <div className="bg-green-600 text-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-sm font-bold">🌱</span>
            </div>
            <h3 className="font-semibold mb-2">Sustainability</h3>
            <p className="text-sm text-muted-foreground">
              We are committed to sustainable practices that protect our environment and support farming communities,
              ensuring a better future for generations to come.
            </p>
          </div>

          <div className="text-center bg-card p-6 rounded-lg shadow-lg">
            <div className="bg-green-600 text-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-sm font-bold">⚡</span>
            </div>
            <h3 className="font-semibold mb-2">Innovation</h3>
            <p className="text-sm text-muted-foreground">
              We continuously invest in new technologies and processes to improve our products and services, staying
              ahead of industry trends and customer needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
