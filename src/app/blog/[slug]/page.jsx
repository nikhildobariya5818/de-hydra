'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useJsonData } from '@/hooks/useJsonData'
import AnimatedSection from '@/components/AnimatedSection'

const tagColors = {
  EXPORT: 'bg-blue-100 text-blue-600',
  HEALTH: 'bg-green-100 text-green-600',
  TECHNOLOGY: 'bg-purple-100 text-purple-600',
  IMPACT: 'bg-orange-100 text-orange-600',
}

export default function BlogDetailPage({ params }) {
  const { data: blogData, loading } = useJsonData('/data/blog.json')
  const slug = params.slug

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500 mb-4 animate-pulse">
            <div className="w-12 h-12 rounded-full bg-teal-600 animate-spin"></div>
          </div>
          <p className="text-teal-700 font-semibold">Loading article...</p>
        </div>
      </div>
    )
  }

  const article = blogData?.articles?.find(a => a.slug === slug)
  const allArticles = blogData?.articles || []
  const relatedArticles = allArticles.filter(a => article?.relatedArticles?.includes(a.id)).slice(0, 3)

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">Article Not Found</h1>
          <p className="text-gray-500 mb-6">Sorry, we couldn&apos;t find the article you&apos;re looking for.</p>
          <Link href="/blog" className="btn-primary">Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* ── HERO ── */}
      <AnimatedSection>
        <section className="relative bg-gradient-to-br from-teal-700 to-teal-800 py-20 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image src={article.img} alt={article.title} fill className="object-cover" />
          </div>
          <div className="container-xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <Link href="/blog" className="inline-flex items-center gap-2 text-teal-200 hover:text-white transition-colors">
                <span>← Back to Blog</span>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`badge text-[10px] ${tagColors[article.tag] || 'bg-gray-300 text-gray-700'}`}>
                  {article.tag}
                </span>
                <span className="text-teal-100 text-sm">{article.date} · {article.readTime} read</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                {article.title}
              </h1>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-lg font-bold">
                  {article.author[0]}
                </div>
                <div>
                  <p className="font-semibold">{article.author}</p>
                  <p className="text-teal-200 text-sm">{article.authorRole}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── FEATURED IMAGE ── */}
      <AnimatedSection>
        <section className="section-pad bg-white">
          <div className="container-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden h-96 md:h-[500px]"
            >
              <Image
                src={article.img}
                alt={article.title}
                fill
                className="object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
              />
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── ARTICLE CONTENT ── */}
      <section className="section-pad bg-white">
        <div className="container-xl grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <article className="prose prose-lg max-w-none">
              <div
                className="article-content text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>

            {/* Share Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <h3 className="font-bold text-brand-dark mb-4">Share this article</h3>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium">
                  📘 Facebook
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium">
                  𝕏 Twitter
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium">
                  🔗 Copy Link
                </button>
              </div>
            </motion.div>

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 p-6 bg-teal-50 rounded-2xl"
            >
              <h3 className="font-bold text-brand-dark mb-2">About the Author</h3>
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-teal-200 rounded-full flex items-center justify-center text-2xl font-bold text-teal-700 shrink-0">
                  {article.author[0]}
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">{article.author}</p>
                  <p className="text-teal-600 text-sm mb-2">{article.authorRole}</p>
                  <p className="text-gray-600 text-sm">
                    Industry expert with deep knowledge in food science, supply chain management, and sustainable practices.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Table of Contents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card p-6 sticky top-28"
            >
              <h3 className="font-bold text-brand-dark mb-4">Table of Contents</h3>
              <ul className="space-y-2">
                {[...article.content.matchAll(/<h2>(.*?)<\/h2>/g)].map((match, idx) => (
                  <li key={idx}>
                    <a href={`#section-${idx}`} className="text-teal-600 hover:text-teal-700 text-sm">
                      {match[1]}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card p-6 bg-gradient-to-br from-teal-600 to-teal-700 text-white"
            >
              <h3 className="font-bold mb-2">Ready to source premium ingredients?</h3>
              <p className="text-teal-100 text-sm mb-4">Contact our team to discuss your requirements and get custom solutions.</p>
              <Link href="/contact" className="block w-full text-center bg-white text-teal-700 font-semibold py-2.5 rounded-xl hover:bg-teal-50 transition-colors text-sm">
                Get in Touch
              </Link>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card p-6"
            >
              <h3 className="font-bold text-brand-dark mb-2">Stay Updated</h3>
              <p className="text-gray-500 text-sm mb-4">Get industry insights delivered to your inbox.</p>
              <input type="email" placeholder="your@email.com" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm mb-3 outline-none focus:border-teal-400" />
              <button className="w-full bg-teal-600 text-white font-semibold py-2.5 rounded-xl hover:bg-teal-700 transition-colors text-sm">
                Subscribe
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── RELATED ARTICLES ── */}
      {relatedArticles.length > 0 && (
        <AnimatedSection>
          <section className="section-pad bg-gray-50">
            <div className="container-xl">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-brand-dark mb-2">Related Articles</h2>
                <p className="text-gray-500">Explore more insights on similar topics</p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((article, idx) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link href={`/blog/${article.slug}`} className="group card overflow-hidden hover:-translate-y-1 transition-transform duration-200 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <Image src={article.img} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <span className={`badge text-[10px] mb-2 w-fit ${tagColors[article.tag] || 'bg-gray-100 text-gray-600'}`}>
                          {article.tag}
                        </span>
                        <h3 className="font-bold text-brand-dark text-base leading-snug mb-2 flex-1">{article.title}</h3>
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <span className="text-xs text-gray-400">{article.date}</span>
                          <span className="text-teal-500 text-xs font-semibold">Read →</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* ── CTA SECTION ── */}
      <AnimatedSection variant="slideInUp">
        <section className="bg-gradient-to-r from-teal-700 to-teal-900 py-16">
          <div className="container-xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Ready to transform your supply chain?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto"
            >
              Partner with De&apos;hydra for premium dehydrated ingredients and global reach.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link href="/contact" className="btn-white">Request Sample</Link>
              <Link href="/products" className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-full transition-colors border border-white/30">
                View Products
              </Link>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </>
  )
}
