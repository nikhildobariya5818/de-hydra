import Link from "next/link"
import Image from "next/image"

const timeline = [
  { year: "2015", title: "Foundation",         desc: "The journey began with our first processing unit focusing on local tropical fruits." },
  { year: "2018", title: "Expansion",          desc: "Joined Sryshaya Group, expanding our facility to 50,000 sq. ft. of processing space." },
  { year: "2021", title: "Global Leap",        desc: "Obtained international organic certifications and started exporting to Europe." },
  { year: "2023", title: "Innovation Hub",     desc: "Launched dedicated R&D lab for customized nutritional food blends." },
  { year: "2025", title: "Sustainability Goal",desc: "Achieving 100% solar-powered operations across all processing facilities." },
]

const whyCards = [
  { icon: "🌿", title: "100% Natural",      desc: "Pure ingredients without any additives, dyes, or artificial preservatives." },
  { icon: "📦", title: "Custom Packaging",  desc: "Tailored bulk and retail packaging solutions to meet specific market needs." },
  { icon: "✈️", title: "Export Ready",      desc: "Compliant with international food safety standards for seamless global trade." },
  { icon: "🔬", title: "Quality Testing",   desc: "Rigorous lab testing at every stage of the production cycle." },
]

export default function AboutPage() {
  return (
    <>
      {/* ── OUR STORY ── */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Real Facility Image */}
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-96">
              <Image
                src="/images/process/facility.png"
                alt="De'hydra Food Processing Facility"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="badge bg-teal-50 text-teal-600 uppercase tracking-wider text-[10px] mb-3">Farm to Global</span>
              <h1 className="text-4xl font-extrabold text-brand-dark leading-tight mt-1">Our Story</h1>
              <div className="space-y-4 mt-5 text-gray-500 text-sm leading-relaxed">
                <p>Founded in the heart of agricultural excellence, De'hydra Food Venture began as a small initiative to reduce post-harvest waste. We recognized that the most nutrient-dense produce often never reached the consumer due to perishability issues.</p>
                <p>Through years of research and investment in advanced dehydration technology, we've perfected the art of preserving nature's essence. Our processes ensure that every fruit, vegetable, and spice retains its original flavor, color, and nutritional profile without the need for artificial preservatives.</p>
                <p>Today, we stand as a global leader in sustainable food processing, partnering with over 5,000 local farmers to bring high-quality dehydrated ingredients to kitchens and manufacturing facilities across thirty countries.</p>
              </div>
              <Link href="/process" className="btn-primary mt-6">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SRYSHAYA GROUP ── */}
      <section className="bg-teal-700 py-16">
        <div className="container-xl text-center">
          <div className="text-4xl mb-4">🏢</div>
          <h2 className="text-3xl font-extrabold text-white">Part of Sryshaya Group</h2>
          <p className="text-teal-200 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
            As a strategic business unit of the Sryshaya Group, we leverage decades of industrial expertise and a robust global logistics network to deliver excellence in the food processing sector.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-10">
            {[{ num: "10+", label: "Years Experience" }, { num: "30+", label: "Global Reach" }, { num: "500+", label: "Product Range" }].map(s => (
              <div key={s.label} className="bg-white/10 rounded-2xl p-5">
                <p className="text-3xl font-extrabold text-white">{s.num}</p>
                <p className="text-teal-200 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="section-pad bg-gray-50">
        <div className="container-xl grid md:grid-cols-2 gap-6">
          <div className="bg-teal-600 rounded-2xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl mb-5">👁️</div>
            <p className="text-xs font-semibold tracking-widest uppercase text-teal-200 mb-2">Our Vision</p>
            <h3 className="text-2xl font-bold leading-snug">Our Vision</h3>
            <p className="text-teal-100 mt-4 text-sm leading-relaxed">To be the global benchmark for sustainable dehydration technology, empowering healthier lifestyles through nature-identical food solutions that protect both people and the planet.</p>
            <p className="mt-5 text-xs text-teal-300 font-semibold tracking-widest uppercase">Data Driven</p>
          </div>
          <div className="bg-white border-2 border-teal-100 rounded-2xl p-8">
            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-2xl mb-5">🚀</div>
            <p className="text-xs font-semibold tracking-widest uppercase text-teal-500 mb-2">Our Mission</p>
            <h3 className="text-2xl font-bold text-brand-dark leading-snug">Our Mission</h3>
            <p className="text-gray-500 mt-4 text-sm leading-relaxed">To bridge the gap between farm and consumer by providing premium quality, ethically sourced, and technologically advanced dehydrated products while ensuring environmental stewardship.</p>
            <p className="mt-5 text-xs text-teal-400 font-semibold tracking-widest uppercase">Execution Driven</p>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-tag">Our Advantage</p>
            <h2 className="section-title">Why Choose Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCards.map(c => (
              <div key={c.title} className="card p-6 text-center">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto">{c.icon}</div>
                <h3 className="font-bold text-brand-dark text-sm mb-2">{c.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACILITY BANNER ── */}
      <section className="relative h-64 overflow-hidden">
        <Image src="/images/process/step3-dehydration-facility.png" alt="De'hydra Processing Facility" fill className="object-cover" />
        <div className="absolute inset-0 bg-teal-900/60 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-2xl font-bold">World-Class Processing Facility</p>
            <p className="text-teal-200 text-sm mt-2">50,000 sq.ft. of food-grade manufacturing space</p>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section-pad bg-teal-50">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-tag">Milestones</p>
            <h2 className="section-title">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-teal-200 hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {timeline.map((t, i) => (
                <div key={i} className="relative text-center md:text-left">
                  <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto md:mx-0 mb-4 relative z-10">{i + 1}</div>
                  <p className="text-2xl font-extrabold text-teal-600">{t.year}</p>
                  <p className="font-bold text-brand-dark text-sm mt-1">{t.title}</p>
                  <p className="text-gray-400 text-xs mt-2 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
