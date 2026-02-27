import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Heart, Zap, Leaf, Sparkles } from "lucide-react"
import { ResidentialBookingForm } from "@/components/forms/residential-booking-form"

export default function ResidentialCarpetPage() {
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
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/50 rounded-full px-5 py-2 mb-8 shadow-sm">
                <Heart size={16} className="text-accent-foreground" />
                <span className="text-sm font-bold text-accent-foreground uppercase tracking-widest">
                  Safe for Families & Pets
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-foreground leading-[1.1]">
                Residential <span className="text-primary">Carpet</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl font-body">
                Deep cleaning for happy homes. We use eco-friendly treatments that are gentle on your fibers and
                <span className="text-secondary font-bold"> safe for everyone</span> you love.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 h-16 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95">
                    Book Your Cleaning
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
                <img src="/service_carpet_residential.png" alt="Residential Carpet Cleaning" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">Home <span className="text-secondary">Freshness</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              Comprehensive care for every room in your house.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Steam Extraction", desc: "Our deep steam cleaning removes allergens and dirt deep within fibers." },
              { title: "Pet Odor Removal", desc: "Permanently eliminate accidents and smells with safe, non-toxic treatments." },
              { title: "Move-In/Out", desc: "Complete carpet prep for new homes or ensuring you get your deposit back." },
              { title: "Stain Treatment", desc: "From wine spills to stubborn marks, we have the specialized tools for the job." },
              { title: "Allergen Removal", desc: "Breathe easier with a clean that removes dust mites and pet dander." },
              { title: "Carpet Refresh", desc: "Regular maintenance that extends the life and beauty of your flooring." },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-10 bg-white rounded-[3rem] border-2 border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-body">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Factors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Heart, color: "text-accent", title: "Safe & Non-Toxic", desc: "We only use solutions that we'd use in our own homes with kids and pets." },
              { icon: Check, color: "text-primary", title: "Punctual Team", desc: "We arrive on time and work efficiently to minimize your disruption." },
              { icon: Leaf, color: "text-secondary", title: "Eco-Commitment", desc: "Biodegradable products that protect the Newfoundland environment." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-[3rem] border border-transparent hover:border-border transition-all">
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

      {/* Booking Form */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">Book Your Clean</h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-body">
              Fill out the form below and our friendly team will handle the rest.
            </p>
          </div>
          <div className="bg-white border-8 border-white rounded-[4rem] p-10 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem]"></div>
            <div className="relative z-10">
              <ResidentialBookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Clean Carpets, <span className="text-accent underline decoration-sky-300">Happy</span> Home</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto font-medium">
            Schedule your family-friendly carpet cleaning today and enjoy a fresher, safer living space.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 px-12 h-16 rounded-[2rem] font-black text-xl shadow-2xl">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
