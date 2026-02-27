'use client';

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-28 md:py-40 overflow-hidden bg-white text-center">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 rounded-l-[10rem] blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl text-center"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 tracking-tight">Simple <span className="text-primary">Pricing</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
            No contracts. No hidden fees. Just sparkling clean results and
            <span className="text-secondary font-bold"> guaranteed satisfaction</span> with every visit.
          </p>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">Choose Your <span className="text-secondary">Plan</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              Eco-friendly sanitization and deodorization included in every plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Monthly", freq: "Once per month", price: "$35", desc: "12 cleanings per year", highlight: false },
              { name: "Bi-Weekly", freq: "Every 2 weeks", price: "$29", desc: "24 cleanings per year", highlight: true },
              { name: "Quarterly", freq: "Every 3 months", price: "$45", desc: "4 cleanings per year", highlight: false },
              { name: "One-Time", freq: "Single clean", price: "$50", desc: "Pay as you go", highlight: false },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`relative p-10 rounded-[3rem] transition-all duration-500 flex flex-col items-center text-center ${plan.highlight
                  ? "bg-primary text-primary-foreground shadow-2xl scale-105 z-10"
                  : "bg-white border-2 border-transparent hover:border-primary/20 hover:shadow-xl text-foreground"
                  }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-lg">
                    Best Value
                  </div>
                )}
                <h3 className="text-3xl font-black mb-2 leading-none uppercase tracking-tighter">{plan.name}</h3>
                <p className={`text-sm mb-6 font-bold uppercase tracking-widest ${plan.highlight ? "text-white/80" : "text-primary"}`}>{plan.freq}</p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className={`text-xs font-bold uppercase tracking-widest ${plan.highlight ? "text-white/70" : "text-muted-foreground"}`}>/bin</span>
                </div>

                <ul className="space-y-4 mb-10 text-left w-full">
                  {["High-pressure wash", "Sanitized & deodorized", "Eco-friendly products", "Flexible scheduling"].map((feat, fidx) => (
                    <li key={fidx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${plan.highlight ? "bg-accent" : "bg-primary"}`}></div>
                      <span className={`text-sm font-medium ${plan.highlight ? "text-white/90" : "text-muted-foreground"}`}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button className={`mt-auto w-full py-5 rounded-[2rem] font-black text-lg transition-all active:scale-95 ${plan.highlight
                  ? "bg-white text-primary hover:bg-slate-100 shadow-xl"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg"
                  }`}>
                  Select
                </button>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 bg-white rounded-[3rem] border-2 border-primary/10 text-center shadow-sm">
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              <strong>Additional Bins?</strong> Pricing shown applies to the first bin. Each additional bin is just
              <span className="text-primary font-black mx-2">$15 per cleaning</span> for any plan.
            </p>
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">Service <span className="text-primary">Menu</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">Transparent pricing for every corner of your home.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { service: "Garbage Bin Cleaning", price: "$25-$35", desc: "Per bin, sanitization & deodorization" },
              { service: "Residential Carpet", price: "$150-$300", desc: "Per room (average 200 sq ft)" },
              { service: "Pressure Wash - Drive", price: "$200-$400", desc: "Based on size and condition" },
              { service: "House Exterior", price: "$400-$800", desc: "Vinyl, brick, or stone surfaces" },
              { service: "Deck Cleaning", price: "$300-$600", desc: "Per 500 sq ft area" },
              { service: "Upholstery", price: "Custom Quote", desc: "Fabric & soiling level specific" },
            ].map((item, index) => (
              <div key={index} className="p-10 bg-slate-50 rounded-[3rem] border-2 border-transparent hover:border-primary/20 transition-all hover:shadow-xl group">
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{item.service}</h3>
                <p className="text-4xl font-black text-secondary mb-4 leading-none">{item.price}</p>
                <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-10 bg-primary/5 rounded-[3rem] border-2 border-primary/10 max-w-4xl mx-auto font-body text-left">
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Commercial Cleaning?</strong> Contact us for custom quotes after a site visit.
              Our team will assess your unique requirements.
            </p>
            <p className="text-sm text-muted-foreground italic">
              *Prices are estimates. Actual pricing varies based on individual property needs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">Expert <span className="text-secondary">Answers</span></h2>
            <p className="text-xl text-muted-foreground font-body">Everything you need to know about our services.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            {[
              { q: "Do I need to be home for the cleaning?", a: "No! Just leave your bins curbside and we'll handle the rest." },
              { q: "How often should I clean my bins?", a: "Monthly is ideal to prevent bacteria and odor buildup." },
              { q: "Are your products eco-friendly?", a: "Absolutely. We use biodegradable cleaners and collect all wastewater." },
              { q: "What areas do you serve?", a: "St. John's, Mount Pearl, Paradise, and surrounding communities." },
              { q: "Can you clean commercial bins?", a: "Yes, we serve restaurants, apartments, and businesses of all sizes." }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`q${idx}`} className="border-none">
                <AccordionTrigger className="text-xl md:text-2xl font-bold text-foreground py-8 px-10 bg-white rounded-[2rem] hover:no-underline hover:text-primary transition-all shadow-sm">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground font-body leading-relaxed px-10 pt-6 pb-10">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  )
}
