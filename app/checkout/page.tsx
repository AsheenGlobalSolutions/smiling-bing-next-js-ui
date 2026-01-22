'use client'

import React from "react"
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ShoppingCart, Lock, Check, ArrowLeft } from 'lucide-react'

interface PlanDetails {
  name: string
  price: number
  frequency: string
}

export default function Checkout() {
  const [binCount, setBinCount] = useState(1)
  const [plan, setPlan] = useState<PlanDetails | null>(null)
  const [userData, setUserData] = useState<any>(null)
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  useEffect(() => {
    // Get user data from session
    const user = localStorage.getItem('user')
    if (user) {
      setUserData(JSON.parse(user))
    }

    // Get plan from URL params
    const params = new URLSearchParams(window.location.search)
    const planName = params.get('plan') || 'Monthly'
    
    const plans: { [key: string]: PlanDetails } = {
      Monthly: { name: 'Monthly', price: 35, frequency: 'Once per month' },
      'Bi-Weekly': { name: 'Bi-Weekly', price: 29, frequency: 'Every 2 weeks' },
      Quarterly: { name: 'Quarterly', price: 45, frequency: 'Every 3 months' },
      'One-Time': { name: 'One-Time', price: 50, frequency: 'One cleaning' },
    }
    
    setPlan(plans[planName] || plans.Monthly)
  }, [])

  const basePrice = plan?.price || 35
  const additionalBinPrice = 15
  const additionalBinsCost = Math.max(0, binCount - 1) * additionalBinPrice
  const totalPrice = basePrice + additionalBinsCost

  const handleProcessPayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Store subscription data
    const subscription = {
      id: `SUB-${Date.now()}`,
      plan: plan?.name,
      bins: binCount,
      totalPrice: totalPrice,
      frequency: plan?.frequency,
      startDate: new Date().toISOString(),
      status: 'active',
      autoRenew: true,
    }

    localStorage.setItem('subscription', JSON.stringify(subscription))
    setIsProcessing(false)
    setOrderComplete(true)
  }

  if (!plan || !userData) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Loading checkout...</p>
        </div>
        <Footer />
      </div>
    )
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex-1">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-12 border-2 border-primary/20 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Payment Successful!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Your subscription to Smiling Bins has been activated.
              </p>

              <div className="bg-muted/50 rounded-lg p-8 mb-8 text-left space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Plan:</span>
                  <span className="font-semibold text-foreground">{plan.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bins:</span>
                  <span className="font-semibold text-foreground">{binCount}</span>
                </div>
                <div className="flex justify-between border-t border-border pt-4">
                  <span className="text-foreground font-semibold">Total:</span>
                  <span className="font-bold text-primary text-lg">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-8">
                A confirmation email has been sent to <strong>{userData.email}</strong>. Your first cleaning will be scheduled shortly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/profile">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                    View My Subscription
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="border-2 border-primary/20 hover:bg-primary/5 font-semibold px-8 bg-transparent">
                    Return Home
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/faq-pricing" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold">
              <ArrowLeft size={18} />
              Back to Plans
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 border-2 border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Payment Details</h2>

                <form onSubmit={handleProcessPayment} className="space-y-6">
                  {/* Bin Selection */}
                  <div className="border-b border-border pb-6">
                    <label className="block text-sm font-semibold text-foreground mb-4">
                      Number of Bins
                    </label>
                    <div className="flex items-center gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="w-12 h-12 p-0 bg-transparent"
                        onClick={() => setBinCount(Math.max(1, binCount - 1))}
                      >
                        -
                      </Button>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={binCount}
                        onChange={(e) => setBinCount(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-20 h-12 text-center text-lg font-semibold border border-border rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="w-12 h-12 p-0 bg-transparent"
                        onClick={() => setBinCount(binCount + 1)}
                      >
                        +
                      </Button>
                      <span className="text-sm text-muted-foreground flex-1">
                        ${additionalBinPrice}/bin for additional bins
                      </span>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-4">
                      Payment Method
                    </label>
                    <div className="space-y-3">
                      {['card', 'paypal', 'bank'].map((method) => (
                        <label key={method} className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all" style={{borderColor: paymentMethod === method ? '#4CAF50' : '#e5e7eb'}}>
                          <input
                            type="radio"
                            name="payment"
                            value={method}
                            checked={paymentMethod === method}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-4 h-4"
                          />
                          <span className="ml-3 font-medium text-foreground capitalize">
                            {method === 'card' && 'Credit Card'}
                            {method === 'paypal' && 'PayPal'}
                            {method === 'bank' && 'Bank Transfer'}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Card Details */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Card Number
                        </label>
                        <Input
                          placeholder="4242 4242 4242 4242"
                          className="h-11"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Expiry Date
                          </label>
                          <Input placeholder="MM/YY" className="h-11" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            CVC
                          </label>
                          <Input placeholder="123" className="h-11" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Terms and Conditions */}
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <input type="checkbox" defaultChecked className="mt-1" />
                    <p className="text-sm text-muted-foreground">
                      I agree to the terms and conditions. I understand that my subscription will auto-renew on the scheduled date and I can cancel anytime from my account settings.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/20 text-primary-foreground h-12 font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Lock size={18} />
                    {isProcessing ? 'Processing...' : `Pay $${totalPrice.toFixed(2)}`}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="p-6 border-2 border-primary/10 sticky top-24">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <ShoppingCart size={20} className="text-primary" />
                  Order Summary
                </h3>

                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Plan:</span>
                    <span className="font-semibold text-foreground">{plan.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{plan.frequency}</span>
                    <span className="font-semibold text-foreground">${basePrice.toFixed(2)}</span>
                  </div>

                  {binCount > 1 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{binCount - 1} Additional Bins</span>
                      <span className="font-semibold text-foreground">${additionalBinsCost.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="text-xs text-muted-foreground pt-2">
                    <p>Total Bins: <strong>{binCount}</strong></p>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-semibold text-foreground">Total:</span>
                  <span className="text-3xl font-bold text-primary">${totalPrice.toFixed(2)}</span>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    Easy cancellation anytime
                  </p>
                  <p className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    100% satisfaction guarantee
                  </p>
                  <p className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    Secure payment processing
                  </p>
                  <p className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    No hidden fees
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
