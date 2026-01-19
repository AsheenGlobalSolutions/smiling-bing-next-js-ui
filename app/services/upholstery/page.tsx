import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles, Zap, FileText } from "lucide-react"
import { UpholsteryAssessmentForm } from "@/components/forms/upholstery-assessment-form"

export default function UpholsteryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Upholstery Cleaning You Can Trust
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Specialized fabric cleaning for sofas, mattresses, armchairs, and dining chairs. Restore your furniture to
            like-new condition.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
              Request a Free Assessment
            </Button>
          </Link>
        </div>
      </section>

      {/* What We Clean */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Items We Clean</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="border border-border rounded-lg p-8 bg-card">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Furniture</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Sofas and couches</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Armchairs and recliners</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Dining chairs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Ottomans and benches</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Sectionals</span>
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-8 bg-card">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Bedding</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Mattresses</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Box springs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Headboards</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Pillows</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Upholstered bed frames</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Professional Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Assessment",
                description:
                  "We examine your furniture to identify fabric type, soiling level, and any special care needs.",
              },
              {
                step: "2",
                title: "Cleaning",
                description:
                  "Using specialized techniques and eco-friendly products, we deep clean your upholstery without damage.",
              },
              {
                step: "3",
                title: "Treatment",
                description:
                  "Optional protective treatments help guard against future stains and extend furniture life.",
              },
              {
                step: "4",
                title: "Inspection",
                description: "We inspect the results and ensure you're completely satisfied with our work.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Why Crystal Clean?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Specialized Expertise</h3>
              <p className="text-muted-foreground">
                We're trained in cleaning different fabric types - from delicate silks to durable microfiber - with care
                and precision.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Eco-Friendly Solutions</h3>
              <p className="text-muted-foreground">
                Our non-toxic, biodegradable cleaning products are safe for your family, pets, and the environment.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Transparent Pricing</h3>
              <p className="text-muted-foreground">
                Pricing depends on fabric type and soiling level. We provide upfront quotes with no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Upload Form Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Get a Quick Assessment</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-muted-foreground mb-6">
              Upload photos of your upholstery and we'll provide a preliminary assessment and quote estimate.
            </p>
            <UpholsteryAssessmentForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Refresh Your Furniture?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free assessment and personalized quote for your upholstery cleaning needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
              Get Your Free Assessment
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
