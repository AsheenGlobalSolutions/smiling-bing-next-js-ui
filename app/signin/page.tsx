'use client'

import React from "react"
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { useState } from 'react'
import { LogIn, AlertCircle } from 'lucide-react'

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate authentication
    try {
      if (!formData.email || !formData.password) {
        setError('Please fill in all fields')
        setIsLoading(false)
        return
      }

      if (!formData.email.includes('@')) {
        setError('Please enter a valid email address')
        setIsLoading(false)
        return
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Store user session (in real app, this would be in httpOnly cookie)
      localStorage.setItem('user', JSON.stringify({
        email: formData.email,
        name: formData.email.split('@')[0],
      }))

      window.location.href = '/profile'
    } catch (err) {
      setError('Sign in failed. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex-1">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <LogIn className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Welcome Back
            </h1>
            <p className="text-lg text-muted-foreground">
              Sign in to manage your subscription and schedule
            </p>
          </div>

          <Card className="p-8 border-2 border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  disabled={isLoading}
                  className="h-11"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  disabled={isLoading}
                  className="h-11"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/20 text-primary-foreground h-11 font-semibold rounded-lg transition-all"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>

              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-border"></div>
                <span className="text-sm text-muted-foreground">New to Smiling Bins?</span>
                <div className="flex-1 h-px bg-border"></div>
              </div>

              <Link href="/signup">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 h-11 font-semibold rounded-lg bg-transparent"
                >
                  Create an Account
                </Button>
              </Link>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-8">
              Demo: Use any email to sign in (no password validation in demo mode)
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
