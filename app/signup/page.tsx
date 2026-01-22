'use client'

import React from "react"

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { useState } from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    bins: '1',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address) {
      alert('Please fill in all fields')
      return
    }
    
    // Store signup data in session
    sessionStorage.setItem('signupData', JSON.stringify(formData))
    localStorage.setItem('user', JSON.stringify({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
    }))
    
    // Navigate to checkout page
    window.location.href = '/checkout'
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Join Smiling Bins Today
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sign up in less than 5 minutes and choose the plan that fits your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 border-2 border-border/50">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Account Created!</h3>
                    <p className="text-muted-foreground mb-6">
                      Redirecting to payment...
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name
                        </label>
                        <Input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name
                        </label>
                        <Input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(709) XXX-XXXX"
                        required
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Street Address
                      </label>
                      <Input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="123 Main Street, St. John's"
                        required
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        How Many Bins to Clean?
                      </label>
                      <select
                        name="bins"
                        value={formData.bins}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground"
                      >
                        <option value="1">1 Bin</option>
                        <option value="2">2 Bins</option>
                        <option value="3">3 Bins</option>
                        <option value="4">4+ Bins</option>
                      </select>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/20 text-primary-foreground font-semibold flex items-center justify-center gap-2"
                    >
                      Continue to Plans
                      <ArrowRight size={18} />
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      Already have an account?{' '}
                      <Link href="/contact" className="text-primary font-semibold hover:underline">
                        Contact us
                      </Link>
                    </p>
                  </form>
                )}
              </Card>
            </div>

            {/* Benefits Sidebar */}
            <div className="space-y-4">
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="font-bold text-foreground mb-4">Sign Up Benefits</h3>
                <ul className="space-y-3">
                  {[
                    'Choose your schedule',
                    'Eco-friendly cleaning',
                    '100% satisfaction guarantee',
                    '24/7 customer support',
                    'Flexible payment options',
                    'No long-term contracts',
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 bg-accent/5 border-accent/20">
                <p className="text-sm text-muted-foreground mb-3">
                  Have questions?
                </p>
                <Link href="/faq-pricing">
                  <Button variant="outline" className="w-full border-accent/30 hover:bg-accent/10 bg-transparent">
                    View FAQ & Pricing
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
