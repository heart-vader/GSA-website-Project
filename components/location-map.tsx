export function LocationMap() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Visit Our Facility</h2>
          <p className="text-muted-foreground">
            Located in the heart of the manufacturing district with easy access to major transportation routes.
          </p>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 text-center">
          <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="h-8 w-8 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Interactive Map</h3>
              <p className="text-sm text-muted-foreground">123 Industrial Drive, Manufacturing City, MC 12345</p>
              <p className="text-xs text-muted-foreground">Click to view directions and nearby landmarks</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-2">Transportation</h4>
            <p className="text-sm text-muted-foreground">
              Easy access via Highway 95 and Interstate 40. Public transportation available.
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-2">Parking</h4>
            <p className="text-sm text-muted-foreground">
              Free visitor parking available. Designated spaces for commercial vehicles.
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-2">Accessibility</h4>
            <p className="text-sm text-muted-foreground">
              Fully accessible facility with wheelchair access and accommodations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
