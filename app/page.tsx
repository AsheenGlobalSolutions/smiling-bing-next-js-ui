import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <section className="relative py-24 md:py-36 lg:py-48 bg-white overflow-hidden">
        {/* Lighter, friendlier background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 rounded-l-[10rem] blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* LEFT SIDE - CONTENT */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/50 rounded-full px-5 py-2.5 mb-8 shadow-sm">
                <Sparkles size={18} className="text-accent-foreground" />
                <span className="text-sm font-bold text-accent-foreground uppercase tracking-wider">
                  Trusted by Newfoundland families
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight">
                <span className="text-primary">Smiling Bins</span>
                <span className="block mt-4 text-4xl sm:text-5xl md:text-6xl text-muted-foreground font-medium">
                  Because Clean Bins Make Happy Homes!
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
                We bring freshness back to your garbage, recycling, and compost bins—one eco-friendly clean at a time.
                Experience a sparkling, odor-free home with Newfoundland's friendliest cleaning team.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 h-16 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-3"
                  >
                    Book Your Service
                    <ArrowRight size={22} />
                  </Button>
                </Link>

                <Link href="/services/bin-cleaning">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-secondary/30 text-secondary hover:bg-secondary/10 px-10 h-16 rounded-2xl font-bold text-lg"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group-hover:scale-[1.03] transition-transform duration-700">
                <img
                  src="/hero_smiling_bins.png"
                  alt="Happy Home with Clean Bins"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-12 bg-muted/30">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-bold text-foreground">Eco-Friendly</span>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-secondary" />
            </div>
            <span className="text-sm font-bold text-foreground">Convenient Curbside</span>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm font-bold text-foreground">Sanitized & Deodorized</span>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-bold text-foreground">Locally Owned</span>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Our <span className="text-primary font-black">Fresh</span> Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Safe, eco-friendly, and professional cleaning solutions for your home and business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                href: "/services/bin-cleaning",
                image: "/service_bin_cleaning.png",
                title: "Garbage Bin Cleaning",
                description: "Residential & Commercial - High-pressure wash with deodorization at your curb.",
                tag: "Bestseller",
                tagColor: "bg-primary"
              },
              {
                href: "/services/pressure-washing",
                image: "/service_pressure_washing.png",
                title: "Pressure Washing",
                description: "Restore driveways, patios, decks, and house exteriors to like-new condition.",
                tag: "New",
                tagColor: "bg-secondary"
              },
              {
                href: "/services/residential-carpet",
                image: "/service_carpet_residential.png",
                title: "Residential Carpet",
                description: "Deep steam extraction with stain & pet odor removal - Safe for kids & pets.",
                tag: "Eco-Safe",
                tagColor: "bg-primary"
              },
              {
                href: "/services/commercial-carpet",
                image: "/service_carpet_commercial.png",
                title: "Commercial Carpet",
                description: "Heavy-duty cleaning for offices, retail, clinics, schools - Quote-based pricing.",
                tag: "Pro",
                tagColor: "bg-secondary"
              },
              {
                href: "/services/upholstery",
                image: "/service_upholstery.png",
                title: "Upholstery Cleaning",
                description: "Specialized fabric cleaning for sofas, chairs, mattresses & sectionals.",
                tag: "Fresh",
                tagColor: "bg-accent"
              },
              {
                href: "/faq-pricing",
                image: "/hero_smiling_bins.png",
                title: "Pricing & FAQ",
                description: "Simple pricing, no contracts, no hidden fees. Satisfaction guaranteed.",
                tag: "Transparent",
                tagColor: "bg-accent"
              },
            ].map((service) => (
              <Link key={service.title} href={service.href}>
                <div
                  className="group h-full rounded-[2rem] bg-white border-2 border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6">
                      <span className={`${service.tagColor} text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg`}>
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all pb-1 border-b-2 border-primary/10 group-hover:border-primary/50">
                      Learn More
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Where We <span className="text-secondary">Shine</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proudly serving families and businesses across the Avalon Peninsula.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Location Grid (Friendly list) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "St. John's", "Mount Pearl", "Paradise",
                "Conception Bay South", "Torbay", "Portugal Cove"
              ].map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-5 p-6 bg-slate-50 rounded-[2rem] border border-transparent hover:border-primary/30 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors">
                    <Sparkles className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <span className="text-lg font-bold text-foreground">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            {/* Visual illustrative Section instead of topo map */}
            <div className="relative">
              <div className="absolute -inset-10 bg-secondary/5 rounded-full blur-3xl"></div>
              <div className="relative aspect-square bg-slate-50 rounded-[3rem] border-8 border-white shadow-2xl overflow-hidden flex flex-col items-center justify-center p-12 text-center">
                <div className="w-32 h-32 bg-secondary/10 rounded-full flex items-center justify-center mb-8 animate-bounce transition-all duration-1000">
                  <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <Sparkles className="text-white w-4 h-4" />
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl font-black text-foreground mb-4 font-sans tracking-tight leading-none uppercase">
                  Greater St. John&apos;s Coverage
                </h3>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-body">
                  We bring our specialized cleaning trucks directly to your curb in these areas.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Metro", "Urban", "Suburban", "Northeast", "West Coast"].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white border border-border rounded-full text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white border border-border rounded-3xl p-10 text-center shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Don&apos;t see your location?</h3>
                <p className="text-muted-foreground">
                  We are rapidly expanding. Contact us to check if we can service your specific address!
                </p>
              </div>
              <a href="/contact">
                <button className="whitespace-nowrap inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl font-bold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 hover:scale-105 active:scale-95">
                  Check Availability
                  <ArrowRight size={20} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
