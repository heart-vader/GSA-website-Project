interface ProductCategoryHeroProps {
  title: string
  description: string
  productCount: string
}

export function ProductCategoryHero({ title, description, productCount }: ProductCategoryHeroProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
          <div className="text-secondary font-medium">{productCount}</div>
        </div>
      </div>
    </section>
  )
}
