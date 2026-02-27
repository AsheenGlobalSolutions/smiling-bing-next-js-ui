import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { ContactForm } from "@/components/forms/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-28 md:py-40 overflow-hidden bg-white text-center">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/5 rounded-r-[10rem] blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 tracking-tight">Get in <span className="text-primary">Touch</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
            Have questions? We&apos;re here to help. Contact us today and experience the
            <span className="text-secondary font-bold"> Smiling Bins</span> difference.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: Phone, title: "Phone", link: "tel:+17095550123", value: "(709) 555-0123", desc: "Mon-Fri, 8am-6pm", color: "text-primary" },
              { icon: Mail, title: "Email", link: "mailto:info@smilingbins.ca", value: "info@smilingbins.ca", desc: "Response within 24h", color: "text-secondary" },
              { icon: MapPin, title: "Service Area", link: "#", value: "St. John's & Area", desc: "Available across NL", color: "text-accent" },
              { icon: Clock, title: "Hours", link: "#", value: "Mon-Fri: 8am-6pm", desc: "Sat: 9am-4pm", color: "text-primary" }
            ].map((option, idx) => (
              <div key={idx} className="bg-white rounded-[3rem] p-10 text-center border-2 border-transparent hover:border-primary/20 transition-all shadow-sm hover:shadow-xl group">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-all">
                  <option.icon className={`${option.color}`} size={32} />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-2">{option.title}</h3>
                <a href={option.link} className={`text-lg font-bold hover:underline ${option.link !== '#' ? option.color : 'text-foreground'}`}>
                  {option.value}
                </a>
                <p className="text-sm text-muted-foreground mt-3 font-body font-medium">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">Our <span className="text-primary">Service</span> Area</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              We proudly serve St. John's and the surrounding Newfoundland communities.
            </p>
          </div>

          <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-slate-50 bg-white group">
            <iframe
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.5917394476547!2d-52.71285!3d47.5603203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b59a1c3c3c3c3c3%3A0x0!2sSmiling%20Bins%20-%20Garbage%20Bin%20Cleaning!5e0!3m2!1sen!2sca!4v1234567890"
              className="grayscale-[0.2] contrast-[1.1] group-hover:grayscale-0 transition-all duration-1000"
            ></iframe>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
            {[
              { name: "St. John's", status: "Primary" },
              { name: "Mount Pearl", status: "Serving" },
              { name: "Paradise", status: "Serving" },
              { name: "CBS", status: "Serving" },
              { name: "Torbay", status: "Serving" },
            ].map((location, idx) => (
              <div key={idx} className="bg-slate-50/50 border-2 border-transparent hover:border-primary/20 rounded-[2rem] p-8 text-center transition-all group">
                <h4 className="text-xl font-black text-foreground mb-2 group-hover:text-primary transition-colors">{location.name}</h4>
                <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-xs font-bold text-muted-foreground shadow-sm">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  {location.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">Send <span className="text-secondary">Message</span></h2>
            <p className="text-xl text-muted-foreground font-body">Drop us a line and we&apos;ll get back to you shortly.</p>
          </div>
          <div className="bg-white border-8 border-slate-100 rounded-[4rem] p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-[6rem]"></div>
            <div className="relative z-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
