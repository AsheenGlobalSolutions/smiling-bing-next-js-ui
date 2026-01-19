import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Leaf, Zap } from "lucide-react"

export default function BinCleaningPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Garbage Bin Cleaning</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Whether it's garbage, recycling, or compost, we make it shine. Professional high-pressure cleaning with
            complete deodorization at your curb.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
                Book Your Bin Cleaning Today
              </Button>
            </Link>
            <Link href="/faq-pricing">
              <Button size="lg" variant="outline" className="border-2 px-8 bg-transparent">
                See Pricing & Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">You Book Online</h3>
              <p className="text-muted-foreground">
                Select your plan and schedule via phone or computer. Choose your preferred date and time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">We Arrive After Garbage Day</h3>
              <p className="text-muted-foreground">
                Our truck arrives curbside after your bins are emptied to clean them while they're ready.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Your Bins Shine Again</h3>
              <p className="text-muted-foreground">
                Bins are pressure washed, deodorized, and left germ-free. Ready for your next collection!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Why Our Bin Cleaning Service?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Leaf className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Eco-Friendly Products</h3>
                <p className="text-muted-foreground">
                  We use only environmentally safe, biodegradable cleaning solutions that are gentle on your bins and
                  the Newfoundland environment.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">High-Pressure Wash</h3>
                <p className="text-muted-foreground">
                  Our commercial-grade pressure washing removes all dirt, grime, and bacteria, leaving your bins
                  hygienically clean.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Check className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Complete Odor Removal</h3>
                <p className="text-muted-foreground">
                  Say goodbye to unpleasant smells. Our specialized treatment eliminates odors at the source, keeping
                  your area fresh.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Check className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Residential & Commercial</h3>
                <p className="text-muted-foreground">
                  Whether you need a single bin cleaned or multiple commercial units, we have the capacity and expertise
                  to serve you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Service Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-border/40 shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-4">Residential Service</h3>
              <p className="text-muted-foreground mb-6">
                One-time or scheduled options. High-pressure wash, deodorized, and left spotless at your curb.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> Monthly or one-time cleaning
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> All bin types (garbage, recycling, compost)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> Eco-friendly biodegradable products
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-border/40 shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-4">Commercial Service</h3>
              <p className="text-muted-foreground mb-6">
                Ideal for restaurants, apartments, and offices. Flexible scheduling and volume discounts.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> Flexible scheduling options
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> Volume discounts available
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> Professional-grade equipment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Fresh, Clean Bins?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule your bin cleaning today and experience the Smiling Bins difference.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
              Book Your Service Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
