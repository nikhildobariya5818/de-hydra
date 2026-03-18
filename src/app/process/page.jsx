import Link from "next/link"
import Image from "next/image"

const steps = [
  {
    num: "01", title: "Sourcing",
    img: "/images/process/step1-sourcing-harvest.png",
    desc: "We partner with certified local farms to select only the finest, premium-grade produce. Each batch is inspected at the source to ensure maximum nutrient density and peak ripeness before it even reaches our facility.",
  },
  {
    num: "02", title: "Cleaning & Sorting",
    img: "/images/process/step2-cleaning.png",
    desc: "Using advanced automated hygienic systems, produce is thoroughly washed and sorted by size and quality. Our multi-stage filtration ensures 100% purity, removing all debris while maintaining the integrity of the food.",
  },
  {
    num: "03", title: "Dehydration",
    img: "/images/process/step3-dehydration-trays.png",
    desc: "Precision temperature and airflow control are applied to gently remove moisture. This low-temperature process preserves the natural enzymes, color, and flavor profile, resulting in a product that tastes just like the fresh version.",
  },
  {
    num: "04", title: "Quality Testing",
    img: "/images/process/step4-quality-testing.png",
    desc: "Every batch undergoes rigorous lab testing for moisture content, microbial levels, and nutritional value. We adhere to the strictest international food safety standards to ensure every shipment is perfect.",
  },
  {
    num: "05", title: "Packaging",
    img: "/images/process/step5-packaging-boxes.png",
    desc: "Products are packed in eco-friendly, moisture-barrier packaging to ensure maximum shelf-life. We offer flexible bulk options tailored to meet the specific logistics needs of our global warehouse partners.",
  },
  {
    num: "06", title: "Delivery",
    img: "/images/process/step6-delivery-truck.png",
    desc: "Our global logistics network ensures that your order reaches your warehouse safely and on time. We provide real-time tracking and end-to-end support for a seamless distribution experience.",
  },
]

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-teal-800 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/process/step1-sourcing-farm.png" alt="Farm" fill className="object-cover opacity-30" />
        </div>
        <div className="container-xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">The De'hydra Journey</h1>
          <p className="text-teal-200 mt-4 text-lg">From Farm to Your Warehouse</p>
          <Link href="/contact" className="btn-white mt-8">Learn More</Link>
        </div>
      </section>

      {/* Section Title */}
      <section className="py-14 bg-white">
        <div className="container-xl text-center">
          <p className="section-tag">Step by Step</p>
          <h2 className="section-title">Our Dehydration Process</h2>
        </div>
      </section>

      {/* Steps — Alternating */}
      <section className="pb-24 bg-white">
        <div className="container-xl space-y-20">
          {steps.map((step, i) => (
            <div key={i} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                <div className="relative rounded-2xl overflow-hidden h-64 md:h-72">
                  <Image src={step.img} alt={step.title} fill className="object-cover" />
                </div>
              </div>
              <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                <p className="text-teal-500 text-xs font-bold tracking-widest uppercase">STEP {step.num}</p>
                <div className="flex items-center gap-3 mt-2 mb-4">
                  <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</div>
                  <h3 className="text-2xl font-extrabold text-brand-dark">{step.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-700 mx-4 md:mx-8 lg:mx-16 rounded-3xl mb-16">
        <div className="text-center px-6">
          <h2 className="text-3xl font-extrabold text-white">Interested in Our Process? Let's Talk.</h2>
          <p className="text-teal-200 mt-3 text-sm max-w-xl mx-auto">Experience our quality standards first-hand and see how we can fuel your supply chain.</p>
          <Link href="/contact" className="btn-white mt-8">📅 Schedule a Factory Visit</Link>
        </div>
      </section>
    </>
  )
}
