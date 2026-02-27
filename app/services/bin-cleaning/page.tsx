import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Leaf, Zap, Sparkles } from "lucide-react"

export default function BinCleaningPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[10rem] blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/50 rounded-full px-5 py-2 mb-8 shadow-sm">
                <Leaf size={16} className="text-secondary" />
                <span className="text-sm font-bold text-secondary uppercase tracking-widest">
                  Sparkling & Odor-Free
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-foreground leading-[1.1]">
                Bin <span className="text-primary font-black">Cleaning</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl font-body">
                Whether it&apos;s garbage, recycling, or compost, we make it shine. Experience professional high-pressure
                cleaning with eco-friendly deodorization at your curb.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 h-16 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95">
                    Book Your Service
                  </Button>
                </Link>
                <Link href="/faq-pricing">
                  <Button size="lg" variant="outline" className="border-2 px-10 border-secondary text-secondary hover:bg-secondary/5 h-16 rounded-2xl font-bold text-lg transition-all">
                    See Pricing
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
                <img src="/service_bin_cleaning.png" alt="Bin Cleaning Service" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -mr-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -ml-48"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">Simple <span className="text-secondary">& Friendly</span> Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              A contact-free, hassle-free service designed for busy Newfoundland families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent hidden md:block"></div>

            {[
              {
                step: "1",
                title: "Easy Booking",
                description: "Select your plan online in seconds. No complex contracts or hidden fees.",
                image: "/service_booking_step.png",
                color: "bg-primary"
              },
              {
                step: "2",
                title: "Curbside Cleaning",
                description: "Our friendly team arrives after collection day to clean your bins right where they sit.",
                image: "/step_arrival.png",
                color: "bg-secondary"
              },
              {
                step: "3",
                title: "Sanitized & Fresh",
                description: "Bins are high-pressure washed and left smelling wonderful. Ready for another week!",
                image: "/service_bin_cleaning.png",
                color: "bg-accent"
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden mb-10 shadow-2xl border-8 border-white group-hover:scale-[1.02] transition-all duration-700 bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Step Number Badge */}
                  <div className={`absolute top-8 left-8 w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center font-black text-3xl text-white shadow-2xl rotation-[-10deg] group-hover:rotate-0 transition-transform duration-500`}>
                    {item.step}
                  </div>
                </div>

                <div className="px-4 text-center">
                  <h3 className="text-3xl font-black text-foreground mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg font-body">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">Why Smiling Bins?</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We believe cleaning should be easy, effective, and environmentally responsible.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button className="bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary/20 px-8 h-14 rounded-2xl font-bold">
                Learn About Our Eco-Commitment
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: Leaf, color: "text-primary", bg: "bg-primary/10", title: "Eco-Friendly Products", desc: "We use only biodegradable cleaning solutions that protect your pipes and the Newfoundland environment." },
              { icon: Zap, color: "text-secondary", bg: "bg-secondary/10", title: "Commercial Power", desc: "Our high-pressure washing systems remove 99.9% of bacteria, grime, and stubborn residues." },
              { icon: Check, color: "text-accent", bg: "bg-accent/10", title: "Odor Neutralization", desc: "We don't just mask smells—we eliminate them at the source with hospital-grade sanitizers." },
              { icon: Sparkles, color: "text-primary", bg: "bg-primary/10", title: "Local & Friendly", desc: "Proudly owned and operated in NL. Our team is dedicated to making your home life better." },
            ].map((benefit, i) => (
              <div key={i} className="flex gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-border transition-all group">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${benefit.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Service Plans</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="p-10 rounded-[3rem] bg-white border-2 border-primary/10 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem]"></div>
              <h3 className="text-3xl font-black text-primary mb-6">Residential</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Perfect for busy families. One-time or scheduled cleans at your curb.
              </p>
              <ul className="space-y-4 mb-10">
                {["Monthly or One-Time", "All bin types included", "Eco-safe products"].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-foreground">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    {li}
                  </li>
                ))}
              </ul>
              <Button className="w-full h-14 bg-primary rounded-2xl font-bold text-lg shadow-lg shadow-primary/20">Get Started</Button>
            </div>

            <div className="p-10 rounded-[3rem] bg-white border-2 border-secondary/10 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[5rem]"></div>
              <h3 className="text-3xl font-black text-secondary mb-6">Commercial</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Ideal for restaurants, apartments, and shopping centers.
              </p>
              <ul className="space-y-4 mb-10">
                {["Flexible volume scheduling", "Bulk discounts", "Professional equipment"].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-foreground">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-secondary" />
                    </div>
                    {li}
                  </li>
                ))}
              </ul>
              <Button className="w-full h-14 bg-secondary rounded-2xl font-bold text-lg shadow-lg shadow-secondary/20">Contact for Quote</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full -ml-32 -mb-32 blur-2xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready for <span className="text-accent underline decoration-sky-300">Fresh</span> Bins?</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto font-medium">
            Join the hundreds of happy Newfoundland families who enjoy a cleaner home life with Smiling Bins.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 px-12 h-16 rounded-[2rem] font-black text-xl shadow-2xl">
              Book Your Service Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
