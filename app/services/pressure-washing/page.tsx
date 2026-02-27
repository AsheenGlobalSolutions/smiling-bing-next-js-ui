import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Zap, Droplets, Leaf, Check, Sparkles } from "lucide-react"

export default function PressureWashingPage() {
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
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2 mb-8 shadow-sm">
                <Droplets size={16} className="text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-widest">
                  Powerful & Safe Exterior Cleaning
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-foreground leading-[1.1]">
                Pressure <span className="text-secondary">Washing</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl font-body">
                Restore and refresh your property. Professional cleaning for driveways, patios, and exteriors using
                <span className="text-primary font-bold"> eco-friendly</span> methods that deliver sparkling results.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 h-16 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95">
                    Get a Free Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
                <img src="/service_pressure_washing.png" alt="Pressure Washing Service" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">Expert <span className="text-secondary">Exterior</span> Care</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              From driveways to full house exteriors, we restore your property&apos;s curb appeal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Driveway Cleaning", desc: "Remove built-up dirt, algae, and stains. We'll make it look brand new.", image: "/service_pressure_washing.png" },
              { title: "House Exteriors", desc: "Vinyl siding, brick, stone, or wood - we clean any exterior without damage.", image: "/about_story.png" },
              { title: "Decks & Patios", desc: "Bring your outdoor spaces back to life. Safely clean wood and stone.", image: "/service_carpet_residential.png" },
              { title: "Commercial Jobs", desc: "Parking lots to storefronts - commercial-grade cleaning for businesses.", image: "/prop_industrial.png" },
              { title: "Sidewalks", desc: "Remove slippery algae and moss to ensure safe walkways for everyone.", image: "/step_arrival.png" },
              { title: "Fences", desc: "Restore the beauty of your wood, vinyl, or metal fence with expert care.", image: "/service_upholstery.png" },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-[3rem] overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-10 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-body">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center text-foreground mb-20">The <span className="text-primary">Smiling</span> Advantage</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Zap, color: "text-primary", title: "Pro Equipment", desc: "High-grade pressure washers that deliver power without damage." },
              { icon: Shield, color: "text-secondary", title: "Surface Safe", desc: "Expert techniques for every surface, from vinyl to concrete." },
              { icon: Leaf, color: "text-accent", title: "Eco-Friendly", desc: "Biodegradable solutions that protect our local environment." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-10 bg-slate-50 rounded-[3rem] border-2 border-transparent hover:border-primary/20 transition-all shadow-sm">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-xl">
                  <item.icon className={`h-10 w-10 ${item.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-body">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Transform Your <span className="text-secondary underline decoration-sky-300">Property</span></h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto font-medium">
            Contact us today for a free quote on our pressure washing services. Restore yours and feel the difference.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 px-12 h-16 rounded-[2rem] font-black text-xl shadow-2xl">
              Get Your Free Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
