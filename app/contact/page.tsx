import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { ContactForm } from "@/components/forms/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Want to book a service? We're here to help. Contact us today.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="border border-border rounded-lg p-6 text-center bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
              <a href="tel:+17095550123" className="text-accent hover:underline">
                (709) 555-0123
              </a>
              <p className="text-sm text-muted-foreground mt-2">Monday-Friday, 8am-6pm</p>
            </div>

            <div className="border border-border rounded-lg p-6 text-center bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <a href="mailto:info@crystalclean.ca" className="text-accent hover:underline">
                info@crystalclean.ca
              </a>
              <p className="text-sm text-muted-foreground mt-2">We respond within 24 hours</p>
            </div>

            <div className="border border-border rounded-lg p-6 text-center bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Service Area</h3>
              <p className="text-accent">St. John's & Area</p>
              <p className="text-sm text-muted-foreground mt-2">Available across Newfoundland</p>
            </div>

            <div className="border border-border rounded-lg p-6 text-center bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Hours</h3>
              <p className="text-sm text-muted-foreground">Mon-Fri: 8am-6pm</p>
              <p className="text-sm text-muted-foreground">Sat: 9am-4pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Send Us a Message</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
