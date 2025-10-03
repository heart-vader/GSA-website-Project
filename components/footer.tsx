import Link from "next/link"
import { Phone, Mail, MapPin, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 flex items-center justify-center">
                <img
                  src="/gsa-logo-new.jpg"
                  alt="GS Agrotech Logo"
                  className="h-8 w-8 object-contain brightness-0 invert"
                />
              </div>
              <h3 className="text-lg font-bold">G S Agrotech</h3>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Leading supplier of premium basmati rice varieties with decades of experience in quality sourcing,
              processing, and distribution across Indian market.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Rice Varieties</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Dilli Haat Diamond
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Kashmiri Gate Premium
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Dilli Haat Gold
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Bulk Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>1730, Nayi Basti</p>
                  <p>Naya Bazar, Delhi 110006</p>
                  <p>India</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+91 9311112106</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+91 9999421399</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>gsagrotech@outlook.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 GS Agrotech. All rights reserved. </p>
        </div>
      </div>
    </footer>
  )
}
