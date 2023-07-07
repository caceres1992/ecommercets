import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { AiOutlineCreditCard } from 'react-icons/ai'
type Props = {}

const ProductsTable = (props: Props) => {
    return (
        <Container className=' flex  xl:flex-row flex-col gap-10 py-20'>
            <div className=' flex-1  xl:min-h-[50vh] h-full'>
                <table className='productsTable w-full table text-left  h-full '>
                    <thead className=''>
                        <tr >
                            <th className=' px-3'>#</th>
                            <th className=' pl-1 border-r' >Code</th>
                            <th className='pl-5 border-r'>Product Name</th>
                            <th className='pl-5 border-r'>Quantity</th>
                            <th className='pl-5 '>Actions</th>
                        </tr>
                    </thead>
                    <tbody>



                        <tr className='  '>
                            <td className=' px-3'> <input className='  ' type={'checkbox'} /> </td>
                            <td className=' text-gray-300 text-sm font-medium'>ABFERSE231</td>
                            <td>
                                <div className=' flex items-center py-2.5'>
                                    <img
                                        width={50}
                                        height={60}
                                        className='  object-contain'
                                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1ZbAUXTjxK1Rjy0Fnq6yBaFXaf%2Fmotorcycle-bag-hard-shell-backpack-tide-Knight-men-fashion-bike-bags-motorcycle-men-s-cross-country.jpg&f=1&nofb=1&ipt=0d434d5e49fc3507e127d1e55446938c1924e7f605e15127138f661e4f172862&ipo=images" alt="" />
                                    <div>
                                        <p className=' font-bold text-dark'>North Face Army</p>
                                        <p className=' font-medium text-dark'>USD 55.99 <span className=' text-xs text-gray-300  line-through'>USD 67.00</span></p>
                                    </div>
                                </div>
                            </td>
                            <td className=' '>
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
                            </td>
                            <td> <button className=' text-red-500 ml-5 font-bold text-xs'>DELETE</button> </td>
                        </tr>
                        <tr className='  '>
                            <td className=' px-3'> <input className='  ' type={'checkbox'} /> </td>
                            <td className=' text-gray-300 text-sm font-medium'>ABFERSE231</td>
                            <td>
                                <div className=' flex items-center py-2.5'>
                                    <img
                                        width={50}
                                        height={60}
                                        className='  object-contain'
                                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1ZbAUXTjxK1Rjy0Fnq6yBaFXaf%2Fmotorcycle-bag-hard-shell-backpack-tide-Knight-men-fashion-bike-bags-motorcycle-men-s-cross-country.jpg&f=1&nofb=1&ipt=0d434d5e49fc3507e127d1e55446938c1924e7f605e15127138f661e4f172862&ipo=images" alt="" />
                                    <div>
                                        <p className=' font-bold text-dark'>North Face Army</p>
                                        <p className=' font-medium text-dark'>USD 55.99 <span className=' text-xs text-gray-300  line-through'>USD 67.00</span></p>
                                    </div>
                                </div>
                            </td>
                            <td className=' '>
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
                            </td>
                            <td> <button className=' text-red-500 ml-5 font-bold text-xs'>DELETE</button> </td>
                        </tr>
                        <tr className='  '>
                            <td className=' px-3'> <input className='  ' type={'checkbox'} /> </td>
                            <td className=' text-gray-300 text-sm font-medium'>ABFERSE231</td>
                            <td>
                                <div className=' flex items-center py-2.5'>
                                    <img
                                        width={50}
                                        height={60}
                                        className='  object-contain'
                                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1ZbAUXTjxK1Rjy0Fnq6yBaFXaf%2Fmotorcycle-bag-hard-shell-backpack-tide-Knight-men-fashion-bike-bags-motorcycle-men-s-cross-country.jpg&f=1&nofb=1&ipt=0d434d5e49fc3507e127d1e55446938c1924e7f605e15127138f661e4f172862&ipo=images" alt="" />
                                    <div>
                                        <p className=' font-bold text-dark'>North Face Army</p>
                                        <p className=' font-medium text-dark'>USD 55.99 <span className=' text-xs text-gray-300  line-through'>USD 67.00</span></p>
                                    </div>
                                </div>
                            </td>
                            <td className=' '>
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
                            </td>
                            <td> <button className=' text-red-500 ml-5 font-bold text-xs'>DELETE</button> </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='  w-80 border border-gray-200 rounded-lg px-3  py-10 space-y-5 h-fit'>
                <p className=' text-dark font-medium'>Get FREE delivery with over USD $100.00 </p>

                <p className=' text-dark font-bold'>Subtotal (4 items) USD 124.00</p>

                <Link href={'/pay'} className=' btn btnDark justify-center '>
                  
                Proceed to checkout
                    <AiOutlineCreditCard size={20} />
                </Link>
            </div>
        </Container>

    )
}

export default ProductsTable