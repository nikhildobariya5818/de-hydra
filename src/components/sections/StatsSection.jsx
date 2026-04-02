'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function StatsSection({ stats }) {
  if (!stats) return null

  return (
    <section className="bg-teal-700">
      <div className="container-xl py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCounter
              key={i}
              number={stat.number}
              label={stat.label}
              index={i}
              borderRight={i < 3}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCounter({ number, label, index, borderRight }) {
  const [count, setCount] = useState(0)
  const numericValue = parseInt(number.replace(/\D/g, ''))
  const suffix = number.replace(/\d/g, '').trim()

  useEffect(() => {
    let interval
    let current = 0
    const increment = Math.ceil(numericValue / 50)

    interval = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(interval)
      } else {
        setCount(current)
      }
    }, 20)

    return () => clearInterval(interval)
  }, [numericValue])

  return (
    <motion.div
      className={`text-center ${borderRight ? 'md:border-r border-teal-600' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.p
        className="text-4xl font-extrabold text-white"
        key={count}
      >
        {count}
        {suffix}
      </motion.p>
      <p className="text-teal-200 text-sm mt-1">{label}</p>
    </motion.div>
  )
}
