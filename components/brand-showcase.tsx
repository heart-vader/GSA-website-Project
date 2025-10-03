export function BrandShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200/20 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-red-200/20 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-yellow-300/30 rounded-full animate-bounce delay-500" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-secondary bg-clip-text text-transparent">
            Our Premium Brands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by customers nationwide, our brands represent quality, tradition, and excellence in basmati rice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* DILLI HAAT Brand */}
          <div className="text-center group animate-in fade-in slide-in-from-left duration-1000 delay-300">
            <div className="bg-gradient-to-br from-white via-yellow-50 to-orange-50 rounded-2xl p-10 shadow-xl border-2 border-yellow-200/50 mb-8 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-4 group-hover:scale-105 relative overflow-hidden">
              <div
                className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-spin"
                style={{ animationDuration: "8s" }}
              />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-br from-red-400 to-yellow-500 rounded-full opacity-30 animate-pulse" />

              <img
                src="/dilli-haat-diamond.jpg"
                alt="DILLI HAAT Brand"
                className="w-40 h-48 object-contain mx-auto transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 filter drop-shadow-2xl"
              />

              {/* Premium badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                Heritage Brand
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-6 text-foreground group-hover:text-secondary transition-colors duration-300">
              DILLI HAAT
            </h3>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Celebrating the rich heritage of Delhi with premium basmati rice varieties. Available in Platinum, Diamond, Gold, Mogra 
              and Silver grades.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer">
                Platinum
              </span>
              <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer">
                Diamond
              </span>
              <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer">
                Gold
              </span>
              <span className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer">
                Silver
              </span>
            </div>
          </div>

          {/* KASHMIRI GATE Brand */}
          <div className="text-center group animate-in fade-in slide-in-from-right duration-1000 delay-500">
            <div className="bg-gradient-to-br from-white via-blue-50 to-green-50 rounded-2xl p-10 shadow-xl border-2 border-blue-200/50 mb-8 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-4 group-hover:scale-105 relative overflow-hidden">
              <div
                className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-blue-400 to-green-500 rounded-full opacity-20 animate-spin"
                style={{ animationDuration: "10s" }}
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-30 animate-pulse delay-500" />

              <img
                src="/kashmiri-gate-premium.jpg"
                alt="KASHMIRI GATE Brand"
                className="w-40 h-48 object-contain mx-auto transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 filter drop-shadow-2xl"
              />

              {/* Premium badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce delay-300">
                Authentic Quality
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-6 text-foreground group-hover:text-secondary transition-colors duration-300">
              KASHMIRI GATE
            </h3>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Authentic 1121 Basmati quality with traditional processing methods. Available in Premium, Classic, Deluxe 
              and Royale varieties.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer">
                Premium
              </span>
              <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer">
                Classic
              </span>
              <span className="bg-gradient-to-r from-red-100 to-red-200 text-red-800 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer">
                Deluxe
              </span>
              <span className="bg-gradient-to-r from-red-100 to-red-200 text-red-800 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer">
                Royale
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
