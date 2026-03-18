"use client"
import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "", company: "", role: "", email: "",
    phone: "", country: "", product: "", quantity: "", message: "", agree: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-gray-50 py-16">
        <div className="container-xl grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight">
              Get in Touch for<br />
              <span className="text-teal-500">Bulk Orders</span>
            </h1>
            <p className="text-gray-500 mt-4 text-base leading-relaxed max-w-lg">
              Specialized B2B assistance for global distribution, wholesale supply, and customized dehydration solutions.
            </p>
          </div>
          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden h-64 bg-gradient-to-br from-teal-400 to-teal-700 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl mb-2">🏭</div>
              <p className="font-semibold">Our Facility</p>
              <p className="text-teal-200 text-sm">Replace with facility photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM + DETAILS ── */}
      <section className="section-pad bg-white">
        <div className="container-xl grid lg:grid-cols-5 gap-10">

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600">📋</div>
                <h2 className="text-xl font-bold text-brand-dark">B2B Contact Form</h2>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-brand-dark">Inquiry Sent!</h3>
                  <p className="text-gray-500 mt-2 text-sm">Our B2B team will respond within 12 business hours.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary mt-6">
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField label="Full Name *" placeholder="John Doe"
                      value={form.fullName} onChange={v => setForm({...form, fullName: v})} required />
                    <FormField label="Company Name *" placeholder="Global Trade Inc."
                      value={form.company} onChange={v => setForm({...form, company: v})} required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField label="Role / Designation" placeholder="Procurement Manager"
                      value={form.role} onChange={v => setForm({...form, role: v})} />
                    <FormField label="Work Email *" placeholder="john@company.com" type="email"
                      value={form.email} onChange={v => setForm({...form, email: v})} required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField label="Phone Number" placeholder="+1 (555) 000-0000" type="tel"
                      value={form.phone} onChange={v => setForm({...form, phone: v})} />
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Country</label>
                      <select
                        value={form.country}
                        onChange={e => setForm({...form, country: e.target.value})}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-400 transition-colors text-gray-600"
                      >
                        <option value="">Select Country</option>
                        {["India","UAE","USA","UK","Germany","Singapore","Saudi Arabia","Australia","Canada","Other"].map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Primary Product Interest</label>
                      <select
                        value={form.product}
                        onChange={e => setForm({...form, product: e.target.value})}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-400 text-gray-600"
                      >
                        <option value="">Select Product</option>
                        {["Dehydrated Vegetables","Dehydrated Fruits","Spices & Powders","Herbs & Greens","Private Label / Bulk","Custom Blend"].map(p => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                    <FormField label="Monthly Quantity (Max)" placeholder="e.g. 10 MT"
                      value={form.quantity} onChange={v => setForm({...form, quantity: v})} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message</label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm({...form, message: e.target.value})}
                      placeholder="How can we help you?"
                      rows={4}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-400 transition-colors resize-none"
                    />
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.agree}
                      onChange={e => setForm({...form, agree: e.target.checked})}
                      className="mt-0.5 accent-teal-600"
                    />
                    <span className="text-xs text-gray-500">
                      I agree to the storage and processing of my data according to the privacy policy.
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl text-sm transition-colors"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Company Details */}
          <div className="lg:col-span-2 space-y-5">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-teal-500 rounded-lg flex items-center justify-center text-white text-lg">🌿</div>
                <div>
                  <p className="font-bold text-brand-dark text-sm">De'hydra Food Venture</p>
                  <p className="text-teal-500 text-xs">Powered by Sryshaya Group</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "📍", label: "Registered Office", val: "123, Industrial Estate Phase-II, Ahmedabad, Gujarat, 364001 India" },
                  { icon: "📧", label: "Email Address",     val: "export@dehydrafoods.com\ninfo@dehydrafoods.com" },
                  { icon: "📞", label: "Phone Support",     val: "+91 98765 43210\n+91 278 222 3333" },
                  { icon: "🕒", label: "Business Hours",    val: "Mon – Sat: 09:00 AM – 06:00 PM (IST)\nSunday: Closed" },
                ].map(item => (
                  <div key={item.label} className="flex gap-3">
                    <span className="text-teal-500 text-base mt-0.5 shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-xs font-semibold text-brand-dark">{item.label}</p>
                      <p className="text-gray-500 text-xs mt-0.5 whitespace-pre-line leading-relaxed">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl text-sm transition-colors w-full"
              >
                💬 WhatsApp for Business
              </a>
            </div>

            {/* Map */}
            <div className="card p-6 bg-teal-50 border border-teal-100">
              <div className="text-center mb-3">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="font-semibold text-brand-dark text-sm">Visit Our Facility</p>
                <p className="text-gray-500 text-xs mt-1">Experience our advanced dehydration technology and hygiene standards first-hand.</p>
              </div>
              <a href="#" className="text-teal-600 text-sm font-semibold hover:underline flex items-center justify-center gap-1">
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESPONSE TIME BANNER ── */}
      <section className="bg-teal-700 py-8">
        <div className="container-xl flex items-center gap-4">
          <span className="text-2xl">📧</span>
          <p className="text-white font-semibold text-sm">
            Expecting a reply within <strong>12 business hours.</strong>{" "}
            <span className="text-teal-200 font-normal">Our dedicated B2B team is here to help with all bulk inquiries and sample requests.</span>
          </p>
        </div>
      </section>
    </>
  )
}

function FormField({ label, placeholder, type = "text", value, onChange, required }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-400 transition-colors placeholder-gray-300"
      />
    </div>
  )
}
