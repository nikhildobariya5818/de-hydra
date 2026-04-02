'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CategoriesSection({ data }) {
  if (!data) return null

  const categories = data.categories
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <motion.div
          className="flex items-end justify-between mb-10 flex-col md:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="section-tag">Our Range</p>
            <h2 className="section-title">Our Product Range</h2>
            <p className="section-sub">Discover our diverse portfolio of premium dehydrated solutions.</p>
          </div>
          <Link href="/products" className="text-teal-500 font-semibold text-sm hover:underline hidden md:block whitespace-nowrap">
            View Catalog →
          </Link>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {categories.map((category) => (
            <motion.div key={category.name} variants={itemVariants}>
              <Link href="/products" className="group card p-0 overflow-hidden block h-full">
                <motion.div
                  className="relative h-32 overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={category.icon}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-teal-900/30 group-hover:bg-teal-900/10 transition-colors" />
                </motion.div>
                <div className="p-4">
                  <p className="font-semibold text-brand-dark text-sm">{category.name}</p>
                  <p className="text-teal-500 text-xs font-medium mt-0.5">{category.count} →</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
