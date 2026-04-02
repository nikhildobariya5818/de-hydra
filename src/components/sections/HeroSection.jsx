'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection({ data }) {
  if (!data) return null

  const hero = data.hero
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="bg-white min-h-[88vh] flex items-center">
      <div className="container-xl py-16 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span
            variants={itemVariants}
            className="badge bg-teal-50 text-teal-600 mb-4"
          >
            {hero.badge}
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-extrabold text-brand-dark leading-tight mt-2"
          >
            {hero.title}
            <br />
            <span className="text-teal-500">{hero.titleHighlight}</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-gray-500 text-lg mt-5 leading-relaxed max-w-lg">
            {hero.description}
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-8">
            {hero.ctaButtons.map((btn, idx) => (
              <Link
                key={idx}
                href={btn.href}
                className={btn.variant === 'primary' ? 'btn-primary text-base px-8 py-4' : 'btn-outline text-base px-8 py-4'}
              >
                {btn.text}
              </Link>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-6">
            {hero.certifications.map((cert) => (
              <span key={cert} className="flex items-center gap-1.5 text-sm text-gray-500">
                <span className="w-4 h-4 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-[10px]">✓</span>
                {cert}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden h-96 lg:h-[500px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={hero.image}
              alt="Premium Dehydrated Foods by De'hydra"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.div
            className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-bold text-teal-600">{hero.statsCard1.number}</p>
            <p className="text-xs text-gray-500">{hero.statsCard1.label}</p>
          </motion.div>
          <motion.div
            className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold text-brand-dark">⭐ Trusted by</p>
            <p className="text-xl font-bold text-teal-600">{hero.statsCard2.number}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
