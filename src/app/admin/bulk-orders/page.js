"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function BulkOrdersManagement() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [filter, setFilter] = useState("pending")
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("admin_token")
    if (!token) {
      router.push("/admin/login")
      return
    }

    fetchOrders()
  }, [filter, router])

  const fetchOrders = async () => {
    try {
      const url = filter ? `/api/bulk-orders?status=${filter}` : "/api/bulk-orders"
      const response = await fetch(url)
      const data = await response.json()
      setOrders(data.data || [])
    } catch (err) {
      setError("Failed to fetch bulk orders")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const updateOrderStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`/api/bulk-orders/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      })

      if (response.ok) {
        setOrders(
          orders.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
        )
      }
    } catch (err) {
      console.error("Failed to update order:", err)
    }
  }

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    )

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Bulk Orders</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        {/* Filter Tabs */}
        <div className="mb-6 flex gap-2">
          {["pending", "in_progress", "completed", "cancelled"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded transition ${
                filter === status
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                  Client Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {order.client_name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {order.client_email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {order.client_company}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {order.quantity}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <select
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                      className="px-2 py-1 rounded text-xs font-medium border border-gray-300"
                    >
                      <option value="pending">Pending</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <Link
                      href={`/admin/bulk-orders/${order.id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {orders.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No bulk orders found</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
