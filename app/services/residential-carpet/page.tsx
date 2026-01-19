import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Heart, Zap } from "lucide-react"
import { ResidentialBookingForm } from "@/components/forms/residential-booking-form"

export default function ResidentialCarpetPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Residential Carpet Cleaning
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Deep cleaning for homes with eco-friendly products. Safe for your family, kids, and pets.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
              Book Your Carpet Cleaning
            </Button>
          </Link>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Residential Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Steam Extraction",
                description:
                  "Our deep steam cleaning penetrates carpet fibers to remove dirt, dust, and allergens. Leaves carpets fresh and healthy.",
              },
              {
                title: "Pet Stain & Odor Removal",
                description:
                  "Specialized treatment to eliminate pet accidents and odors permanently. Safe for your pets and family.",
              },
              {
                title: "Move-In/Move-Out Cleaning",
                description:
                  "Complete carpet cleaning for new homes or before you move out. Ensures deposits aren't lost to dirty carpets.",
              },
              {
                title: "Spot & Stain Treatment",
                description:
                  "From wine spills to stubborn stains, we tackle tough marks with specialized treatments that work.",
              },
              {
                title: "Allergen Removal",
                description:
                  "Deep cleaning that removes dust mites, pet dander, and allergens. Breathe easier in your home.",
              },
              {
                title: "Carpet Refreshing",
                description:
                  "Regular maintenance cleaning to keep your carpets looking and feeling their best. Extends carpet life.",
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

      {/* Trust Factors */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Why Trust Crystal Clean?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Safe for Kids & Pets</h3>
              <p className="text-muted-foreground">
                All our cleaning solutions are non-toxic and eco-friendly. Your family can enjoy your clean carpets
                immediately after service.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Reliable On-Time Service</h3>
              <p className="text-muted-foreground">
                We respect your time. Our technicians arrive on schedule, work efficiently, and complete jobs without
                cutting corners.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Professional Equipment</h3>
              <p className="text-muted-foreground">
                We use commercial-grade carpet cleaning equipment that delivers superior results while being gentle on
                your carpets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Book Your Carpet Cleaning</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <ResidentialBookingForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Clean Carpets, Happy Home</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule your residential carpet cleaning today and enjoy fresh, clean carpets with no guilt.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
              Schedule Your Cleaning
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
