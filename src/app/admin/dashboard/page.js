"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function AdminDashboard() {
  const [user, setUser] = useState(null)
  const [stats, setStats] = useState({
    products: 0,
    certifications: 0,
    reviews: 0,
    bulkOrders: 0,
  })
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("admin_user")
    if (!storedUser) {
      router.push("/admin/login")
      return
    }

    setUser(JSON.parse(storedUser))
    fetchStats()
  }, [router])

  const fetchStats = async () => {
    try {
      const [products, certs, reviews, orders] = await Promise.all([
        fetch("/api/products").then((r) => r.json()),
        fetch("/api/certifications").then((r) => r.json()),
        fetch("/api/reviews?published=false").then((r) => r.json()),
        fetch("/api/bulk-orders").then((r) => r.json()),
      ])

      setStats({
        products: products.count || 0,
        certifications: certs.count || 0,
        reviews: reviews.count || 0,
        bulkOrders: orders.count || 0,
      })
    } catch (error) {
      console.error("Failed to fetch stats:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("admin_token")
    localStorage.removeItem("admin_user")
    router.push("/admin/login")
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            De'Hydra Admin Panel
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium">Products</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {stats.products}
            </p>
            <Link
              href="/admin/products"
              className="mt-4 inline-block text-green-600 hover:text-green-800"
            >
              Manage →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium">
              Certifications
            </h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {stats.certifications}
            </p>
            <Link
              href="/admin/certifications"
              className="mt-4 inline-block text-green-600 hover:text-green-800"
            >
              Manage →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium">Client Reviews</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {stats.reviews}
            </p>
            <Link
              href="/admin/reviews"
              className="mt-4 inline-block text-green-600 hover:text-green-800"
            >
              Manage →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium">Bulk Orders</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {stats.bulkOrders}
            </p>
            <Link
              href="/admin/bulk-orders"
              className="mt-4 inline-block text-green-600 hover:text-green-800"
            >
              Manage →
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/admin/products/new"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-center"
            >
              Add Product
            </Link>
            <Link
              href="/admin/certifications/new"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center"
            >
              Add Certification
            </Link>
            <Link
              href="/admin/blog/new"
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition text-center"
            >
              Add Blog Post
            </Link>
            <Link
              href="/admin/reviews"
              className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition text-center"
            >
              Review Requests
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
