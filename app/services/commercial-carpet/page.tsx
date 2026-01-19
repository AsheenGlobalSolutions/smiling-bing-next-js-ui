import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"

export default function CommercialCarpetPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Commercial Carpet Cleaning Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Heavy-duty carpet cleaning for offices, retail spaces, clinics, schools, hotels, and other commercial
            properties. Every space is unique - custom solutions included.
          </p>
        </div>
      </section>

      {/* Properties We Serve */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Properties We Serve</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🏢",
                title: "Office Buildings",
                description: "Professional cleaning to maintain a clean workplace",
              },
              { icon: "🛍️", title: "Retail Spaces", description: "First-class presentation for your customers" },
              { icon: "⚕️", title: "Medical Clinics", description: "Hygienic, specialized cleaning for healthcare" },
              { icon: "🎓", title: "Schools & Universities", description: "Safe environment for students and staff" },
              { icon: "🏨", title: "Hotels & Hospitality", description: "Guest-ready carpet maintenance" },
              { icon: "🏭", title: "Industrial Facilities", description: "Heavy-duty commercial carpet solutions" },
            ].map((property, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-6 bg-card hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-3">{property.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{property.title}</h3>
                <p className="text-sm text-muted-foreground">{property.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Visit Section */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border-2 border-secondary/20 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Every Space Is Different</h2>

            <p className="text-lg text-muted-foreground mb-6">
              Commercial carpet cleaning isn't one-size-fits-all. The right approach depends on:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-4 items-start">
                <span className="text-accent text-2xl mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Carpet Type & Condition</h3>
                  <p className="text-muted-foreground">Different carpet materials require different cleaning methods</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-accent text-2xl mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Square Footage</h3>
                  <p className="text-muted-foreground">
                    Larger spaces require more resources and different scheduling considerations
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-accent text-2xl mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Soiling Level</h3>
                  <p className="text-muted-foreground">
                    Heavy traffic areas and specialized stains need customized treatment plans
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-accent text-2xl mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Business Operations</h3>
                  <p className="text-muted-foreground">We work around your schedule to minimize disruptions</p>
                </div>
              </li>
            </ul>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Why We Require a Site Visit</h3>
              <p className="text-muted-foreground">
                A site visit allows us to assess your specific needs, understand your carpet and space, and provide an
                accurate quote. This ensures we deliver the exact service your commercial property needs.
              </p>
            </div>

            <p className="text-muted-foreground mb-6">
              <strong>No online booking for commercial carpets.</strong> We provide personalized service that starts
              with understanding your unique situation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Commercial Approach</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "Contact us to discuss your commercial cleaning needs and schedule a site visit.",
              },
              {
                step: "2",
                title: "Site Assessment",
                description:
                  "We visit your property to assess carpet type, condition, traffic patterns, and specific challenges.",
              },
              {
                step: "3",
                title: "Custom Quote",
                description:
                  "Based on our assessment, we provide a detailed quote and cleaning plan tailored to your business.",
              },
              {
                step: "4",
                title: "Professional Cleaning",
                description: "Our team delivers heavy-duty cleaning with minimal disruption to your daily operations.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-accent">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Why Choose Crystal Clean for Commercial Carpet?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Experienced in Commercial Properties",
                description:
                  "We've successfully cleaned carpets in offices, retail, healthcare, education, and hospitality settings.",
              },
              {
                title: "Minimizes Business Disruption",
                description:
                  "We schedule cleaning around your operations and work efficiently to get you back to normal quickly.",
              },
              {
                title: "Professional-Grade Equipment",
                description:
                  "Commercial-strength cleaning equipment handles heavy soiling and large areas effectively.",
              },
              {
                title: "Detailed Reporting",
                description:
                  "We provide documentation of work completed, before/after photos, and maintenance recommendations.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10">
                    <ArrowRight className="h-6 w-6 text-accent" />
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

      {/* CTA Section - Call or Email */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Ready to Discuss Your Commercial Carpet Needs?
          </h2>
          <p className="text-lg text-center opacity-90 mb-12">
            Contact us to arrange a site visit and receive a custom quote for your commercial property.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-primary-foreground/10 rounded-lg p-8 text-center border border-primary-foreground/20">
              <Phone className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-semibold mb-2">Call to Arrange a Site Visit</h3>
              <p className="opacity-90 mb-4">Speak directly with our team about your commercial cleaning needs.</p>
              <a href="tel:+17095550123" className="text-lg font-bold hover:opacity-80 transition-opacity">
                (709) 555-0123
              </a>
            </div>

            <div className="bg-primary-foreground/10 rounded-lg p-8 text-center border border-primary-foreground/20">
              <Mail className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-semibold mb-2">Email Us for a Quote</h3>
              <p className="opacity-90 mb-4">Send us details about your property and we'll respond promptly.</p>
              <a href="mailto:info@crystalclean.ca" className="text-lg font-bold hover:opacity-80 transition-opacity">
                info@crystalclean.ca
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="opacity-90">
              <MapPin className="inline h-5 w-5 mr-2" />
              Serving all of Newfoundland | Available for site visits across the province
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
