"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function ProductsManagement() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("admin_token")
    if (!token) {
      router.push("/admin/login")
      return
    }

    fetchProducts()
  }, [router])

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products?limit=100")
      const data = await response.json()
      setProducts(data.data || [])
    } catch (err) {
      setError("Failed to fetch products")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const deleteProduct = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setProducts(products.filter((p) => p.id !== id))
      } else {
        setError("Failed to delete product")
      }
    } catch (err) {
      setError("Failed to delete product")
      console.error(err)
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
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <Link
            href="/admin/products/new"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            + Add Product
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                  Price
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
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        product.is_active
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {product.is_active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm space-x-2">
                    <Link
                      href={`/admin/products/${product.id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found</p>
              <Link
                href="/admin/products/new"
                className="mt-4 inline-block text-green-600 hover:text-green-800"
              >
                Create your first product
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
