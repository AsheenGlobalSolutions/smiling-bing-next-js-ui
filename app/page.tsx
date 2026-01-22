import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <section className="relative py-16 md:py-32 lg:py-40 bg-gradient-to-br from-primary/8 via-background to-secondary/8 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6 md:mb-8">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Trusted by Newfoundland residents</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 md:mb-8 leading-tight tracking-tight">
            Smiling Bins
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Because Clean Bins Make Happy Homes!
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
            Bringing freshness back to your garbage, recycling, and compost bins—one clean at a time. We make them look
            and smell brand new the eco-friendly way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/20 text-primary-foreground px-8 h-12 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200"
              >
                Book a Service
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/services/bin-cleaning" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 px-8 h-12 rounded-lg font-semibold bg-transparent"
              >
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-foreground">Eco-Friendly</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="w-6 h-6 text-secondary" />
              <span className="text-sm font-medium text-foreground">Convenient Curbside</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium text-foreground">Sanitized & Deodorized</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-foreground">Locally Owned</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Our Premium Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cleaning solutions tailored to your specific needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: "/services/bin-cleaning",
                icon: "🗑️",
                title: "Garbage Bin Cleaning",
                description: "Residential & Commercial - High-pressure wash with deodorization at your curb",
                gradient: "from-primary/10 to-transparent",
              },
              {
                href: "/services/pressure-washing",
                icon: "💧",
                title: "Pressure Washing",
                description: "Restore driveways, patios, decks, and house exteriors to like-new condition",
                gradient: "from-secondary/10 to-transparent",
              },
              {
                href: "/services/residential-carpet",
                icon: "🏠",
                title: "Residential Carpet Cleaning",
                description: "Deep steam extraction with stain & pet odor removal - Safe for kids & pets",
                gradient: "from-accent/10 to-transparent",
              },
              {
                href: "/services/commercial-carpet",
                icon: "🏢",
                title: "Commercial Carpet Cleaning",
                description: "Heavy-duty cleaning for offices, retail, clinics, schools - Quote-based pricing",
                gradient: "from-primary/10 to-transparent",
              },
              {
                href: "/services/upholstery",
                icon: "🪑",
                title: "Professional Upholstery Cleaning",
                description: "Specialized fabric cleaning for sofas, chairs, mattresses & sectionals",
                gradient: "from-secondary/10 to-transparent",
              },
              {
                href: "/faq-pricing",
                icon: "📋",
                title: "Pricing & FAQ",
                description: "Simple pricing, no contracts, no hidden fees. Satisfaction guaranteed.",
                gradient: "from-accent/10 to-transparent",
              },
            ].map((service) => (
              <Link key={service.title} href={service.href}>
                <div
                  className={`group relative h-full p-8 rounded-2xl bg-gradient-to-br ${service.gradient} border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/80 backdrop-blur rounded-xl flex items-center justify-center mb-5 text-2xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-5 text-sm leading-relaxed">{service.description}</p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

        {/* Service Locations */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                        Service Areas
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Proudly serving the Greater St. John's area and surrounding communities
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {[
                        {
                            location: "St. John's",
                            description: "Our home base. Serving all neighborhoods.",
                        },
                        {
                            location: "Mount Pearl",
                            description: "Quick service to our neighbors west.",
                        },
                        {
                            location: "Paradise",
                            description: "Extending service to the south.",
                        },
                        {
                            location: "CBS",
                            description: "Covering communities south of the bay.",
                        },
                        {
                            location: "Torbay",
                            description: "Reaching north to the Avalon Peninsula.",
                        },
                    ].map((area, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-foreground mb-2">{area.location}</h3>
                            <p className="text-sm text-muted-foreground">{area.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
                    <p className="text-muted-foreground mb-4">
                        Don't see your location listed? We may still service your area!
                    </p>
                    <a href="/contact">
                        <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all">
                            Check Service Availability
                            <ArrowRight size={18} />
                        </button>
                    </a>
                </div>
            </div>
        </section>
      <Footer />
    </div>
  )
}
