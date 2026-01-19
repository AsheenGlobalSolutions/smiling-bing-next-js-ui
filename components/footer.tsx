import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/20 backdrop-blur rounded-lg flex items-center justify-center text-primary font-bold text-base">
                SB
              </div>
              <h3 className="font-bold text-lg">Smiling Bins</h3>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Eco-friendly bin cleaning and professional cleaning services for Newfoundland homes and businesses. Serving St. John's, Mount Pearl, Paradise, and surrounding areas.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-5 text-base">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/bin-cleaning" className="opacity-90 hover:opacity-100 transition-opacity">
                  Bin Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/pressure-washing" className="opacity-90 hover:opacity-100 transition-opacity">
                  Pressure Washing
                </Link>
              </li>
              <li>
                <Link href="/services/residential-carpet" className="opacity-90 hover:opacity-100 transition-opacity">
                  Residential Carpet
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-carpet" className="opacity-90 hover:opacity-100 transition-opacity">
                  Commercial Carpet
                </Link>
              </li>
              <li>
                <Link href="/services/upholstery" className="opacity-90 hover:opacity-100 transition-opacity">
                  Upholstery Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-5 text-base">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq-pricing" className="opacity-90 hover:opacity-100 transition-opacity">
                  FAQ & Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-5 text-base">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+17095550123" className="opacity-90 hover:opacity-100 transition-opacity">
                  (709) XXX-XXXX
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:info@smilingbins.ca" className="opacity-90 hover:opacity-100 transition-opacity">
                  info@smilingbins.ca
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Newfoundland (Service Area)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2025 Smiling Bins. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
