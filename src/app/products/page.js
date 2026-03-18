"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState("all")
  const categories = ["all", "vegetables", "fruits", "spices", "herbs"]

  useEffect(() => {
    fetchProducts()
  }, [category])

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products?limit=100")
      const data = await response.json()
      let filtered = data.data || []

      if (category !== "all") {
        filtered = filtered.filter((p) =>
          p.category?.toLowerCase().includes(category)
        )
      }

      setProducts(filtered)
    } catch (error) {
      console.error("Failed to fetch products:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Our Products</h1>
          <p className="mt-2 text-gray-600">
            Premium dehydrated foods sourced and processed with care
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full transition ${
                category === cat
                  ? "bg-green-700 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading products...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                {product.image_url && (
                  <div className="h-48 bg-gray-200 rounded-t-lg overflow-hidden">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {product.short_description || product.description}
                  </p>
                  {product.price && (
                    <p className="mt-4 text-2xl font-bold text-green-700">
                      ${product.price}
                    </p>
                  )}
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-4 inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
