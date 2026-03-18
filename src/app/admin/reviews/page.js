"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function ReviewsManagement() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [filter, setFilter] = useState("unpublished")
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("admin_token")
    if (!token) {
      router.push("/admin/login")
      return
    }

    fetchReviews()
  }, [filter, router])

  const fetchReviews = async () => {
    try {
      const url =
        filter === "unpublished"
          ? "/api/reviews?published=false"
          : "/api/reviews?published=true"

      const response = await fetch(url)
      const data = await response.json()
      setReviews(data.data || [])
    } catch (err) {
      setError("Failed to fetch reviews")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const togglePublish = async (id, published) => {
    try {
      const response = await fetch(`/api/reviews/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !published }),
      })

      if (response.ok) {
        setReviews(
          reviews.map((r) =>
            r.id === id ? { ...r, published: !published } : r
          )
        )
      }
    } catch (err) {
      console.error("Failed to update review:", err)
    }
  }

  const deleteReview = async (id) => {
    if (!confirm("Are you sure you want to delete this review?")) return

    try {
      const response = await fetch(`/api/reviews/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setReviews(reviews.filter((r) => r.id !== id))
      }
    } catch (err) {
      console.error("Failed to delete review:", err)
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
          <h1 className="text-3xl font-bold text-gray-900">Client Reviews</h1>
          <Link
            href="/admin/reviews/new"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            + Add Review
          </Link>
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
          <button
            onClick={() => setFilter("unpublished")}
            className={`px-4 py-2 rounded transition ${
              filter === "unpublished"
                ? "bg-green-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Unpublished
          </button>
          <button
            onClick={() => setFilter("published")}
            className={`px-4 py-2 rounded transition ${
              filter === "published"
                ? "bg-green-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Published
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                  Client Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                  Review
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
              {reviews.map((review) => (
                <tr key={review.id}>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {review.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {review.company}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <p className="truncate max-w-xs">{review.review_text}</p>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      onClick={() => togglePublish(review.id, review.published)}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        review.published
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {review.published ? "Published" : "Draft"}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-sm space-x-2">
                    <Link
                      href={`/admin/reviews/${review.id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteReview(review.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {reviews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No reviews found</p>
              <Link
                href="/admin/reviews/new"
                className="mt-4 inline-block text-green-600 hover:text-green-800"
              >
                Add your first review
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
