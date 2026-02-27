import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Check, Star, Shield, Leaf, Clock, Award } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-28 md:py-40 overflow-hidden bg-white text-center">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 rounded-l-[10rem] blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl text-center"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 tracking-tight leading-[1.1]">
            Our Mission: <span className="text-secondary">Pure Spaces</span>, <span className="text-primary">Clean Living</span>.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
            Serving Newfoundland families and businesses with professional, reliable
            <span className="text-secondary font-bold"> eco-friendly</span> cleaning services since 2015.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-1.5 rounded-full text-xs font-black text-secondary uppercase tracking-widest mb-4">
                  Founded 2015
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-foreground">Our <span className="text-primary">Story</span></h2>
              </div>
              <div className="space-y-6 text-xl text-muted-foreground leading-relaxed font-body">
                <p>
                  <span className="font-bold text-primary">Smiling Bins</span> was born from a simple belief: every home in Newfoundland deserves a service that cares as much about the environment as it does about cleanliness.
                </p>
                <p>
                  Started as a small local initiative, we&apos;ve grown into a trusted community partner by proving that <span className="text-secondary font-bold">eco-friendly deep cleaning</span> doesn&apos;t just work - it delivers superior results that protect our families and our ocean.
                </p>
                <div className="flex items-center gap-6 pt-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-xl">
                        <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="Team" className="object-cover w-full h-full" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-black text-foreground uppercase tracking-widest">Trusted by 500+ Families</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-primary/10 rounded-[4rem] blur-3xl opacity-50"></div>
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group">
                <Image
                  src="/about_story.png"
                  alt="Our Team"
                  width={600}
                  height={600}
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-secondary p-8 rounded-[2.5rem] shadow-2xl border-8 border-white group-hover:scale-110 transition-transform duration-500">
                <div className="text-5xl font-black text-white leading-none">10+</div>
                <p className="text-xs font-black text-white/90 uppercase tracking-widest mt-2">Years of Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">Our Core <span className="text-primary">Values</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
              Guided by principles that ensure excellence and trust in every home we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Award, color: "text-primary", bg: "bg-primary/10", title: "Excellence", desc: "We never compromise on quality. Every job is completed to the highest standard with professional care." },
              { icon: Shield, color: "text-secondary", bg: "bg-secondary/10", title: "Reliability", desc: "As locals, we build our reputation on showing up on time and treating your property with absolute respect." },
              { icon: Leaf, color: "text-accent", bg: "bg-accent/10", title: "Eco-Friendly", desc: "All our products are non-toxic and safe for Newfoundland's families, pets, and precious environment." },
            ].map((value, i) => (
              <div key={i} className="flex flex-col items-center text-center p-12 bg-slate-50/50 rounded-[3rem] border-2 border-transparent hover:border-primary/20 transition-all hover:shadow-xl group">
                <div className={`w-20 h-20 ${value.bg} rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform`}>
                  <value.icon className={`h-10 w-10 ${value.color}`} />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 leading-none uppercase tracking-tight">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-body">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-1">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 leading-tight">The <span className="text-secondary">Smiling</span> Difference</h2>
              <p className="text-xl text-muted-foreground font-body leading-relaxed mb-10">
                We go beyond standard cleaning to provide results tailored to Newfoundland&apos;s unique challenges.
              </p>
              <div className="p-8 bg-primary rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="relative z-10 flex items-center gap-4 text-white">
                  <Star className="text-accent fill-accent shrink-0" size={32} />
                  <div>
                    <span className="block font-black text-xl tracking-tight leading-none uppercase mb-1">Top Rated in NL</span>
                    <p className="text-sm font-medium text-white/80">Voted #1 for reliability across the region.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {[
                { title: "Local Expertise", icon: Star, desc: "We understand Newfoundland's climate and building types." },
                { title: "Certified Pros", icon: Award, desc: "Our staff is fully trained, insured, and deeply experienced." },
                { title: "Safe Eco-Products", icon: Leaf, desc: "Non-toxic solutions safe for kids, pets, and our ocean." },
                { title: "Fair Pricing", icon: Shield, desc: "Clear, upfront costs with no hidden fees or contracts." },
                { title: "Always On Time", icon: Clock, desc: "We respect your schedule and work efficiently every visit." },
                { title: "Guaranteed Result", icon: Check, desc: "Not satisfied? We'll make it right. No questions asked." },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                      <item.icon size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-10 text-center">
            {[
              { val: "500+", label: "Families Served" },
              { val: "1000+", label: "Cleanings Done" },
              { val: "10+", label: "Years Care" },
              { val: "15", label: "Certified Team" }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 group-hover:scale-110 transition-transform">{stat.val}</div>
                <p className="text-accent font-black uppercase tracking-[0.2em] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
