'use client'

import React from "react"
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { User, Calendar, Trash2, LogOut, Edit2, Clock, AlertCircle } from 'lucide-react'

interface UserData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
}

interface Subscription {
  id: string
  plan: string
  bins: number
  totalPrice: number
  frequency: string
  startDate: string
  status: 'active' | 'paused' | 'cancelled'
  autoRenew: boolean
}

export default function Profile() {
  const [user, setUser] = useState<UserData | null>(null)
  const [subscription, setSubscription] = useState<Subscription | null>(null)
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [cancelReason, setCancelReason] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState<UserData | null>(null)

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('user')
    const subscriptionData = localStorage.getItem('subscription')

    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      // Redirect to signin if not logged in
      window.location.href = '/signin'
    }

    if (subscriptionData) {
      setSubscription(JSON.parse(subscriptionData))
    }
  }, [])

  const handleCancelSubscription = () => {
    if (subscription && cancelReason) {
      // Update subscription status
      const updatedSub = {
        ...subscription,
        status: 'cancelled' as const,
        autoRenew: false,
      }
      localStorage.setItem('subscription', JSON.stringify(updatedSub))
      setSubscription(updatedSub)
      setShowCancelModal(false)
      setCancelReason('')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('subscription')
    localStorage.removeItem('signupData')
    window.location.href = '/'
  }

  const handleEditClick = () => {
    setEditData(user)
    setIsEditing(true)
  }

  const handleSaveChanges = () => {
    if (editData) {
      localStorage.setItem('user', JSON.stringify(editData))
      setUser(editData)
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditData(null)
  }

  const handleEditChange = (field: keyof UserData, value: string) => {
    if (editData) {
      setEditData({ ...editData, [field]: value })
    }
  }

  const getNextBillingDate = () => {
    if (!subscription) return null
    const startDate = new Date(subscription.startDate)
    const nextDate = new Date(startDate)

    switch (subscription.frequency) {
      case 'Once per month':
        nextDate.setMonth(nextDate.getMonth() + 1)
        break
      case 'Every 2 weeks':
        nextDate.setDate(nextDate.getDate() + 14)
        break
      case 'Every 3 months':
        nextDate.setMonth(nextDate.getMonth() + 3)
        break
      default:
        nextDate.setDate(nextDate.getDate() + 30)
    }
    return nextDate.toLocaleDateString()
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Loading profile...</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">My Account</h1>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-2 border-primary/20 hover:bg-primary/5 text-primary gap-2 bg-transparent"
            >
              <LogOut size={18} />
              Sign Out
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Account Information */}
            <div className="lg:col-span-2">
              <Card className="p-8 border-2 border-border/50 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                    <User className="text-primary" size={28} />
                    Account Information
                  </h2>
                  {!isEditing ? (
                    <Button
                      onClick={handleEditClick}
                      variant="outline"
                      className="border-primary/20 hover:bg-primary/5 gap-2 bg-transparent"
                    >
                      <Edit2 size={16} />
                      Edit
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button
                        onClick={handleSaveChanges}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
                      >
                        Save Changes
                      </Button>
                      <Button
                        onClick={handleCancel}
                        variant="outline"
                        className="border-primary/20 hover:bg-primary/5 bg-transparent text-sm"
                      >
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>

                {!isEditing ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        First Name
                      </label>
                      <p className="text-lg font-semibold text-foreground">{user.firstName}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Last Name
                      </label>
                      <p className="text-lg font-semibold text-foreground">{user.lastName}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Email Address
                      </label>
                      <p className="text-lg font-semibold text-foreground">{user.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Phone Number
                      </label>
                      <p className="text-lg font-semibold text-foreground">{user.phone}</p>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Service Address
                      </label>
                      <p className="text-lg font-semibold text-foreground">{user.address}</p>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={editData?.firstName || ''}
                        onChange={e => handleEditChange('firstName', e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={editData?.lastName || ''}
                        onChange={e => handleEditChange('lastName', e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={editData?.email || ''}
                        onChange={e => handleEditChange('email', e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={editData?.phone || ''}
                        onChange={e => handleEditChange('phone', e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service Address
                      </label>
                      <input
                        type="text"
                        value={editData?.address || ''}
                        onChange={e => handleEditChange('address', e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                      />
                    </div>
                  </div>
                )}
              </Card>

              {/* Current Subscription */}
              {subscription && subscription.status !== 'cancelled' && (
                <Card className="p-8 border-2 border-primary/20 bg-primary/5">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Calendar className="text-primary" size={28} />
                    Current Subscription
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Plan
                      </label>
                      <p className="text-lg font-bold text-primary">{subscription.plan}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Frequency
                      </label>
                      <p className="text-lg font-semibold text-foreground">{subscription.frequency}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Number of Bins
                      </label>
                      <p className="text-lg font-semibold text-foreground">{subscription.bins}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Monthly Cost
                      </label>
                      <p className="text-lg font-bold text-primary">${subscription.totalPrice.toFixed(2)}</p>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Next Billing Date
                      </label>
                      <p className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Clock size={18} className="text-primary" />
                        {getNextBillingDate()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg mb-6">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <p className="text-sm text-foreground">
                      Auto-renewal: <strong>Enabled</strong>
                    </p>
                  </div>

                  <Button
                    onClick={() => setShowCancelModal(true)}
                    variant="outline"
                    className="border-red-200 hover:bg-red-50 text-red-600 gap-2"
                  >
                    <Trash2 size={18} />
                    Cancel Subscription
                  </Button>
                </Card>
              )}

              {/* Cancelled Subscription */}
              {subscription && subscription.status === 'cancelled' && (
                <Card className="p-8 border-2 border-red-200 bg-red-50">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="text-red-600" size={28} />
                    <h2 className="text-2xl font-bold text-red-900">Subscription Cancelled</h2>
                  </div>
                  <p className="text-red-700 mb-6">
                    Your subscription was cancelled on {new Date().toLocaleDateString()}. You can reactivate it anytime.
                  </p>
                  <Link href="/faq-pricing">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Reactivate Subscription
                    </Button>
                  </Link>
                </Card>
              )}
            </div>

            {/* Quick Links Sidebar */}
            <div>
              <Card className="p-6 border-2 border-border/50 sticky top-24">
                <h3 className="text-lg font-bold text-foreground mb-6">Quick Links</h3>
                <div className="space-y-3">
                  <Link href="/faq-pricing">
                    <Button variant="outline" className="w-full justify-start border-primary/20 hover:bg-primary/5 bg-transparent">
                      View All Plans
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full justify-start border-primary/20 hover:bg-primary/5 bg-transparent">
                      Contact Support
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline" className="w-full justify-start border-primary/20 hover:bg-primary/5 bg-transparent">
                      About Smiling Bins
                    </Button>
                  </Link>
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="w-full justify-start border-red-200 hover:bg-red-50 text-red-600 bg-transparent"
                  >
                    Sign Out
                  </Button>
                </div>

                <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Need help?</strong> Contact our support team at (709) XXX-XXXX or info@smilingbins.ca
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cancel Subscription Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="p-8 max-w-md w-full border-2 border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">Cancel Subscription?</h3>
            <p className="text-muted-foreground mb-6">
              We're sorry to see you go! Can you tell us why you're cancelling?
            </p>

            <textarea
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
              placeholder="Your feedback helps us improve..."
              className="w-full p-3 border border-border rounded-lg mb-6 resize-none h-24 text-sm"
            />

            <div className="flex gap-4">
              <Button
                onClick={() => setShowCancelModal(false)}
                variant="outline"
                className="flex-1 border-primary/20 hover:bg-primary/5"
              >
                Keep Subscription
              </Button>
              <Button
                onClick={handleCancelSubscription}
                disabled={!cancelReason}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white"
              >
                Confirm Cancellation
              </Button>
            </div>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  )
}
