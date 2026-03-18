import Link from "next/link"
import Image from "next/image"
import { products } from "@/data/products"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export default function ProductDetailPage({ params }) {
  const product = products.find(p => p.slug === params.slug)
  if (!product) notFound()
  const related = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container-xl py-3 text-xs text-gray-400">
          <Link href="/" className="hover:text-teal-500">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/products" className="hover:text-teal-500">Dehydrated {product.category}</Link>
          <span className="mx-2">›</span>
          <span className="text-brand-dark">{product.name}</span>
        </div>
      </div>

      {/* Product Hero */}
      <section className="bg-white section-pad">
        <div className="container-xl grid lg:grid-cols-2 gap-12 items-start">
          {/* Left – Images */}
          <div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src={product.image} alt={product.name} fill className="object-cover" priority />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`relative aspect-square rounded-xl overflow-hidden border-2 cursor-pointer transition-colors ${i === 0 ? "border-teal-500" : "border-gray-200 hover:border-teal-300"}`}>
                  <Image src={product.image} alt={`${product.name} view ${i+1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            {/* Cert Badges */}
            <div className="flex flex-wrap gap-3 mt-5">
              {product.certifications.map(c => (
                <div key={c} className="flex items-center gap-2 bg-teal-50 rounded-lg px-3 py-2">
                  <span className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</span>
                  <span className="text-xs font-semibold text-teal-700">{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">{product.name}</h1>
            <p className="text-gray-500 mt-4 leading-relaxed">{product.description}</p>
            <div className="flex items-center gap-3 mt-4">
              <div className="text-yellow-400 text-sm">★★★★★</div>
              <span className="text-xs text-gray-400">Trusted by 50+ Global Buyers</span>
            </div>
            {/* Features */}
            <div className="mt-6 space-y-3">
              {product.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-teal-600 text-[10px] font-bold">✓</span>
                  </div>
                  <p className="text-sm text-gray-600">{f}</p>
                </div>
              ))}
            </div>
            {/* Specs Table */}
            <div className="mt-8">
              <h3 className="font-bold text-brand-dark text-base mb-4">Technical Specifications</h3>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                {[
                  ["Moisture Level",  product.moisture],
                  ["Shelf Life",      product.shelfLife],
                  ["Packaging",       product.packaging.join(" / ")],
                  ["Form Available",  product.formAvailable],
                  ["Origin",          product.origin],
                  ["MOQ",             `${product.moq} (Sample orders available)`],
                ].map(([key, val], i) => (
                  <div key={key} className={`grid grid-cols-2 px-5 py-3 text-sm ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                    <span className="text-gray-500 font-medium">{key}</span>
                    <span className="text-brand-dark font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk CTA */}
      <section className="bg-teal-600 py-10">
        <div className="container-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white">Ready to Place a Bulk Order?</h2>
            <p className="text-teal-200 mt-1 text-sm">Get a custom quote and volume-based pricing for your business.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/contact" className="btn-white">Request Bulk Order</Link>
            <a href="#" className="border border-white/50 text-white hover:bg-white/20 font-semibold px-6 py-3 rounded-full text-sm transition-colors flex items-center gap-2">↓ Download Spec Sheet</a>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="section-pad bg-white">
          <div className="container-xl">
            <h2 className="text-2xl font-bold text-brand-dark mb-8">You May Also Be Interested In</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map(p => (
                <Link key={p.id} href={`/products/${p.slug}`} className="group card overflow-hidden hover:-translate-y-1 transition-transform duration-200">
                  <div className="relative aspect-square overflow-hidden">
                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <p className="font-bold text-brand-dark text-sm">{p.name}</p>
                    <p className="text-gray-400 text-xs mt-1 line-clamp-2">{p.description}</p>
                    <p className="text-teal-500 text-xs font-semibold mt-2 group-hover:underline">View Details →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
