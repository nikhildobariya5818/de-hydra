"use client"

import { motion } from "framer-motion"

export default function AnimatedReviewCard({ review, index }) {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.15 + custom * 0.05,
        duration: 0.4,
      },
    }),
  }

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15 + 0.2 + custom * 0.05,
        duration: 0.3,
      },
    }),
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={starVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`text-xl ${
              i < review.rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </motion.span>
        ))}
      </div>

      {/* Review Text */}
      <motion.p
        custom={0}
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-700 mb-4 italic"
      >
        "{review.review_text}"
      </motion.p>

      {/* Client Info */}
      <div className="flex items-center gap-4">
        {review.image_url && (
          <motion.img
            custom={1}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={review.image_url}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-semibold text-gray-900"
          >
            {review.name}
          </motion.p>
          <motion.p
            custom={3}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-gray-600"
          >
            {review.role}
            {review.company && ` at ${review.company}`}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}
