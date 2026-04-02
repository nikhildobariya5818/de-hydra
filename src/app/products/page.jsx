'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { products, categories, forms } from '@/data/products'
import AnimatedSection from '@/components/AnimatedSection'

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All Products")
  const [activeForm,     setActiveForm]     = useState("")

  const filtered = products.filter(p => {
    const catMatch  = activeCategory === "All Products" || p.category === activeCategory
    const formMatch = !activeForm || p.form === activeForm
    return catMatch && formMatch
  })

  return (
    <>
      {/* Hero */}
      <AnimatedSection>
        <section className="relative bg-teal-600 py-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/images/products/hero-product-flatlay.png" alt="Products" fill className="object-cover" />
          </div>
          <div className="container-xl relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold text-white">Our Product Range</motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-teal-100 mt-3 text-lg">Premium Dehydrated Foods for Global B2B Supply</motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-teal-200 text-sm mt-3">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Products</span>
            </motion.p>
          </div>
        </section>
      </AnimatedSection>

      {/* Filters */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="container-xl py-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((c, idx) => (
                <motion.button 
                  key={c} 
                  onClick={() => setActiveCategory(c)}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === c ? "bg-teal-600 text-white shadow-sm" : "bg-gray-100 text-gray-600 hover:bg-teal-50 hover:text-teal-600"
                  }`}>{c}</motion.button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 font-medium">Form:</span>
              <motion.button 
                onClick={() => setActiveForm("")}
                whileHover={{ scale: 1.05 }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${!activeForm ? "bg-teal-500 text-white" : "border border-gray-200 text-gray-500"}`}>All</motion.button>
              {forms.map(f => (
                <motion.button 
                  key={f} 
                  onClick={() => setActiveForm(f)}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${activeForm === f ? "bg-teal-500 text-white" : "border border-gray-200 text-gray-500 hover:border-teal-400"}`}>{f}</motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Product Grid */}
      <AnimatedSection>
        <section className="section-pad bg-gray-50">
          <div className="container-xl">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sm text-gray-400 mb-6">{filtered.length} products found</motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Custom CTA */}
      <AnimatedSection variant="slideInUp">
        <section className="section-pad bg-white">
          <div className="container-xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative bg-teal-50 rounded-2xl p-10 text-center overflow-hidden">
              <h2 className="text-3xl font-bold text-brand-dark">Can't find what you need?</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">We offer custom dehydration solutions, private labeling, and bespoke blends tailored to your exact industrial specifications.</p>
              <Link href="/contact" className="btn-primary mt-6 text-base px-8">Contact Us for Custom Orders</Link>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </>
  )
}

function ProductCard({ product }) {
  return (
    <div className="card overflow-hidden group hover:-translate-y-1 transition-transform duration-200">
      <div className="relative aspect-video overflow-hidden">
        <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags?.map(tag => (
            <span key={tag} className={`badge text-[10px] ${tag === "Top Seller" ? "bg-orange-500 text-white" : tag === "Organic" ? "bg-green-500 text-white" : "bg-teal-500 text-white"}`}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-brand-dark text-base leading-snug">{product.name}</h3>
        <p className="text-gray-500 text-xs mt-1.5 leading-relaxed line-clamp-2">{product.description}</p>
        <div className="flex items-center gap-2 mt-3">
          <span className="badge bg-teal-50 text-teal-600 text-[10px]">{product.category}</span>
          <span className="badge bg-gray-100 text-gray-500 text-[10px]">{product.form}</span>
        </div>
        <div className="flex items-center gap-1.5 mt-3 text-xs text-gray-400">
          <span>📦</span>
          <span>Min. Order: <strong className="text-brand-dark">{product.moq}</strong></span>
        </div>
        <Link href={`/products/${product.slug}`} className="mt-4 block w-full bg-teal-600 hover:bg-teal-700 text-white text-center font-semibold py-2.5 rounded-xl text-sm transition-colors">
          Request Quote
        </Link>
      </div>
    </div>
  )
}
