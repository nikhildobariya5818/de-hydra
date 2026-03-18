"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function AnimatedProductCard({ product, index }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    },
  }

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white rounded-lg shadow overflow-hidden cursor-pointer"
    >
      {product.image_url && (
        <div className="h-48 bg-gray-200 rounded-t-lg overflow-hidden">
          <motion.img
            variants={imageVariants}
            whileHover="hover"
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
          className="text-lg font-bold text-gray-900"
        >
          {product.name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="mt-2 text-sm text-gray-600"
        >
          {product.short_description || product.description}
        </motion.p>
        {product.price && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.4 }}
            className="mt-4 text-2xl font-bold text-green-700"
          >
            ${product.price}
          </motion.p>
        )}
        <Link
          href={`/products/${product.slug}`}
          className="mt-4 inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  )
}
