import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles, Zap, FileText, Leaf, Check, Heart } from "lucide-react"
import { UpholsteryAssessmentForm } from "@/components/forms/upholstery-assessment-form"

export default function UpholsteryPage() {
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
              <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/50 rounded-full px-5 py-2 mb-8 shadow-sm">
                <Sparkles size={16} className="text-secondary" />
                <span className="text-sm font-bold text-secondary uppercase tracking-widest">
                  Deep Clean & Fabric Care
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-foreground leading-[1.1]">
                Upholstery <span className="text-primary">Care</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl font-body">
                Restore the life of your furniture. Specialized fabric cleaning for sofas, mattresses, and more using
                <span className="text-primary font-bold"> eco-friendly, non-toxic</span> methods.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 h-16 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95">
                    Free Assessment
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/10 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
                <img src="/service_upholstery.png" alt="Upholstery Cleaning" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Items We Clean */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">Expert <span className="text-secondary">Fabric</span> Care</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              No matter the furniture, we have the specialized tools to restore its beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {[
              { title: "Furniture", image: "/service_upholstery.png", items: ["Sofas & Couches", "Armchairs & Recliners", "Dining Chairs", "Ottomans", "Sectionals"] },
              { title: "Bedding", image: "/service_carpet_residential.png", items: ["Mattresses", "Box Springs", "Headboards", "Pillows", "Upholstered Frames"] }
            ].map((cat, i) => (
              <div key={i} className="group bg-white rounded-[3.5rem] overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-2xl">
                <div className="aspect-[21/10] overflow-hidden relative">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <h3 className="absolute bottom-8 left-10 text-4xl font-black text-white">{cat.title}</h3>
                </div>
                <div className="p-10">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-lg font-medium text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Our <span className="text-primary">Gentle</span> Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              Science-based cleaning that protects your furniture while delivering deep results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Assessment", desc: "We examine fabric type and soiling to choose the safest method.", image: "/step_arrival.png" },
              { step: "2", title: "Deep Clean", desc: "Eco-friendly extraction that lifts dirt without damaging fibers.", image: "/service_upholstery.png" },
              { step: "3", title: "Protect", desc: "Optional treatments to guard against future stains and spills.", image: "/service_carpet_residential.png" },
              { step: "4", title: "Inspect", desc: "Final walkthrough to ensure your furniture looks perfect.", image: "/about_story.png" },
            ].map((item, idx) => (
              <div key={idx} className="group text-center">
                <div className="aspect-square rounded-[2.5rem] overflow-hidden mb-8 shadow-xl border-4 border-white group-hover:scale-[1.03] transition-transform duration-700">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center font-black text-xl text-white shadow-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center text-foreground mb-20">Why Smiling Bins?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Sparkles, color: "text-primary", title: "Fabric Experts", desc: "Trained in everything from delicate silks to durable microfibers." },
              { icon: Leaf, color: "text-secondary", title: "Eco-Safe", desc: "Non-toxic, biodegradable solutions safe for kids and pets." },
              { icon: FileText, color: "text-accent", title: "Fair Pricing", desc: "Transparent quotes based on fabric type and cleaning needs." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-10 bg-white rounded-[3rem] border-2 border-transparent hover:border-primary/20 transition-all shadow-sm">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-6 shadow-sm">
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

      {/* Photo Upload Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">Quick Assessment</h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-body">
              Upload photos of your upholstery for a preliminary quote estimate.
            </p>
          </div>
          <div className="bg-slate-50 border-8 border-white rounded-[4rem] p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[5rem]"></div>
            <div className="relative z-10">
              <UpholsteryAssessmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Revive Your <span className="text-accent underline decoration-sky-300">Comfort</span></h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto font-medium">
            Contact us today for a free assessment and experience the Smiling Bins difference for your furniture.
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
