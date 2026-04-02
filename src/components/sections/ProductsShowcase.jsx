'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProductsShowcase({ products }) {
  if (!products || products.length === 0) return null

  const topProducts = products.slice(0, 6)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section className="section-pad bg-teal-50">
      <div className="container-xl">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">Best Sellers</p>
          <h2 className="section-title">Our Top Export Picks</h2>
          <p className="section-sub mx-auto">Explore our most requested products by global buyers.</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {topProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Link
                href={`/products/${product.slug}`}
                className="group card p-3 block h-full"
              >
                <motion.div
                  className="relative aspect-square rounded-xl overflow-hidden mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <p className="font-semibold text-brand-dark text-xs leading-tight group-hover:text-teal-600 transition-colors">
                  {product.name}
                </p>
                <p className="text-teal-500 text-[11px] font-medium mt-1">MOQ: {product.moq}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
