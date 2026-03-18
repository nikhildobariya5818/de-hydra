import Link from "next/link"
import Image from "next/image"

const articles = [
  { id:1,  tag:"EXPORT",     date:"Oct 20, 2023", readTime:"6 min", title:"Navigating Global Food Export Regulations in 2024", excerpt:"A comprehensive guide to compliance, phytosanitary certificates, and international food safety standards.", img:"/images/blog/blog-1.jpg" },
  { id:2,  tag:"HEALTH",     date:"Oct 18, 2023", readTime:"5 min", title:"The Science of Nutrient Retention in Solar Drying",  excerpt:"How our specialized drying process maintains 95% of vitamins and minerals compared to traditional high-heat methods.", img:"/images/blog/blog-2.jpg" },
  { id:3,  tag:"TECHNOLOGY", date:"Oct 15, 2023", readTime:"7 min", title:"IoT in Cold Chain & Dry Logistics",                 excerpt:"Real-time tracking of humidity and temperature levels during long-haul transit to ensure premium product quality.", img:"/images/blog/blog-3.jpg" },
  { id:4,  tag:"IMPACT",     date:"Oct 12, 2023", readTime:"4 min", title:"Reducing Post-Harvest Loss for Smallholder Farmers",excerpt:"How dehydration technology is providing economic stability to rural farming communities across emerging markets.", img:"/images/blog/blog-4.jpg" },
  { id:5,  tag:"EXPORT",     date:"Oct 8, 2023",  readTime:"5 min", title:"India's Dehydrated Food Export Trends 2025",        excerpt:"Market analysis of India's growing role as a global supplier of premium dehydrated vegetables and spice powders.", img:"/images/blog/blog-5.jpg" },
  { id:6,  tag:"HEALTH",     date:"Sep 28, 2023", readTime:"6 min", title:"Choosing the Right Bulk Dehydrated Ingredient Supplier", excerpt:"Key criteria for evaluating B2B dehydrated food suppliers — certifications, consistency, capacity and communication.", img:"/images/blog/blog-6.jpg" },
]

const tagColors = {
  EXPORT:     "bg-blue-100 text-blue-600",
  HEALTH:     "bg-green-100 text-green-600",
  TECHNOLOGY: "bg-purple-100 text-purple-600",
  IMPACT:     "bg-orange-100 text-orange-600",
}

const popular = [
  { title:"10 Recipes Using Dehydrated Greens",reads:"2.4k reads",img:"/images/blog/blog-7.jpg" },
  { title:"2024 Global Food Market Forecast",  reads:"1.8k reads",img:"/images/blog/blog-8.jpg" },
  { title:"Phytochemicals and Dehydration",    reads:"1.1k reads",img:"/images/blog/blog-9.jpg" },
]

export default function BlogPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-teal-50 py-16">
        <div className="container-xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark">
            Insights & <span className="text-teal-500">Industry Knowledge</span>
          </h1>
          <p className="text-gray-500 mt-4 text-base max-w-xl mx-auto leading-relaxed">
            Deep dives into food preservation, export logistics, and the future of nutritious snacks in the global marketplace.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden shadow-soft w-full max-w-md">
              <input type="text" placeholder="Search articles, whitepapers, guides..." className="flex-1 px-4 py-3 text-sm outline-none text-gray-700" />
              <button className="bg-teal-600 text-white px-5 text-sm font-semibold hover:bg-teal-700 transition-colors">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED + SIDEBAR ── */}
      <section className="section-pad bg-white">
        <div className="container-xl grid lg:grid-cols-3 gap-8">

          {/* Featured Article */}
          <div className="lg:col-span-2">
            <p className="text-xs font-bold text-teal-500 tracking-widest uppercase mb-4">FEATURED STORY</p>
            <div className="card overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image src="/images/process/step3-dehydration-trays.png" alt="Featured Story" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="badge bg-teal-100 text-teal-600 text-[10px]">Technology</span>
                  <span className="text-xs text-gray-400">October 24, 2023 · 8 min read</span>
                </div>
                <h2 className="text-2xl font-extrabold text-brand-dark leading-snug">The Future of Solar Dehydration in Global Markets</h2>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">Exploring how sustainable energy is transforming the dried food export industry and ensuring higher nutritional retention in every batch produced.</p>
                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-xs">S</div>
                    <span className="text-sm text-gray-600">Sarah Jenkins, Senior Researcher</span>
                  </div>
                  <a href="#" className="text-teal-500 text-sm font-semibold hover:underline">Read Full Article →</a>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="card p-5">
              <h3 className="font-bold text-brand-dark text-sm mb-4">Most Popular</h3>
              <div className="space-y-3">
                {popular.map(p => (
                  <div key={p.title} className="flex gap-3 items-start">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                      <Image src={p.img} alt={p.title} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-dark leading-snug">{p.title}</p>
                      <p className="text-teal-500 text-[10px] mt-1 font-medium">{p.reads}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-teal-600 rounded-2xl p-5 text-white">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-base">Industry Guide 2024</h3>
              <p className="text-teal-100 text-xs mt-2 leading-relaxed">Get our latest comprehensive whitepaper on sustainable dehydration technology and global supply trends.</p>
              <button className="mt-4 bg-white text-teal-700 font-semibold text-xs px-4 py-2.5 rounded-full w-full hover:bg-teal-50 transition-colors">Download Catalog</button>
            </div>
            <div className="card p-5">
              <h3 className="font-bold text-brand-dark text-sm mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-xs mb-4 leading-relaxed">Get the latest industry reports and insights delivered directly to your inbox every Tuesday.</p>
              <input type="email" placeholder="Email address" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-xs outline-none focus:border-teal-400 mb-2" />
              <button className="w-full bg-teal-600 text-white font-semibold text-xs py-2.5 rounded-xl hover:bg-teal-700 transition-colors">Subscribe Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="container-xl py-4">
          <div className="flex flex-wrap gap-2">
            {["All Insights","Export","Health","Supply Chain","Market Trends"].map((tab,i) => (
              <button key={tab} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${i === 0 ? "bg-teal-600 text-white" : "border border-gray-200 text-gray-500 hover:border-teal-400 hover:text-teal-500"}`}>{tab}</button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLES GRID ── */}
      <section className="section-pad bg-gray-50">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map(a => (
              <Link key={a.id} href="#" className="group card overflow-hidden flex hover:-translate-y-0.5 transition-transform duration-200">
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
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="btn-outline">Load More Insights ↓</button>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER BANNER ── */}
      <section className="bg-teal-700 py-16">
        <div className="container-xl grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white leading-snug">Hungry for more<br />industry news?</h2>
            <p className="text-teal-200 mt-3 text-sm leading-relaxed">Join 15,000+ industry professionals who receive our weekly deep-dives into the future of food technology and global supply chains.</p>
            <div className="flex gap-4 mt-4">
              {["✓ Weekly Insights","✓ Exclusive Reports","✓ Event Invites"].map(t => (
                <span key={t} className="text-teal-300 text-xs">{t}</span>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <input type="email" placeholder="your@email.com" className="flex-1 bg-white/20 text-white placeholder-teal-200 px-4 py-3 rounded-xl text-sm outline-none border border-white/20 focus:border-white" />
            <button className="bg-white text-teal-700 font-bold px-6 py-3 rounded-xl text-sm hover:bg-teal-50 transition-colors shrink-0">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  )
}
