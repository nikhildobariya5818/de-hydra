'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function InsightsSection({ data }) {
  if (!data) return null

  const insights = data.insights
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
    hidden: { opacity: 0, scale: 0.9 },
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
          className="flex items-end justify-between mb-10 flex-col md:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="section-tag">Knowledge</p>
            <h2 className="section-title">Industry Insights</h2>
          </div>
          <Link href="/blog" className="text-teal-500 font-semibold text-sm hover:underline hidden md:block whitespace-nowrap">
            Read All Blogs →
          </Link>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {insights.map((blog, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Link href="/blog" className="group card overflow-hidden block h-full">
                <motion.div
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="p-5">
                  <span className="badge bg-teal-50 text-teal-600 text-[10px] mb-3">{blog.tag}</span>
                  <h3 className="font-bold text-brand-dark text-sm leading-snug mb-2">{blog.title}</h3>
                  <p className="text-teal-500 text-xs font-medium group-hover:underline">{blog.date} · Read More →</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
