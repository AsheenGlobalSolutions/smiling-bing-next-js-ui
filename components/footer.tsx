'use client';

import Link from "next/link"
import {MapPin, Phone, Mail, Facebook, Instagram, Star, ExternalLink} from "lucide-react"
import {Button} from "@/components/ui/button";

export default function Footer() {
    const reviews = [
        {
            quote: "Amazing service! My bins have never looked or smelled better. The team is professional and always on time.",
            author: "Lisa, St. John's",
            rating: 5,
        },
        {
            quote: "Smiling Bins makes garbage day actually pleasant. Highly recommend! Worth every penny.",
            author: "David, Paradise",
            rating: 5,
        },
        {
            quote: "Affordable, eco-friendly, and always on time. Best investment for my home.",
            author: "Amanda, Mount Pearl",
            rating: 5,
        },
        {
            quote: "Great customer service and they always respond quickly to messages. Very happy with the service!",
            author: "John, CBS",
            rating: 5,
        },
        {
            quote: "Finally got rid of the awful smell from our bins. This service is a game-changer!",
            author: "Sandra, Torbay",
            rating: 5,
        },
        {
            quote: "No-fuss booking, flexible scheduling, and excellent results. Couldn't ask for more!",
            author: "Michael, St. John's",
            rating: 5,
        },
    ]
    const handleGoogleReview = () => {
        // Open Google Business profile review link in new window
        window.open(
            'https://www.google.com/maps/place/Smiling+Bins/@47.5603203,-52.71285,15z',
            'google_review',
            'width=800,height=600'
        )
    }

    return (
        <footer className="bg-background">
            {/* Customer Reviews Section */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h3>
                        <p className="text-lg text-muted-foreground">Join hundreds of satisfied Newfoundland residents</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="text-accent text-lg">★</span>
                                    ))}
                                </div>
                                <p className="text-muted-foreground mb-4 italic leading-relaxed">"{review.quote}"</p>
                                <p className="font-semibold text-foreground text-sm">— {review.author}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-10">
                        <Button
                            onClick={handleGoogleReview}
                            className="
           inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all
        "
                        >
                            <Star size={20} />
                            Add Review on Google
                            <ExternalLink size={18} />
                        </Button>
                    </div>

                </div>
            </section>

            {/*<section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background border-b border-border">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Love Our Service?
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Share your experience with the Smiling Bins community on Google Business. Your feedback helps us improve and helps other customers discover us!
                    </p>
                    <Button
                        onClick={handleGoogleReview}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 py-3 text-lg"
                    >
                        <Star size={20} />
                        Add Review on Google
                        <ExternalLink size={18} />
                    </Button>
                </div>
            </section>*/}

            {/* Footer Content */}
            <div className="bg-gradient-to-b from-primary to-primary/95 text-primary-foreground">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
                        {/* Company Info */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-primary-foreground/20 backdrop-blur rounded-lg flex items-center justify-center text-primary font-bold text-base">
                                    SB
                                </div>
                                <h3 className="font-bold text-lg">Smiling Bins</h3>
                            </div>
                            <p className="text-sm opacity-90 leading-relaxed">
                                Eco-friendly bin cleaning and professional cleaning services for Newfoundland homes and businesses. Serving St. John's, Mount Pearl, Paradise, and surrounding areas.
                            </p>
                            <div className="flex gap-3 mt-4">
                                <a
                                    href="#"
                                    className="w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
                                >
                                    <Facebook size={16} />
                                </a>
                                <a
                                    href="#"
                                    className="w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
                                >
                                    <Instagram size={16} />
                                </a>
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="font-semibold mb-5 text-base">Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="/services/bin-cleaning" className="opacity-90 hover:opacity-100 transition-opacity">
                                        Bin Cleaning
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/pressure-washing" className="opacity-90 hover:opacity-100 transition-opacity">
                                        Pressure Washing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/residential-carpet" className="opacity-90 hover:opacity-100 transition-opacity">
                                        Residential Carpet
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/commercial-carpet" className="opacity-90 hover:opacity-100 transition-opacity">
                                        Commercial Carpet
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/upholstery" className="opacity-90 hover:opacity-100 transition-opacity">
                                        Upholstery Cleaning
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-semibold mb-5 text-base">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq-pricing" className="opacity-90 hover:opacity-100 transition-opacity">
                                        FAQ & Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="font-semibold mb-5 text-base">Get in Touch</h4>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-3">
                                    <Phone size={18} className="mt-0.5 flex-shrink-0" />
                                    <a href="tel:+17095550123" className="opacity-90 hover:opacity-100 transition-opacity">
                                        (709) XXX-XXXX
                                    </a>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail size={18} className="mt-0.5 flex-shrink-0" />
                                    <a href="mailto:info@smilingbins.ca" className="opacity-90 hover:opacity-100 transition-opacity">
                                        info@smilingbins.ca
                                    </a>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                                    <span>Newfoundland (Service Area)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm opacity-90">
                        <p>{'©'} 2025 Smiling Bins. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
