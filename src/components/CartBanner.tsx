"use client"
import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { GoLinkExternal } from 'react-icons/go'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';

type Props = {}

const CartBanner = (props: Props) => {
    return (

        <Container bgColor=' hidden sm:block  bg-light' className='  py-16 '>
            <Swiper modules={[Navigation]}
                navigation={true}
                className='cartBanner'
                spaceBetween={50}


            >
                <SwiperSlide>
                    <div className='grid text-center grid-cols-1 lg:grid-cols-2 px-14  gap-10'>

                        <div className='text-dark  flex justify-center items-center flex-col gap-7'>
                            <h1 className='  text-3xl xl:text-4xl font-bold '>Summer is Adventure</h1>
                            <p className=' text-xl  xl:text-2xl'>Get your Motorcycle Backpack</p>
                            <img className=' w-4/5 lg:hidden  h-full max-h-80  object-cover rounded-lg overflow-hidden  border' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgforgadget.com%2Fwp-content%2Fuploads%2F2018%2F10%2Fpix-led-backpack.jpg&f=1&nofb=1&ipt=d58187491d98ebfdd783607ba01ff2f1fbc364aa319710bef124507fd3603192&ipo=images' />

                            <Link className='btn btnDark w-fit ' href={'/pay'}>I want it know
                                <GoLinkExternal size={20} className=' relative block left-0  transition-all ease-in-out' />
                            </Link>
                        </div>

                        <div className=' h-96 hidden lg:block  '>
                            <img className=' w-4/5 ml-auto h-full  object-cover rounded-lg overflow-hidden  border' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgforgadget.com%2Fwp-content%2Fuploads%2F2018%2F10%2Fpix-led-backpack.jpg&f=1&nofb=1&ipt=d58187491d98ebfdd783607ba01ff2f1fbc364aa319710bef124507fd3603192&ipo=images' />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>

                    <div className='grid text-center grid-cols-1 lg:grid-cols-2 px-14  gap-10'>

                        <div className='text-dark  flex justify-center items-center flex-col gap-7'>
                            <h1 className='  text-3xl xl:text-4xl font-bold '>Summer is Adventure</h1>
                            <p className=' text-xl  xl:text-2xl'>Get your Motorcycle Backpack</p>
                            <img className=' w-4/5 lg:hidden  h-full max-h-80  object-cover rounded-lg overflow-hidden  border' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgforgadget.com%2Fwp-content%2Fuploads%2F2018%2F10%2Fpix-led-backpack.jpg&f=1&nofb=1&ipt=d58187491d98ebfdd783607ba01ff2f1fbc364aa319710bef124507fd3603192&ipo=images' />

                            <Link className='btn btnDark w-fit ' href={'/pay'}>I want it know
                                <GoLinkExternal size={20} className=' relative block left-0  transition-all ease-in-out' />
                            </Link>
                        </div>

                        <div className=' h-96 hidden lg:block  '>
                            <img className=' w-4/5 ml-auto h-full  object-cover rounded-lg overflow-hidden  border' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgforgadget.com%2Fwp-content%2Fuploads%2F2018%2F10%2Fpix-led-backpack.jpg&f=1&nofb=1&ipt=d58187491d98ebfdd783607ba01ff2f1fbc364aa319710bef124507fd3603192&ipo=images' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Container>


    )
}

export default CartBanner