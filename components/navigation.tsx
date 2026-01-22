"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg group-hover:shadow-primary/30 transition-shadow">
              SB
            </div>
            <span className="hidden sm:inline font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              Smiling Bins
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/">
              <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/5 rounded-lg">
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/5 rounded-lg">
                About Us
              </Button>
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary hover:bg-primary/5 rounded-lg flex items-center gap-1"
              >
                Services
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
              </Button>
              <div className="absolute left-0 mt-0 w-56 bg-card border border-border/40 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 backdrop-blur-sm">
                <Link
                  href="/services/bin-cleaning"
                  className="block px-4 py-3 hover:bg-primary/5 first:rounded-t-xl border-b border-border/20 last:border-b-0"
                >
                  <div className="font-semibold text-foreground text-sm">Garbage Bin Cleaning</div>
                  <div className="text-xs text-muted-foreground">Residential & Commercial</div>
                </Link>
                <Link
                  href="/services/pressure-washing"
                  className="block px-4 py-3 hover:bg-primary/5 border-b border-border/20"
                >
                  <div className="font-semibold text-foreground text-sm">Pressure Washing</div>
                  <div className="text-xs text-muted-foreground">Exterior cleaning</div>
                </Link>
                <Link
                  href="/services/residential-carpet"
                  className="block px-4 py-3 hover:bg-primary/5 border-b border-border/20"
                >
                  <div className="font-semibold text-foreground text-sm">Residential Carpet Cleaning</div>
                  <div className="text-xs text-muted-foreground">Deep cleaning for homes</div>
                </Link>
                <Link
                  href="/services/commercial-carpet"
                  className="block px-4 py-3 hover:bg-primary/5 border-b border-border/20"
                >
                  <div className="font-semibold text-foreground text-sm">Commercial Carpet Cleaning</div>
                  <div className="text-xs text-muted-foreground">Quote-based pricing</div>
                </Link>
                <Link href="/services/upholstery" className="block px-4 py-3 hover:bg-primary/5 last:rounded-b-xl">
                  <div className="font-semibold text-foreground text-sm">Professional Upholstery Cleaning</div>
                  <div className="text-xs text-muted-foreground">Furniture & mattresses</div>
                </Link>
              </div>
            </div>

            <Link href="/faq-pricing">
              <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/5 rounded-lg">
                FAQ & Pricing
              </Button>
            </Link>
              <div className="flex items-center gap-2 ml-4">
                  {typeof window !== 'undefined' && localStorage.getItem('user') ? (
                      <>
                          <Link href="/profile">
                              <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/5 rounded-lg">
                                  My Account
                              </Button>
                          </Link>
                          <Link href="/contact">
                              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/20 text-primary-foreground rounded-lg font-semibold transition-all">
                                  Contact Us
                              </Button>
                          </Link>
                      </>
                  ) : (
                      <>
                          <Link href="/signin">
                              <Button variant="outline" className="border-primary/30 hover:bg-primary/5 text-primary rounded-lg font-semibold bg-transparent">
                                  Sign In
                              </Button>
                          </Link>
                          <Link href="/signup">
                              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/20 text-primary-foreground rounded-lg font-semibold transition-all">
                                  Sign Up
                              </Button>
                          </Link>
                      </>
                  )}
              </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border/40 bg-background/95 backdrop-blur-sm">
            <Link href="/" className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg">
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg"
            >
              About Us
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg flex items-center justify-between"
              >
                Services
                <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div className="bg-primary/5 pl-4 border-l-2 border-primary/20">
                  <Link
                    href="/services/bin-cleaning"
                    className="block px-4 py-2 text-sm text-foreground hover:text-primary"
                  >
                    Garbage Bin Cleaning
                  </Link>
                  <Link
                    href="/services/pressure-washing"
                    className="block px-4 py-2 text-sm text-foreground hover:text-primary"
                  >
                    Pressure Washing
                  </Link>
                  <Link
                    href="/services/residential-carpet"
                    className="block px-4 py-2 text-sm text-foreground hover:text-primary"
                  >
                    Residential Carpet Cleaning
                  </Link>
                  <Link
                    href="/services/commercial-carpet"
                    className="block px-4 py-2 text-sm text-foreground hover:text-primary"
                  >
                    Commercial Carpet Cleaning
                  </Link>
                  <Link
                    href="/services/upholstery"
                    className="block px-4 py-2 text-sm text-foreground hover:text-primary"
                  >
                    Professional Upholstery Cleaning
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/faq-pricing"
              className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg"
            >
              FAQ & Pricing
            </Link>
              <div className="px-4 py-3 flex gap-2">
                  <Link href="/signup" className="flex-1">
                      <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/5 text-primary rounded-lg font-semibold bg-transparent">
                          Sign Up
                      </Button>
                  </Link>
                  <Link href="/contact" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-semibold">
                          Contact Us
                      </Button>
                  </Link>
              </div>
          </div>
        )}
      </div>
    </nav>
  )
}
