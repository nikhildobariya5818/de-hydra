import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-8xl mb-6">🌿</div>
        <h1 className="text-6xl font-extrabold text-teal-600">404</h1>
        <h2 className="text-2xl font-bold text-brand-dark mt-3">Page Not Found</h2>
        <p className="text-gray-500 mt-3 max-w-sm mx-auto text-sm leading-relaxed">
          The page you're looking for doesn't exist. It may have been moved or deleted.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Link href="/" className="btn-primary">Go to Homepage</Link>
          <Link href="/products" className="btn-outline">Browse Products</Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
