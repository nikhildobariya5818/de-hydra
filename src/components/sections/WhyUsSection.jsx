'use client'

import { motion } from 'framer-motion'

export default function WhyUsSection({ data }) {
  if (!data) return null

  const whyUs = data.whyUs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section-pad bg-teal-50">
      <div className="container-xl">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">Our Advantage</p>
          <h2 className="section-title">Why De'Hydra Venture?</h2>
          <p className="section-sub mx-auto">
            Combining traditional farming with advanced technology to deliver the world's finest dehydrated ingredients.
          </p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {whyUs.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="card p-6 h-full"
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-brand-dark text-base mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
