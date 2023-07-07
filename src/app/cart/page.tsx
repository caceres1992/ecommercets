import CartBanner from '@/components/CartBanner'
import Container from '@/components/Container'
import ProductsTable from '@/components/ProductsTable'
import Link from 'next/link'
import React from 'react'
import { AiOutlineCreditCard } from 'react-icons/ai'

type Props = {}

function page({ }: Props) {
    return (
        <div>
            <CartBanner />
            <div className=' hidden  sm:block'>
                <ProductsTable />
            </div>
            <div className='py-10 sm:hidden min-h-screen flex  flex-col'>

                <Container className='   '>
                    <div className=' flex-1 pb-5'>
                        {Array(6).fill(0).map((_, idx) => <div key={idx} className='border-b text-sm'>
                            <div className=' flex items-center py-2.5 w-full'>
                                <img
                                    width={80}
                                    height={80}
                                    className='  object-contain'
                                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1ZbAUXTjxK1Rjy0Fnq6yBaFXaf%2Fmotorcycle-bag-hard-shell-backpack-tide-Knight-men-fashion-bike-bags-motorcycle-men-s-cross-country.jpg&f=1&nofb=1&ipt=0d434d5e49fc3507e127d1e55446938c1924e7f605e15127138f661e4f172862&ipo=images" alt="" />
                                <div className=' w-full  pb-2.5 px-5'>
                                    <p className=' font-bold text-dark'>North Face Army</p>
                                    <p className='text-gray-300 text-sm font-medium'>ABFERSE231</p>
                                    <p className=' font-medium text-dark'>USD 55.99 <span className=' text-xs text-gray-300  line-through'>USD 67.00</span></p>
                                    <div className=' flex justify-between items-center'>
                                        <select className=' text-dark font-bold bg-transparent p-2'>
                                            <option>1 product</option>
                                            <option>2 products</option>
                                            <option>3 products</option>
                                            <option>4 products</option>
                                            <option>5 products</option>
                                            <option>6 products</option>
                                            <option>7 products</option>
                                            <option>8 products</option>
                                        </select>

                                        <button className=' text-red-500 ml-5 font-bold text-xs'>DELETE</button>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>

                </Container>
                <div className='  pt-5 sticky bottom-0 bg-white w-full flex flex-col gap-y-5   text-center border-gray-200 rounded-lg   h-fit '>
                    <p className=' text-dark font-medium text-xs'>Get FREE delivery with over USD $100.00 </p>
                    <p className=' text-dark font-bold text-sm'>Subtotal (4 items) USD 124.00</p>
                    
                    <Link href={'/pay'} className=' btn btnDark  text-sm  rounded-none  justify-center '>
                        Proceed to checkout
                        <AiOutlineCreditCard size={16} />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default page