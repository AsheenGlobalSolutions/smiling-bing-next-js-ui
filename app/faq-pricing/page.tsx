import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">FAQ & Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for residential services. Common questions answered.
          </p>
        </div>
      </section>

      {/* Residential Pricing */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Residential Pricing</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                service: "Garbage Bin Cleaning",
                price: "$25-$35",
                description: "Per bin, high-pressure wash with odor removal",
              },
              {
                service: "Residential Carpet Cleaning",
                price: "$150-$300",
                description: "Per room (average 200 sq ft)",
              },
              {
                service: "Pressure Washing - Driveway",
                price: "$200-$400",
                description: "Depending on size and condition",
              },
              {
                service: "Pressure Washing - House Exterior",
                price: "$400-$800",
                description: "Vinyl siding, brick, or stone",
              },
              {
                service: "Deck Cleaning",
                price: "$300-$600",
                description: "Per 500 sq ft",
              },
              {
                service: "Upholstery Cleaning",
                price: "Custom Quote",
                description: "Based on fabric type and soiling level",
              },
            ].map((item, index) => (
              <div key={index} className="border border-border rounded-lg p-6 bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.service}</h3>
                <p className="text-2xl font-bold text-accent mb-2">{item.price}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-8">
            <p className="text-muted-foreground mb-2">
              <strong>Commercial Carpet Cleaning:</strong> Custom quotes provided after site visit. Every commercial
              space is unique with different requirements.
            </p>
            <p className="text-muted-foreground">
              Prices shown are estimates. Actual pricing may vary based on property condition and specific requirements.
              Contact us for an exact quote.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="q1" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                How often should I have my carpets cleaned?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                For residential carpets, we recommend professional cleaning every 12-18 months for normal traffic, or
                more frequently if you have pets or children. This helps extend carpet life and maintain a healthy home
                environment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                Are your cleaning products safe for kids and pets?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                Yes! All our cleaning products are non-toxic, eco-friendly, and safe for families and pets. Your home is
                safe to use immediately after cleaning. We take environmental responsibility seriously.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                How long does carpet cleaning take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                Cleaning time depends on the number of rooms and carpet condition. On average, residential cleaning
                takes 2-4 hours. We'll provide an estimated timeline when you book. Drying typically takes 4-6 hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                Can you remove pet stains and odors?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                Absolutely. We specialize in pet stain and odor removal using specialized enzymatic treatments that
                eliminate both the stain and the odor at the source. If the damage is old or severe, we'll discuss
                realistic expectations upfront.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                How soon after cleaning can I walk on the carpet?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                You can walk on the carpet immediately after cleaning. However, we recommend waiting 4-6 hours for the
                carpet to fully dry before placing furniture back and resuming normal use. We'll provide drying
                recommendations when we finish.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                What's your cancellation policy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                We offer free cancellation or rescheduling up to 24 hours before your appointment. For cancellations
                less than 24 hours before, a cancellation fee may apply. Contact us immediately if you need to
                reschedule.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                Do you clean furniture cushions and upholstery?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                Yes! We offer professional upholstery cleaning for sofas, armchairs, mattresses, and more. Each piece is
                assessed for fabric type and soiling level. Contact us with photos for a custom quote.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                Can you clean power wash my house without damaging it?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                Yes. Our team is trained in proper pressure washing techniques and knows the safe PSI for different
                surfaces - vinyl siding, brick, stone, and wood. We use the appropriate equipment and technique for each
                material.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q9" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                What areas of Newfoundland do you service?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                We're based in St. John's and serve the Greater St. John's area. We also offer services across
                Newfoundland for larger commercial projects. Contact us to confirm service availability for your
                location.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q10" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                Do you offer seasonal discounts or package deals?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                Yes! We periodically offer seasonal promotions. Subscribe to our email list or call us directly to learn
                about current specials. We also offer package discounts when combining multiple services.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  )
}
