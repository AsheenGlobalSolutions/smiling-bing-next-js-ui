import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Check } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Crystal Clean</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Serving Newfoundland families and businesses with professional, reliable cleaning services since 2015.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Crystal Clean was founded in 2015 by a group of Newfoundland professionals who believed that quality
                cleaning services should be accessible and reliable. What started as a small family business has grown
                into a trusted partner for hundreds of homes and businesses across the province.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We believe that a clean space is a happy space, and we're committed to delivering that happiness to
                every customer. Our dedication to eco-friendly practices and attention to detail sets us apart.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to be a locally-owned business that understands the unique needs of Newfoundland
                homes and businesses.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg h-64 md:h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Quality & Excellence</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Every job is completed to the highest standard, using professional-grade
                equipment and eco-friendly products.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Reliability & Trust</h3>
              <p className="text-muted-foreground">
                As a local Newfoundland business, we build our reputation on showing up on time, delivering results, and
                treating your home or business with care.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Environmental Care</h3>
              <p className="text-muted-foreground">
                We're committed to sustainable practices. All our products are eco-friendly and safe for your family,
                pets, and the Newfoundland environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Why Choose Crystal Clean?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Local Expertise",
                description:
                  "We understand Newfoundland's unique climate, building types, and cleaning challenges. Our solutions are tailored to your region.",
              },
              {
                title: "Certified Professionals",
                description:
                  "Our team is trained, insured, and certified. You can trust us with your home or business.",
              },
              {
                title: "Eco-Friendly Products",
                description:
                  "We use only non-toxic, environmentally responsible cleaning solutions. Safe for families, pets, and the ocean.",
              },
              {
                title: "Transparent Pricing",
                description:
                  "No hidden fees. We provide clear, upfront pricing for residential services. Commercial quotes available upon site visit.",
              },
              {
                title: "On-Time Service",
                description:
                  "We respect your time. Our team arrives on schedule and completes the job efficiently without cutting corners.",
              },
              {
                title: "Satisfaction Guaranteed",
                description:
                  "If you're not completely satisfied with our work, we'll make it right. Your happiness is our priority.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10">
                    <Check className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <p className="text-sm opacity-90">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <p className="text-sm opacity-90">Jobs Completed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15</div>
              <p className="text-sm opacity-90">Certified Staff</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
