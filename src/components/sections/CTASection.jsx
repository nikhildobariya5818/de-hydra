'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CTASection({ data }) {
  if (!data) return null

  const cta = data.cta
  const [email, setEmail] = useState('')

  return (
    <section className="bg-teal-700">
      <div className="container-xl py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{cta.title}</h2>
            <p className="text-teal-200 mt-4 text-base leading-relaxed">{cta.description}</p>
          </motion.div>
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-3 mb-3">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                className="bg-white/20 text-white placeholder-teal-200 px-4 py-3 rounded-xl text-sm outline-none border border-white/20 focus:border-white transition-all"
                placeholder="Company Name"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                className="bg-white/20 text-white placeholder-teal-200 px-4 py-3 rounded-xl text-sm outline-none border border-white/20 focus:border-white transition-all"
                placeholder="Name"
              />
            </div>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/20 text-white placeholder-teal-200 px-4 py-3 rounded-xl text-sm outline-none border border-white/20 focus:border-white transition-all mb-3"
              placeholder="Work Email"
              type="email"
            />
            <div className="flex gap-3 flex-col sm:flex-row">
              <Link href="/contact" className="flex-1 bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3 rounded-xl text-sm text-center transition-colors">
                Send Inquiry
              </Link>
              <Link href="/products" className="flex-1 border border-white/40 text-white hover:bg-white/10 font-semibold py-3 rounded-xl text-sm text-center transition-colors">
                Download Catalog
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
