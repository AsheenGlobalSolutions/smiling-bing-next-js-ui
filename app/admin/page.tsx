'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { DollarSign, Users, Calendar, TrendingUp, Settings, LogOut, ArrowUp } from 'lucide-react'

interface Booking {
  id: string
  customerName: string
  email: string
  phone: string
  address: string
  plan: string
  bins: number
  frequency: string
  status: 'scheduled' | 'completed' | 'cancelled'
  date: string
  amount: number
}

export default function AdminPanel() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')

  // Monthly revenue data
  const [monthlyRevenueData] = useState([
    { month: 'Jan', revenue: 4200, bookings: 12 },
    { month: 'Feb', revenue: 5100, bookings: 15 },
    { month: 'Mar', revenue: 4800, bookings: 14 },
    { month: 'Apr', revenue: 6200, bookings: 18 },
    { month: 'May', revenue: 7100, bookings: 22 },
    { month: 'Jun', revenue: 8500, bookings: 26 },
  ])

  // Plan distribution data
  const [planDistribution] = useState([
    { name: 'Monthly', value: 45, color: '#4CAF50' },
    { name: 'Bi-Weekly', value: 35, color: '#4FC3F7' },
    { name: 'Quarterly', value: 15, color: '#FDD835' },
    { name: 'One-Time', value: 5, color: '#FF9800' },
  ])

  // Service area data
  const [serviceAreaData] = useState([
    { location: "St. John's", customers: 125, revenue: 3500 },
    { location: 'Mount Pearl', customers: 85, revenue: 2400 },
    { location: 'Paradise', customers: 65, revenue: 1800 },
    { location: 'CBS', customers: 45, revenue: 1200 },
    { location: 'Torbay', customers: 35, revenue: 950 },
  ])

  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: '1',
      customerName: 'Lisa Johnson',
      email: 'lisa@example.com',
      phone: '(709) 555-0101',
      address: '123 Main St, St. John\'s',
      plan: 'Monthly',
      bins: 1,
      frequency: 'Once per month',
      status: 'scheduled',
      date: '2026-01-25',
      amount: 35,
    },
    {
      id: '2',
      customerName: 'David Smith',
      email: 'david@example.com',
      phone: '(709) 555-0102',
      address: '456 Oak Ave, Paradise',
      plan: 'Bi-Weekly',
      bins: 2,
      frequency: 'Every 2 weeks',
      status: 'completed',
      date: '2026-01-21',
      amount: 73,
    },
    {
      id: '3',
      customerName: 'Amanda Brown',
      email: 'amanda@example.com',
      phone: '(709) 555-0103',
      address: '789 Pine Rd, Mount Pearl',
      plan: 'Quarterly',
      bins: 1,
      frequency: 'Every 3 months',
      status: 'scheduled',
      date: '2026-02-10',
      amount: 45,
    },
    {
      id: '4',
      customerName: 'Michael Wilson',
      email: 'michael@example.com',
      phone: '(709) 555-0104',
      address: '321 Elm St, CBS',
      plan: 'Monthly',
      bins: 2,
      frequency: 'Once per month',
      status: 'completed',
      date: '2026-01-20',
      amount: 70,
    },
  ])

  const [stats, setStats] = useState({
    totalBookings: 0,
    totalCustomers: 0,
    totalRevenue: 0,
    activeSubscriptions: 0,
    completedThisMonth: 0,
    averageOrderValue: 0,
  })

  useEffect(() => {
    // Check if user is admin
    const adminAuth = localStorage.getItem('adminAuth')
    if (!adminAuth || adminAuth !== 'true') {
      window.location.href = '/admin/login'
    } else {
      setIsAdmin(true)
    }

    // Calculate stats
    const completedBookings = bookings.filter(b => b.status !== 'cancelled')
    const revenue = completedBookings.reduce((sum, booking) => sum + booking.amount, 0)
    const thisMonthBookings = bookings.filter(b => b.status === 'completed').length

    setStats({
      totalBookings: bookings.length,
      totalCustomers: new Set(bookings.map(b => b.email)).size,
      totalRevenue: revenue,
      activeSubscriptions: bookings.filter(b => b.status === 'scheduled').length,
      completedThisMonth: thisMonthBookings,
      averageOrderValue: completedBookings.length > 0 ? Math.round(revenue / completedBookings.length) : 0,
    })
  }, [bookings])

  const handleStatusChange = (id: string, newStatus: 'scheduled' | 'completed' | 'cancelled') => {
    setBookings(
      bookings.map(b => (b.id === id ? { ...b, status: newStatus } : b)),
    )
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    window.location.href = '/admin/login'
  }

  if (!isAdmin) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 py-12 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage bookings, revenue, and customer metrics</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-primary/30 hover:bg-primary/5 gap-2 bg-transparent"
            >
              <LogOut size={18} />
              Logout
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
            <Card className="p-6 border-border/50 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
                  <p className="text-2xl font-bold text-foreground">${stats.totalRevenue}</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <DollarSign className="text-primary" size={24} />
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50 bg-gradient-to-br from-secondary/5 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Bookings</p>
                  <p className="text-2xl font-bold text-foreground">{stats.totalBookings}</p>
                </div>
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Calendar className="text-secondary" size={24} />
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50 bg-gradient-to-br from-accent/5 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Customers</p>
                  <p className="text-2xl font-bold text-foreground">{stats.totalCustomers}</p>
                </div>
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="text-accent" size={24} />
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Subs</p>
                  <p className="text-2xl font-bold text-foreground">{stats.activeSubscriptions}</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <TrendingUp className="text-primary" size={24} />
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50 bg-gradient-to-br from-secondary/5 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Completed</p>
                  <p className="text-2xl font-bold text-foreground">{stats.completedThisMonth}</p>
                </div>
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <ArrowUp className="text-secondary" size={24} />
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50 bg-gradient-to-br from-accent/5 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Avg Order</p>
                  <p className="text-2xl font-bold text-foreground">${stats.averageOrderValue}</p>
                </div>
                <div className="p-3 bg-accent/10 rounded-lg">
                  <DollarSign className="text-accent" size={24} />
                </div>
              </div>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Monthly Revenue Chart */}
            <Card className="p-6 border-border/50">
              <h3 className="text-lg font-bold text-foreground mb-4">Monthly Revenue & Bookings</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="revenue" fill="#4CAF50" name="Revenue ($)" />
                  <Bar yAxisId="right" dataKey="bookings" fill="#4FC3F7" name="Bookings" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Plan Distribution Pie Chart */}
            <Card className="p-6 border-border/50">
              <h3 className="text-lg font-bold text-foreground mb-4">Plan Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={planDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {planDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Revenue Trend Line Chart */}
          <Card className="p-6 border-border/50 mb-8">
            <h3 className="text-lg font-bold text-foreground mb-4">Revenue Trend (Last 6 Months)</h3>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={monthlyRevenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#4CAF50"
                  strokeWidth={2}
                  dot={{ fill: '#4CAF50', r: 5 }}
                  activeDot={{ r: 7 }}
                  name="Monthly Revenue ($)"
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Service Area Performance */}
          <Card className="p-6 border-border/50 mb-8">
            <h3 className="text-lg font-bold text-foreground mb-4">Service Area Performance</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Location</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Customers</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Revenue</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">% of Total</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceAreaData.map((area, idx) => {
                    const totalRevenue = serviceAreaData.reduce((sum, a) => sum + a.revenue, 0)
                    const percentage = ((area.revenue / totalRevenue) * 100).toFixed(1)
                    return (
                      <tr key={idx} className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-3 px-4 text-foreground">{area.location}</td>
                        <td className="py-3 px-4 text-foreground">{area.customers}</td>
                        <td className="py-3 px-4 text-foreground font-semibold">${area.revenue}</td>
                        <td className="py-3 px-4 text-foreground">{percentage}%</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Recent Bookings */}
          <Card className="p-6 border-border/50">
            <h3 className="text-lg font-bold text-foreground mb-4">Recent Bookings</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Customer</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Plan</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Amount</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map(booking => (
                    <tr key={booking.id} className="border-b border-border/50 hover:bg-muted/30">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-foreground">{booking.customerName}</p>
                          <p className="text-xs text-muted-foreground">{booking.email}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-foreground">{booking.plan}</td>
                      <td className="py-3 px-4 text-foreground">{booking.date}</td>
                      <td className="py-3 px-4 font-semibold text-foreground">${booking.amount}</td>
                      <td className="py-3 px-4">
                        <select
                          value={booking.status}
                          onChange={e =>
                            handleStatusChange(
                              booking.id,
                              e.target.value as 'scheduled' | 'completed' | 'cancelled',
                            )
                          }
                          className={`px-3 py-1 rounded-lg text-sm font-medium cursor-pointer ${
                            booking.status === 'completed'
                              ? 'bg-green-100 text-green-800'
                              : booking.status === 'scheduled'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-red-100 text-red-800'
                          }`}
                        >
                          <option value="scheduled">Scheduled</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
