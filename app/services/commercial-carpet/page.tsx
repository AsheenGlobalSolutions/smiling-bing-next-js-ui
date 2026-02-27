import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { MapPin, Phone, Mail, ArrowRight, Sparkles, Check, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CommercialCarpetPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 rounded-l-[10rem] blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2 mb-8 shadow-sm">
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-widest">
                  Professional & Reliable
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-foreground leading-[1.1]">
                Commercial <span className="text-secondary">Carpet</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl font-body">
                Heavy-duty cleaning for offices, retail, clinics, and more.
                Newfoundland&apos;s business partner for a <span className="text-primary font-bold">cleaner, healthier</span> professional environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="tel:+17095550123">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 h-16 rounded-2xl font-bold text-lg shadow-xl shadow-secondary/20 transition-all hover:-translate-y-1 active:scale-95">
                    Get a Custom Quote
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/10 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
                <img src="/service_carpet_commercial.png" alt="Commercial Carpet Cleaning" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties We Serve */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">Properties We <span className="text-primary">Serve</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              Specialized cleaning solutions for every business environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { image: "/prop_office.png", title: "Office Buildings", desc: "Maintain a pristine workplace for your team." },
              { image: "/prop_retail.png", title: "Retail Spaces", desc: "First-class presentation for your customers." },
              { image: "/prop_clinic.png", title: "Medical Clinics", desc: "Hygienic, specialized cleaning for healthcare." },
              { image: "/prop_school.png", title: "Schools", desc: "Safe, clean environments for students." },
              { image: "/prop_hotel.png", title: "Hotels", desc: "Guest-ready maintenance for rooms & lobbies." },
              { image: "/prop_industrial.png", title: "Industrial", desc: "Heavy-duty solutions for tough environments." },
            ].map((prop, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-[3rem] overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-10 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{prop.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-body">{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Visit Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl opacity-50"></div>
              <img src="/hero_smiling_bins.png" className="relative rounded-[3rem] shadow-2xl border-8 border-white group-hover:scale-[1.03] transition-transform duration-700" alt="Process" />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 leading-tight">Every Space is <span className="text-secondary underline decoration-primary/30">Unique</span></h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-body">
                Commercial carpet cleaning isn&apos;t one-size-fits-all. We tailor our approach based on your specific needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                {[
                  { title: "Carpet Type", desc: "Material-specific care." },
                  { title: "Foot Traffic", desc: "Focused high-use areas." },
                  { title: "Square Footage", desc: "Optimized resource use." },
                  { title: "Business Hours", desc: "Schedule-aware service." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-border/50 shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Sparkles className="text-accent" /> Why a Site Visit?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A site visit allows us to provide an accurate quote and a customized cleaning plan
                  that delivers exactly what your property needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">Our <span className="text-primary">Pro</span> Approach</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consult", desc: "Discuss your needs with our team." },
              { step: "2", title: "Assess", desc: "We visit your property for a deep assessment." },
              { step: "3", title: "Custom Plan", desc: "Get a detailed quote and cleaning schedule." },
              { step: "4", title: "Clean", desc: "Top-tier cleaning with zero hassle." },
            ].map((item, idx) => (
              <div key={idx} className="relative group p-10 bg-white rounded-[2.5rem] border-2 border-transparent hover:border-primary/20 transition-all text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center font-black text-3xl text-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-secondary-foreground">
          <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Ready for a <span className="text-white underline decoration-accent/50">Fresh</span> Workspace?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-md rounded-[3rem] p-10 border border-white/20 hover:bg-white/20 transition-all flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-xl">
                <Phone className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Call Us</h3>
              <a href="tel:+17095550123" className="text-3xl font-black text-white hover:text-accent transition-colors">
                (709) 555-0123
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-[3rem] p-10 border border-white/20 hover:bg-white/20 transition-all flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-xl">
                <Mail className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Email Us</h3>
              <a href="mailto:info@smilingbins.ca" className="text-3xl font-black text-white hover:text-accent transition-colors">
                info@smilingbins.ca
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-white/80 font-bold uppercase tracking-[0.3em] text-xs">
              <MapPin size={16} />
              Serving all of Newfoundland
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
