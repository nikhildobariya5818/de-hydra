import Link from "next/link"
import Image from "next/image"
import { productCerts, exportCerts, downloadCerts } from "@/data/certificates"

const certLogoMap = {
  "FSSAI License":          "/images/certifications/fssai.jpg",
  "ISO 9001:2015":          "/images/certifications/iso.jpg",
  "HACCP Certified":        "/images/certifications/haccp.jpg",
  "GMP Certified":          "/images/certifications/gmp.jpg",
  "Organic Certification":  "/images/certifications/organic-india.jpg",
  "Spices Board India":     "/images/certifications/spices-board.jpg",
}

const labTests = [
  { icon: "🧪", title: "Moisture Content Analysis",  desc: "Tested to ensure < 5% moisture for maximum shelf life" },
  { icon: "🦠", title: "Microbial Safety Testing",   desc: "E-Coli, Salmonella, Yeast & Mold counts verified per batch" },
  { icon: "☠️", title: "Pesticide Residue Testing",  desc: "Certified pesticide-free meeting EU & US import standards" },
  { icon: "🎨", title: "Color & Appearance Check",   desc: "Visual grading to ensure consistent color and texture" },
  { icon: "⚖️", title: "Nutritional Analysis",       desc: "Macro & micronutrient profiling available on request" },
  { icon: "📦", title: "Shelf Life Verification",    desc: "Accelerated shelf-life testing — 12 to 24 months certified" },
]

const compliancePromise = [
  { icon: "🔄", title: "Always Updated",     desc: "We renew all certifications proactively — you'll never face compliance issues with De'hydra products." },
  { icon: "📋", title: "Full Documentation", desc: "Complete export documentation package provided with every shipment — COO, Phyto, Health Cert & more." },
  { icon: "🌐", title: "Global Standards",   desc: "Our products meet EU, US, GCC and Southeast Asian import regulations for dehydrated food ingredients." },
]

const regions = {
  "Middle East":    ["🇦🇪 UAE", "🇸🇦 Saudi Arabia", "🇶🇦 Qatar", "🇰🇼 Kuwait", "🇧🇭 Bahrain"],
  "Europe":         ["🇬🇧 UK", "🇩🇪 Germany", "🇳🇱 Netherlands", "🇫🇷 France", "🇮🇹 Italy"],
  "Southeast Asia": ["🇸🇬 Singapore", "🇲🇾 Malaysia", "🇮🇩 Indonesia", "🇹🇭 Thailand"],
  "Africa":         ["🇿🇦 South Africa", "🇳🇬 Nigeria", "🇰🇪 Kenya"],
  "Americas":       ["🇺🇸 USA", "🇨🇦 Canada"],
}

const certLogosStrip = [
  { name: "FSSAI",           logo: "/images/certifications/fssai.jpg" },
  { name: "ISO 9001",        logo: "/images/certifications/iso.jpg" },
  { name: "HACCP",           logo: "/images/certifications/haccp.jpg" },
  { name: "GMP",             logo: "/images/certifications/gmp.jpg" },
  { name: "Organic India",   logo: "/images/certifications/organic-india.jpg" },
  { name: "APEDA",           logo: "/images/certifications/apeda.jpg" },
  { name: "Spices Board",    logo: "/images/certifications/spices-board.jpg" },
  { name: "IEC Code",        logo: "/images/certifications/iec-code.jpg" },
]

export default function CertificationsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-600 py-20">
        <div className="container-xl">
          <p className="text-teal-200 text-xs mb-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Certifications</span>
          </p>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="badge bg-white/20 text-white text-xs mb-4">🏅 Verified & Compliant</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mt-2">
                Certified Quality.<br />Trusted Globally.
              </h1>
              <p className="text-teal-100 mt-5 text-sm leading-relaxed max-w-lg">
                We adhere to the highest international food safety standards, ensuring every product processed at De'hydra Food Venture meets rigorous hygiene, quality, and regulatory compliance for global markets.
              </p>
            </div>
            <div className="flex md:justify-end gap-4">
              <div className="bg-white rounded-2xl p-5 text-center shadow-card">
                <p className="text-3xl font-extrabold text-teal-600">12+</p>
                <p className="text-xs text-gray-500 mt-1">Active Certifications</p>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center shadow-card">
                <p className="text-3xl font-extrabold text-teal-600">30+</p>
                <p className="text-xs text-gray-500 mt-1">Countries Export Approved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERT LOGOS STRIP ── */}
      <section className="bg-teal-50 py-10 border-b border-teal-100">
        <div className="container-xl">
          <p className="text-center text-xs font-semibold text-gray-400 tracking-widest uppercase mb-6">RECOGNIZED & CERTIFIED BY</p>
          <div className="flex flex-wrap justify-center gap-4">
            {certLogosStrip.map(c => (
              <div key={c.name} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-soft hover:border-teal-300 transition-colors">
                <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                  <Image src={c.logo} alt={c.name} fill className="object-contain" />
                </div>
                <span className="text-xs font-semibold text-brand-dark">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT CERTIFICATIONS ── */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-tag">Quality Assurance</p>
            <h2 className="section-title">Product Quality Certifications</h2>
            <p className="section-sub mx-auto">Ensuring safety and excellence from farm to warehouse through globally recognized standard certifications.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCerts.map(cert => (
              <CertCard key={cert.id} cert={cert} logoSrc={certLogoMap[cert.title]} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPORT CERTIFICATIONS ── */}
      <section className="section-pad bg-teal-50">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-tag">Export Compliance</p>
            <h2 className="section-title">Export Compliance Certifications</h2>
            <p className="section-sub mx-auto">Fully authorized and compliant for international food trade to 30+ countries worldwide.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {exportCerts.map(cert => (
              <ExportCertCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBAL REACH ── */}
      <section className="section-pad bg-teal-800">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-teal-300 text-xs font-semibold tracking-widest uppercase mb-3">Global Reach & Approval</p>
              <h2 className="text-3xl font-extrabold text-white">Export Approved Destinations</h2>
              <p className="text-teal-200 mt-4 text-sm leading-relaxed">Our processing facility is approved to export to major global regions. We ensure our packaging and labelling meets the specific requirements of each destination.</p>
              <div className="mt-8 space-y-4">
                {Object.entries(regions).map(([region, countries]) => (
                  <div key={region}>
                    <p className="text-teal-300 text-xs font-semibold mb-2">{region}</p>
                    <div className="flex flex-wrap gap-2">
                      {countries.map(c => (
                        <span key={c} className="badge bg-white/10 text-white text-xs">{c}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Real Map Image */}
            <div className="relative rounded-2xl overflow-hidden h-72">
              <Image src="/images/certifications/global-export-map.png" alt="Global Export Map" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── LAB TESTING ── */}
      <section className="section-pad bg-white">
        <div className="container-xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden h-80">
            <Image src="/images/process/step4-lab-testing.png" alt="Laboratory Testing" fill className="object-cover" />
          </div>
          <div>
            <p className="section-tag">Testing Standards</p>
            <h2 className="section-title text-2xl">Rigorous Laboratory Testing</h2>
            <p className="text-gray-500 text-sm mt-2 mb-6">Every batch undergoes intensive testing at our in-house lab and accredited third-party labs to ensure they meet global safety standards.</p>
            <div className="space-y-4">
              {labTests.map(t => (
                <div key={t.title} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-teal-50 rounded-xl flex items-center justify-center text-lg shrink-0">{t.icon}</div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">{t.title}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="btn-outline mt-6">↓ Download Sample Lab Report</a>
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD CENTER ── */}
      <section className="section-pad bg-gray-50">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="section-tag">Documents</p>
            <h2 className="section-title">Compliance Download Center</h2>
            <p className="section-sub mx-auto">Access official copies of all certifications for your procurement and compliance team.</p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-soft border border-gray-100">
            <div className="grid grid-cols-4 bg-teal-600 px-6 py-3 text-xs font-semibold text-teal-100 uppercase tracking-wide">
              <span>Certificate Name</span>
              <span>Issuing Authority</span>
              <span>Valid Until</span>
              <span className="text-right">Download</span>
            </div>
            {downloadCerts.map((c, i) => (
              <div key={i} className={`grid grid-cols-4 px-6 py-4 items-center ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <span className="font-semibold text-brand-dark text-sm">{c.name}</span>
                <span className="text-gray-500 text-sm">{c.issuer}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">{c.validUntil}</span>
                  <span className={`badge text-[10px] ${c.status === "Permanent" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"}`}>● {c.status}</span>
                </div>
                <div className="text-right">
                  <a href="#" className="inline-flex items-center gap-1.5 text-teal-600 hover:text-teal-800 text-sm font-semibold">PDF ↓</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE PROMISE ── */}
      <section className="section-pad bg-teal-700">
        <div className="container-xl">
          <h2 className="text-3xl font-extrabold text-white text-center mb-10">Our Compliance Promise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {compliancePromise.map(c => (
              <div key={c.title} className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="font-bold text-white text-base mb-2">{c.title}</h3>
                <p className="text-teal-100 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 py-16">
        <div className="container-xl text-center">
          <h2 className="text-3xl font-extrabold text-white">Need Specific Compliance Documents for Your Country?</h2>
          <p className="text-teal-100 mt-4 text-sm max-w-xl mx-auto">Our export team will prepare a complete compliance package tailored to your importing country's requirements — just ask.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact" className="btn-white">📧 Request Compliance Pack</Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors flex items-center gap-2">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function CertCard({ cert, logoSrc }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow border-t-4 border-t-teal-500">
      <div className="flex items-start justify-between mb-4">
        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
          {logoSrc ? (
            <Image src={logoSrc} alt={cert.title} fill className="object-contain p-1" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-2xl">{cert.icon}</div>
          )}
        </div>
        <span className="badge bg-green-100 text-green-600 text-[10px]">✅ {cert.status}</span>
      </div>
      <h3 className="font-bold text-brand-dark text-base">{cert.title}</h3>
      <p className="text-teal-600 text-xs font-medium mt-0.5">{cert.fullName}</p>
      <p className="text-gray-500 text-xs mt-3 leading-relaxed">{cert.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {cert.tags.map(t => <span key={t} className="badge bg-teal-50 text-teal-600 text-[10px]">{t}</span>)}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-gray-400">Certificate No.</p>
          <p className="text-xs font-semibold text-brand-dark">{cert.number}</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-gray-400">Valid Until</p>
          <p className="text-xs font-semibold text-brand-dark">{cert.validUntil}</p>
        </div>
      </div>
      <a href="#" className="mt-4 block w-full border border-teal-500 text-teal-600 text-center py-2 rounded-xl text-xs font-semibold hover:bg-teal-50 transition-colors">
        View Certificate
      </a>
    </div>
  )
}

function ExportCertCard({ cert }) {
  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden flex">
      <div className="w-20 bg-teal-600 flex items-center justify-center text-3xl shrink-0">{cert.icon}</div>
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-bold text-brand-dark text-base">{cert.title}</h3>
            <p className="text-teal-500 text-xs">{cert.fullName}</p>
          </div>
          <span className={`badge text-[10px] shrink-0 ml-2 ${cert.status === "Permanent" ? "bg-blue-100 text-blue-600" : cert.status === "Per Shipment" ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600"}`}>● {cert.status}</span>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed mb-4">{cert.description}</p>
        <div className="grid grid-cols-2 gap-1.5">
          {cert.benefits.map(b => (
            <div key={b} className="flex items-center gap-1.5 text-[11px] text-gray-600">
              <span className="text-teal-500 font-bold">✓</span>{b}
            </div>
          ))}
        </div>
        <a href="#" className="text-teal-600 text-xs font-semibold mt-3 block hover:underline">Learn More →</a>
      </div>
    </div>
  )
}
