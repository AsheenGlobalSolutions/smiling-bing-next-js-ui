import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Zap, Droplets } from "lucide-react"

export default function PressureWashingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Restore and Refresh Your Property</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Professional pressure washing for driveways, patios, house exteriors, and more. Transform your property's
            appearance.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Services We Offer</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Driveway Cleaning",
                description:
                  "Remove built-up dirt, algae, and stains from concrete and asphalt driveways. We'll make it look brand new.",
              },
              {
                title: "Sidewalk & Pathway Cleaning",
                description:
                  "Safe walkways start with clean surfaces. We remove slippery algae and moss for your family's safety.",
              },
              {
                title: "House Exterior Cleaning",
                description:
                  "Vinyl siding, brick, stone, or wood - we have the expertise to clean any exterior without damage.",
              },
              {
                title: "Deck & Patio Cleaning",
                description:
                  "Bring your outdoor spaces back to life. We safely clean wood, composite, and stone surfaces.",
              },
              {
                title: "Fence Cleaning",
                description:
                  "Restore the beauty of your fence. We specialize in wood, vinyl, and metal fence cleaning.",
              },
              {
                title: "Commercial Pressure Washing",
                description:
                  "From parking lots to storefronts, we provide commercial-grade pressure washing for businesses.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-6 bg-card hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Why Crystal Clean?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Commercial-Grade Equipment</h3>
              <p className="text-muted-foreground">
                We use professional-quality pressure washers that deliver superior cleaning power without damaging your
                property.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Safe for All Surfaces</h3>
              <p className="text-muted-foreground">
                From delicate vinyl siding to sturdy concrete, we know the right technique and pressure for every
                surface type.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Droplets className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Eco-Friendly Approach</h3>
              <p className="text-muted-foreground">
                We use biodegradable cleaning solutions and minimize water usage to protect the Newfoundland
                environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Property?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote on pressure washing services.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
              Request a Free Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
