'use client';

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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Pricing & FAQ</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple pricing. No contracts. No hidden fees. We guarantee satisfaction with every clean!
          </p>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Plan</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the frequency that works best for your home. All plans include sanitization, deodorization, and eco-friendly products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Monthly",
                frequency: "Once per month",
                price: "$35",
                billing: "per cleaning (1 bin)",
                features: [
                  "12 cleanings per year",
                  "High-pressure wash",
                  "Sanitized & deodorized",
                  "Eco-friendly products",
                  'Flexible scheduling',
                  'Cancel anytime'
                ],
                highlight: false,
              },
              {
                name: "Bi-Weekly",
                frequency: "Every 2 weeks",
                price: "$29",
                billing: "per cleaning (1 bin)",
                features: [
                  "24 cleanings per year",
                  "High-pressure wash",
                  "Sanitized & deodorized",
                  "Eco-friendly products",
                  "Priority scheduling",
                  "Cancel anytime",
                ],
                highlight: true,
              },
              {
                name: "Quarterly",
                frequency: "Every 3 months",
                price: "$45",
                billing: "per cleaning (1 bin)",
                features: [
                  "4 cleanings per year",
                  "High-pressure wash",
                  "Sanitized & deodorized",
                  "Eco-friendly products",
                  "Flexible scheduling",
                  "Cancel anytime",
                ],
                highlight: false,
              },
              {
                name: "One-Time",
                frequency: "One cleaning",
                price: "$50",
                billing: "per cleaning (1 bin)",
                features: [
                  "Single service visit",
                  "High-pressure wash",
                  "Sanitized & deodorized",
                  "Eco-friendly products",
                  "Schedule at your convenience",
                  "No commitment",
                ],
                highlight: false,
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl transition-all duration-300 ${
                  plan.highlight
                    ? "ring-2 ring-primary scale-105 bg-white border border-primary/20 shadow-2xl"
                    : "border border-border bg-card hover:border-primary/30 hover:shadow-lg"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.frequency}</p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-1">{plan.price}</div>
                    <p className="text-xs text-muted-foreground">{plan.billing}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      const user = localStorage.getItem('user')
                      if (user) {
                        window.location.href = `/checkout?plan=${plan.name}`
                      } else {
                        window.location.href = '/signup'
                      }
                    }}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      plan.highlight
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                        : "border border-primary text-primary hover:bg-primary/5"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-accent/10 border border-accent/20 rounded-lg p-6">
            <p className="text-center text-muted-foreground">
              <strong>Additional Bins:</strong> First bin pricing applies. Each additional bin is <strong>$15 per cleaning</strong> for any plan.
            </p>
          </div>
        </div>
      </section>

      {/* Residential Pricing */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Service Pricing</h2>

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
                Do I need to be home for the cleaning?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                No, as long as your bins are curbside, we'll take care of the rest. You don't need to be home or present during the cleaning.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                How often should I clean my bins?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                Monthly cleaning is ideal to prevent odor and bacteria buildup. However, you can choose the frequency that works best for your household.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                Are your products safe for the environment?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                Yes — we use biodegradable cleaners and collect wastewater for safe disposal. Environmental responsibility is core to our mission.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                What areas do you serve?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                We proudly serve St. John's, Mount Pearl, Paradise, and surrounding communities. Contact us to confirm service availability for your location.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                Can you clean all types of bins?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                Yes! We clean garbage bins, recycling bins, and compost bins. Whether residential or commercial, we can handle them all.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                How long does the cleaning take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                Most residential bin cleanings take 15-30 minutes depending on the number of bins and their condition. We'll provide a timeline when you book.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                What's included in your cleaning service?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                All cleanings include high-pressure washing, sanitization, deodorization, and eco-safe wastewater disposal. Your bins will be left spotless and germ-free.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                Do you offer commercial bin cleaning?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                Yes! We serve restaurants, apartments, offices, and property managers with flexible scheduling and volume discounts. Contact us for a custom quote.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q9" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                What if I'm not satisfied with the service?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                We guarantee 100% satisfaction. If you're not happy with our work, we'll make it right. Your happiness is our priority.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q10" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground py-4">
                How do I book a cleaning?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                You can book online through our website or contact us directly by phone at (709) XXX-XXXX or email info@smilingbins.ca. We'll confirm your appointment and details.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  )
}
