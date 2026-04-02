'use client'

import { useJsonData } from '@/hooks/useJsonData'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import CategoriesSection from '@/components/sections/CategoriesSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ProductsShowcase from '@/components/sections/ProductsShowcase'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import InsightsSection from '@/components/sections/InsightsSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  const { data: homeData, loading: homeLoading } = useJsonData('/data/home.json')
  const { data: productsData, loading: productsLoading } = useJsonData('/data/products.json')

  if (homeLoading || productsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500 mb-4 animate-pulse">
            <div className="w-12 h-12 rounded-full bg-teal-600 animate-spin"></div>
          </div>
          <p className="text-teal-700 font-semibold">Loading premium products...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <HeroSection data={homeData} />
      <StatsSection stats={homeData?.stats} />
      <CategoriesSection data={homeData} />
      <WhyUsSection data={homeData} />
      <ProcessSection data={homeData} />
      <ProductsShowcase products={productsData?.products} />
      <TestimonialsSection data={homeData} />
      <InsightsSection data={homeData} />
      <CTASection data={homeData} />
    </>
  )
}
