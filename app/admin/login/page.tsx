'use client'

import React, { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Lock, Mail } from 'lucide-react'
import Link from 'next/link'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Demo admin credentials
    const adminEmail = 'admin@smilingbins.com'
    const adminPassword = 'admin123'

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem('adminAuth', 'true')
      localStorage.setItem('adminEmail', email)
      window.location.href = '/admin'
    } else {
      setError('Invalid email or password. Try admin@smilingbins.com / admin123')
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex-1">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Admin Login</h1>
            <p className="text-muted-foreground">Access the admin panel to manage bookings</p>
          </div>

          <Card className="p-8 border-2 border-border/50">
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-100 border border-red-300 rounded-lg">
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="admin@smilingbins.com"
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/20 text-primary-foreground py-3 rounded-lg font-semibold transition-all"
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Demo Credentials:</strong>
                <br />
                Email: admin@smilingbins.com
                <br />
                Password: admin123
              </p>
            </div>
          </Card>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Back to{' '}
              <Link href="/" className="text-primary hover:text-primary/80 font-semibold">
                Home
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
