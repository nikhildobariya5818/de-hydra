import Link from "next/link"
import Image from "next/image"

const quickLinks = ["Home","Products","About Us","Our Process","Certifications","Blog","Contact"]
const products   = ["Dehydrated Vegetables","Dehydrated Fruits","Spices & Powders","Herbs & Greens","Private Label / Bulk"]

const socialIcons = [
  { name:"LinkedIn",  href:"#", img:"/images/icons/linkedin.png" },
  { name:"Instagram", href:"#", img:"/images/icons/instagram.png" },
  { name:"Facebook",  href:"#", img:"/images/icons/facebook.png" },
  { name:"X/Twitter", href:"#", img:"/images/icons/x-twitter.png" },
]

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-teal-500 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 36 36" className="w-6 h-6 fill-white">
                  <path d="M18 4C11 4 6 10 6 10s3 8 12 8 12-8 12-8S25 4 18 4z"/>
                  <path d="M18 18c-5 0-10 4-10 4s2 6 10 6 10-6 10-6-5-4-10-4z" opacity=".7"/>
                </svg>
              </div>
              <div>
                <span className="font-bold text-white text-lg leading-none">De'hydra</span>
                <span className="block text-[10px] text-teal-300 leading-none">Food Venture</span>
              </div>
            </div>
            <p className="text-teal-200 text-sm leading-relaxed mb-4">Premium dehydrated foods for global B2B trade. Preserving nature's bounty through innovative dehydration technology.</p>
            <p className="text-teal-400 text-xs font-semibold mb-4">Powered by Sryshaya Group</p>
            <div className="flex gap-3">
              {socialIcons.map(s => (
                <a key={s.name} href={s.href} className="w-9 h-9 rounded-full bg-teal-700 hover:bg-teal-500 flex items-center justify-center transition-colors overflow-hidden" aria-label={s.name}>
                  <div className="relative w-5 h-5">
                    <Image src={s.img} alt={s.name} fill className="object-contain" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(l => (
                <li key={l}>
                  <Link href={`/${l.toLowerCase().replace(/\s+/g,"-").replace(/'/g,"")}`} className="text-teal-200 hover:text-white text-sm transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Our Products</h4>
            <ul className="space-y-2">
              {products.map(p => (
                <li key={p}>
                  <Link href="/products" className="text-teal-200 hover:text-white text-sm transition-colors">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-teal-200"><span className="text-teal-400 mt-0.5">📍</span><span>Ahmedabad, Gujarat, India – 380001</span></li>
              <li className="flex gap-3 text-sm text-teal-200"><span className="text-teal-400">📧</span><a href="mailto:info@dehydra.in" className="hover:text-white transition-colors">info@dehydra.in</a></li>
              <li className="flex gap-3 text-sm text-teal-200"><span className="text-teal-400">📞</span><a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a></li>
              <li className="flex gap-3 text-sm text-teal-200"><span className="text-teal-400">🕒</span><span>Mon–Sat: 9AM – 6PM IST</span></li>
            </ul>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors w-fit">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-teal-700">
        <div className="container-xl py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-teal-300">
          <span>© 2025 De'hydra Food Venture. All Rights Reserved. A Sryshaya Group Company.</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
