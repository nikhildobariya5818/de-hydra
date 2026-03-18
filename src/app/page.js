import Link from "next/link"
import Image from "next/image"
import { products } from "@/data/products"

const stats = [
  { num: "500+", label: "Global Products" },
  { num: "30+",  label: "Export Countries" },
  { num: "15+",  label: "Years Experience" },
  { num: "200+", label: "Active B2B Clients" },
]

const categories = [
  { name: "Vegetables",    icon: "/images/products/green-peas.png",          count: "24 Products" },
  { name: "Fruits",        icon: "/images/products/dried-fruit-slices.png",  count: "18 Products" },
  { name: "Spices",        icon: "/images/products/spices-mix.png",          count: "32 Products" },
  { name: "Herbs",         icon: "/images/products/herbs-thyme.png",         count: "15 Products" },
  { name: "Private Label", icon: "/images/process/step5-private-label.png",  count: "Custom" },
]

const whyUs = [
  { icon: "🌿", title: "100% Natural",       desc: "No additives, no dyes, no artificial preservatives. Pure ingredients at their best." },
  { icon: "📦", title: "Flexible Packaging", desc: "Bulk retail packaging solutions to meet specific market needs — 1kg to 25kg." },
  { icon: "✈️", title: "Export Ready",       desc: "Compliant with international food safety standards ensuring smooth global trade." },
  { icon: "🔬", title: "Quality Testing",    desc: "Rigorous lab testing at every stage of the production cycle." },
  { icon: "🤝", title: "B2B Support",        desc: "Dedicated account managers for large enterprises providing real-time inventory and supply updates." },
  { icon: "🏭", title: "Large Scale",        desc: "Our state-of-the-art facility processes 50+ metric tons daily." },
]

const processSteps = [
  { num: "01", icon: "🌾", title: "Sourcing",    desc: "Premium-grade produce from certified farms." },
  { num: "02", icon: "🧹", title: "Cleaning",    desc: "Rigorous quality control at source." },
  { num: "03", icon: "♨️", title: "Dehydration", desc: "Precision moisture removal." },
  { num: "04", icon: "⭐", title: "Grading",     desc: "Nutrient consistency assured." },
  { num: "05", icon: "🔬", title: "Inspection",  desc: "Quality Assurance." },
  { num: "06", icon: "🚛", title: "Logistics",   desc: "Global Distribution." },
]

const topProducts = products.slice(0, 6)

const testimonials = [
  { text: "De'hydra's consistency in quality is outstanding. They've become a key procurement partner for our food processing chain.", name: "Ahmed Al-Farsi", role: "Procurement Manager, Al Noor Trading, UAE", stars: 5 },
  { text: "The craftsmanship and experience of working with De'hydra is truly exceptional. Customer support is top-notch.", name: "Ahmad Bin-A", role: "Import Director, FoodBridge, Singapore", stars: 5 },
  { text: "Their private label solutions helped us launch our own brand in just 3 weeks. Highly professional team.", name: "Sarah Williams", role: "Brand Manager, NatureFoods, UK", stars: 5 },
]

const insights = [
  { tag: "INDUSTRY", title: "Future of Dehydrated Goods in B2B Supply Chains", date: "Mar 2025", img: "/images/blog/blog-1.jpg" },
  { tag: "HEALTH",   title: "Sustaining Nutritional Value During Drying",       date: "Feb 2025", img: "/images/blog/blog-2.jpg" },
  { tag: "EXPORT",   title: "Launching a Global Private Label Brand",            date: "Jan 2025", img: "/images/blog/blog-5.jpg" },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white min-h-[88vh] flex items-center">
        <div className="container-xl py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge bg-teal-50 text-teal-600 mb-4">🌿 Premium B2B Dehydrated Foods</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark leading-tight mt-2">
              Pure. Preserved.<br />
              <span className="text-teal-500">Delivered Worldwide.</span>
            </h1>
            <p className="text-gray-500 text-lg mt-5 leading-relaxed max-w-lg">
              Industry-leading dehydration technology preserving the essence of nature, trusted by global food giants for quality, consistency, and scale.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/products" className="btn-primary text-base px-8 py-4">Explore Our Products</Link>
              <Link href="/contact"  className="btn-outline text-base px-8 py-4">Request a Sample</Link>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              {["FSSAI Certified","Export Ready","ISO Compliant","30+ Countries"].map(t => (
                <span key={t} className="flex items-center gap-1.5 text-sm text-gray-500">
                  <span className="w-4 h-4 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-[10px]">✓</span>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden h-96 lg:h-[500px]">
              <Image
                src="/images/products/hero-product-flatlay.png"
                alt="Premium Dehydrated Foods by De'hydra"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-card">
              <p className="text-2xl font-bold text-teal-600">500+</p>
              <p className="text-xs text-gray-500">Products Available</p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-card">
              <p className="text-sm font-bold text-brand-dark">⭐ Trusted by</p>
              <p className="text-xl font-bold text-teal-600">200+ Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-teal-700">
        <div className="container-xl py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className={`text-center ${i < 3 ? "md:border-r border-teal-600" : ""}`}>
                <p className="text-4xl font-extrabold text-white">{s.num}</p>
                <p className="text-teal-200 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-tag">Our Range</p>
              <h2 className="section-title">Our Product Range</h2>
              <p className="section-sub">Discover our diverse portfolio of premium dehydrated solutions.</p>
            </div>
            <Link href="/products" className="text-teal-500 font-semibold text-sm hover:underline hidden md:block">View Catalog →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map(c => (
              <Link key={c.name} href="/products" className="group card p-0 overflow-hidden hover:-translate-y-1 transition-transform duration-200">
                <div className="relative h-32 overflow-hidden">
                  <Image src={c.icon} alt={c.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-teal-900/30 group-hover:bg-teal-900/10 transition-colors" />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-brand-dark text-sm">{c.name}</p>
                  <p className="text-teal-500 text-xs font-medium mt-0.5">{c.count} →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DEHYDRA ── */}
      <section className="section-pad bg-teal-50">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-tag">Our Advantage</p>
            <h2 className="section-title">Why De'Hydra Venture?</h2>
            <p className="section-sub mx-auto">Combining traditional farming with advanced technology to deliver the world's finest dehydrated ingredients.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(w => (
              <div key={w.title} className="card p-6">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-2xl mb-4">{w.icon}</div>
                <h3 className="font-bold text-brand-dark text-base mb-2">{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS SNAPSHOT ── */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-tag">How We Work</p>
            <h2 className="section-title">Our Process</h2>
            <p className="section-sub mx-auto">From farm to shelf — at all levels the highest purity.</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {processSteps.map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">{i + 1}</div>
                <p className="text-lg mb-1">{p.icon}</p>
                <p className="font-semibold text-brand-dark text-xs">{p.title}</p>
                <p className="text-gray-400 text-[10px] mt-1 leading-tight">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/process" className="btn-outline">See Full Process Details</Link>
          </div>
        </div>
      </section>

      {/* ── TOP EXPORT PICKS ── */}
      <section className="section-pad bg-teal-50">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="section-tag">Best Sellers</p>
            <h2 className="section-title">Our Top Export Picks</h2>
            <p className="section-sub mx-auto">Explore our most requested products by global buyers.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {topProducts.map(p => (
              <Link key={p.id} href={`/products/${p.slug}`} className="group card p-3 hover:-translate-y-1 transition-transform duration-200">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
                  <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <p className="font-semibold text-brand-dark text-xs leading-tight">{p.name}</p>
                <p className="text-teal-500 text-[11px] font-medium mt-1">MOQ: {p.moq}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="btn-primary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-tag">Client Reviews</p>
            <h2 className="section-title">Voice of Our Partners</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card p-6">
                <div className="text-yellow-400 text-sm mb-3">{"★".repeat(t.stars)}</div>
                <p className="text-gray-600 text-sm leading-relaxed italic mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center font-bold text-teal-700 text-sm">{t.name[0]}</div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIGHTS ── */}
      <section className="section-pad bg-teal-50">
        <div className="container-xl">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-tag">Knowledge</p>
              <h2 className="section-title">Industry Insights</h2>
            </div>
            <Link href="/blog" className="text-teal-500 font-semibold text-sm hover:underline hidden md:block">Read All Blogs →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((b, i) => (
              <Link key={i} href="/blog" className="group card overflow-hidden hover:-translate-y-1 transition-transform duration-200">
                <div className="relative h-48 overflow-hidden">
                  <Image src={b.img} alt={b.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <span className="badge bg-teal-50 text-teal-600 text-[10px] mb-3">{b.tag}</span>
                  <h3 className="font-bold text-brand-dark text-sm leading-snug mb-2">{b.title}</h3>
                  <p className="text-teal-500 text-xs font-medium group-hover:underline">{b.date} · Read More →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-teal-700">
        <div className="container-xl py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Ready to scale your supply?</h2>
              <p className="text-teal-200 mt-4 text-base leading-relaxed">Join over 200+ global partners sourcing premium ingredients. Let's discuss your supply requirements today.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input className="bg-white/20 text-white placeholder-teal-200 px-4 py-3 rounded-xl text-sm outline-none border border-white/20 focus:border-white" placeholder="Company Name" />
                <input className="bg-white/20 text-white placeholder-teal-200 px-4 py-3 rounded-xl text-sm outline-none border border-white/20 focus:border-white" placeholder="Name" />
              </div>
              <input className="w-full bg-white/20 text-white placeholder-teal-200 px-4 py-3 rounded-xl text-sm outline-none border border-white/20 focus:border-white mb-3" placeholder="Work Email" />
              <div className="flex gap-3">
                <Link href="/contact" className="flex-1 bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3 rounded-xl text-sm text-center transition-colors">Send Inquiry</Link>
                <Link href="/products" className="flex-1 border border-white/40 text-white hover:bg-white/10 font-semibold py-3 rounded-xl text-sm text-center transition-colors">Download Catalog</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
