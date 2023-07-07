
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import ProductBanner from '@/components/ProductBanner'
import SupportBanner from '@/components/SupportBanner'
import Partners from '@/components/Partners'


export default function Home() {
  return (
    <div className=''>
      <Hero />
      <Products title='New Arrived' isNewArrived={true} bgSection='light' >
        <ProductBanner />
      </Products>
      <Products title='Backpacks best-sold' bgSection='white'>
        <SupportBanner />
      </Products>
      <Partners />
    </div>
  )
}
