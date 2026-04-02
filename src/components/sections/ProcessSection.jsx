'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProcessSection({ data }) {
  if (!data) return null

  const processSteps = data.process
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">How We Work</p>
          <h2 className="section-title">Our Process</h2>
          <p className="section-sub mx-auto">From farm to shelf — at all levels the highest purity.</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-3 md:grid-cols-6 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-14 h-14 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3"
                whileHover={{ backgroundColor: '#0D5F5F', scale: 1.1 }}
              >
                {i + 1}
              </motion.div>
              <p className="text-lg mb-1">{step.icon}</p>
              <p className="font-semibold text-brand-dark text-xs">{step.title}</p>
              <p className="text-gray-400 text-[10px] mt-1 leading-tight">{step.description}</p>
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
          <Link href="/process" className="btn-outline">
            See Full Process Details
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
