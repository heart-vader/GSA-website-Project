export function ProductSpecs() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality Specifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our rice meets international quality standards with rigorous testing and quality control processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">99%</span>
            </div>
            <h3 className="font-semibold mb-2">Purity</h3>
            <p className="text-sm text-muted-foreground">Minimum 99% purity guaranteed</p>
          </div>

          <div className="text-center">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">14%</span>
            </div>
            <h3 className="font-semibold mb-2">Moisture</h3>
            <p className="text-sm text-muted-foreground">Maximum 14% moisture content</p>
          </div>

          <div className="text-center">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">6.8</span>
            </div>
            <h3 className="font-semibold mb-2">Length</h3>
            <p className="text-sm text-muted-foreground">Minimum 6.8mm grain length</p>
          </div>

          <div className="text-center">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2%</span>
            </div>
            <h3 className="font-semibold mb-2">Broken</h3>
            <p className="text-sm text-muted-foreground">Maximum 2% broken grains</p>
          </div>
        </div>
      </div>
    </section>
  )
}
