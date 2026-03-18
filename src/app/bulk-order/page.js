"use client"

import { useState } from "react"

export default function BulkOrderPage() {
  const [formData, setFormData] = useState({
    company_name: "",
    contact_person: "",
    email: "",
    phone: "",
    product_interest: "",
    quantity: "",
    delivery_timeline: "",
    special_requirements: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      const response = await fetch("/api/bulk-orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit order request")
      }

      setSuccess(
        "Thank you! We've received your bulk order request. We'll contact you soon."
      )
      setFormData({
        company_name: "",
        contact_person: "",
        email: "",
        phone: "",
        product_interest: "",
        quantity: "",
        delivery_timeline: "",
        special_requirements: "",
      })

      setTimeout(() => setSuccess(""), 5000)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bulk Order Request
          </h1>
          <p className="text-gray-600 mb-8">
            Request a custom bulk order of our premium dehydrated products. Our
            team will review your request and contact you with a personalized
            quote.
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Your company name"
                />
              </div>

              {/* Contact Person */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contact Person *
                </label>
                <input
                  type="text"
                  name="contact_person"
                  value={formData.contact_person}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="your.email@company.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Product Interest */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Product of Interest *
              </label>
              <input
                type="text"
                name="product_interest"
                value={formData.product_interest}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="e.g., Dehydrated Vegetables, Spices & Powders"
              />
            </div>

            {/* Quantity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Quantity (in kg) *
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  min="1"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="1000"
                />
              </div>

              {/* Delivery Timeline */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Delivery Timeline *
                </label>
                <select
                  name="delivery_timeline"
                  value={formData.delivery_timeline}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select timeline</option>
                  <option value="urgent">Urgent (1-2 weeks)</option>
                  <option value="standard">Standard (3-4 weeks)</option>
                  <option value="flexible">Flexible (1-2 months)</option>
                </select>
              </div>
            </div>

            {/* Special Requirements */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Special Requirements / Notes
              </label>
              <textarea
                name="special_requirements"
                value={formData.special_requirements}
                onChange={handleChange}
                rows="5"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Any special requirements, packaging preferences, certifications needed, etc."
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-700 text-white px-6 py-3 rounded-md font-medium hover:bg-green-800 transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Bulk Order Request"}
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to our terms and conditions.
              We'll contact you within 24-48 hours.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
