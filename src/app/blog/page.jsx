'use client'

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useJsonData } from "@/hooks/useJsonData"
import AnimatedSection from "@/components/AnimatedSection"

const tagColors = {
  EXPORT:     "bg-blue-100 text-blue-600",
  HEALTH:     "bg-green-100 text-green-600",
  TECHNOLOGY: "bg-purple-100 text-purple-600",
  IMPACT:     "bg-orange-100 text-orange-600",
}

export default function BlogPage() {
  const { data: blogData, loading } = useJsonData('/data/blog.json')
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500 mb-4 animate-pulse">
            <div className="w-12 h-12 rounded-full bg-teal-600 animate-spin"></div>
          </div>
          <p className="text-teal-700 font-semibold">Loading articles...</p>
        </div>
      </div>
    )
  }

  const articles = blogData?.articles || []
  const popular = blogData?.popular || []
  const featured = articles[0]

  return (
    <>
      {/* ── HERO ── */}
      <AnimatedSection>
        <section className="bg-teal-50 py-16">
          <div className="container-xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold text-brand-dark">
              Insights & <span className="text-teal-500">Industry Knowledge</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 mt-4 text-base max-w-xl mx-auto leading-relaxed">
              Deep dives into food preservation, export logistics, and the future of nutritious snacks in the global marketplace.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex justify-center">
              <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden shadow-soft w-full max-w-md">
                <input type="text" placeholder="Search articles, whitepapers, guides..." className="flex-1 px-4 py-3 text-sm outline-none text-gray-700" />
                <button className="bg-teal-600 text-white px-5 text-sm font-semibold hover:bg-teal-700 transition-colors">Search</button>
              </div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── FEATURED + SIDEBAR ── */}
      <AnimatedSection>
        <section className="section-pad bg-white">
          <div className="container-xl grid lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            <div className="lg:col-span-2">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-xs font-bold text-teal-500 tracking-widest uppercase mb-4">FEATURED STORY</motion.p>
              {featured && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="card overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={featured.img} alt={featured.title} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`badge text-[10px] ${tagColors[featured.tag] || 'bg-gray-100 text-gray-600'}`}>{featured.tag}</span>
                      <span className="text-xs text-gray-400">{featured.date} · {featured.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-extrabold text-brand-dark leading-snug">{featured.title}</h2>
                    <p className="text-gray-500 text-sm mt-3 leading-relaxed">{featured.excerpt}</p>
                    <div className="flex items-center justify-between mt-5">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-xs">{featured.author[0]}</div>
                        <span className="text-sm text-gray-600">{featured.author}, {featured.authorRole}</span>
                      </div>
                      <Link href={`/blog/${featured.slug}`} className="text-teal-500 text-sm font-semibold hover:underline">Read Full Article →</Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="card p-5">
                <h3 className="font-bold text-brand-dark text-sm mb-4">Most Popular</h3>
                <div className="space-y-3">
                  {popular.map((p, idx) => (
                    <motion.div 
                      key={p.title} 
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-3 items-start">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                        <Image src={p.img} alt={p.title} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-brand-dark leading-snug">{p.title}</p>
                        <p className="text-teal-500 text-[10px] mt-1 font-medium">{p.reads}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-teal-600 rounded-2xl p-5 text-white">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-bold text-base">Industry Guide 2024</h3>
                <p className="text-teal-100 text-xs mt-2 leading-relaxed">Get our latest comprehensive whitepaper on sustainable dehydration technology and global supply trends.</p>
                <button className="mt-4 bg-white text-teal-700 font-semibold text-xs px-4 py-2.5 rounded-full w-full hover:bg-teal-50 transition-colors">Download Catalog</button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="card p-5">
                <h3 className="font-bold text-brand-dark text-sm mb-2">Stay Updated</h3>
                <p className="text-gray-400 text-xs mb-4 leading-relaxed">Get the latest industry reports and insights delivered directly to your inbox every Tuesday.</p>
                <input type="email" placeholder="Email address" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-xs outline-none focus:border-teal-400 mb-2" />
                <button className="w-full bg-teal-600 text-white font-semibold text-xs py-2.5 rounded-xl hover:bg-teal-700 transition-colors">Subscribe Now</button>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── ARTICLES GRID ── */}
      <AnimatedSection>
        <section className="section-pad bg-gray-50">
          <div className="container-xl">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sm text-gray-400 mb-6">{articles.length} articles found</motion.p>
            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((a, idx) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link href={`/blog/${a.slug}`} className="group card overflow-hidden flex hover:-translate-y-0.5 transition-transform duration-200 h-full">
                    <div className="relative w-36 md:w-44 shrink-0 overflow-hidden">
                      <Image src={a.img} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-5 flex-1">
                      <span className={`badge text-[10px] mb-2 ${tagColors[a.tag] || "bg-gray-100 text-gray-600"}`}>{a.tag}</span>
                      <h3 className="font-bold text-brand-dark text-sm leading-snug">{a.title}</h3>
                      <p className="text-gray-400 text-xs mt-2 leading-relaxed line-clamp-2">{a.excerpt}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs text-gray-400">{a.date} · {a.readTime}</span>
                        <span className="text-teal-500 text-xs font-semibold group-hover:underline">Read More →</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center mt-10">
              <button className="btn-outline">Load More Insights ↓</button>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── NEWSLETTER BANNER ── */}
      <AnimatedSection variant="slideInUp">
        <section className="bg-teal-700 py-16">
          <div className="container-xl grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-extrabold text-white leading-snug">Hungry for more<br />industry news?</h2>
              <p className="text-teal-200 mt-3 text-sm leading-relaxed">Join 15,000+ industry professionals who receive our weekly deep-dives into the future of food technology and global supply chains.</p>
              <div className="flex gap-4 mt-4">
                {["✓ Weekly Insights","✓ Exclusive Reports","✓ Event Invites"].map(t => (
                  <span key={t} className="text-teal-300 text-xs">{t}</span>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex gap-3">
              <input type="email" placeholder="your@email.com" className="flex-1 bg-white/20 text-white placeholder-teal-200 px-4 py-3 rounded-xl text-sm outline-none border border-white/20 focus:border-white" />
              <button className="bg-white text-teal-700 font-bold px-6 py-3 rounded-xl text-sm hover:bg-teal-50 transition-colors shrink-0">Subscribe</button>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </>
  )
}
