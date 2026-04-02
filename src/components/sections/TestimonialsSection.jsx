'use client'

import { motion } from 'framer-motion'

export default function TestimonialsSection({ data }) {
  if (!data) return null

  const testimonials = data.testimonials
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">Client Reviews</p>
          <h2 className="section-title">Voice of Our Partners</h2>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="card p-6"
              whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-yellow-400 text-sm mb-3">{'★'.repeat(testimonial.stars)}</div>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-5">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center font-bold text-teal-700 text-sm">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-brand-dark text-sm">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
