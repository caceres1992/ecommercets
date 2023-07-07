"use client"
import React from 'react'
import ProductCard from './ProductCard'
import Container from './Container'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
type Props = {
    children?: React.ReactNode
    title?: string,
    isNewArrived?: boolean,
    bgSection?: "light" | "white"
}

const Products = ({ children, title, isNewArrived = false, bgSection = 'light' }: Props) => {
    return (
        <div className={` py-16 bg-${bgSection}`}>

            <Container className='  py-16 space-y-14' bgColor='  '>
                {title && <h2 className=' font-bold text-3xl text-dark underline    decoration-brow  underline-offset-8 '>{title}</h2>}
                <Swiper className='grid grid-cols-4 gap-5 '
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Navigation]}
                >
                    {Array(4).fill(0).map((_, idx) =>
                        <SwiperSlide

                        >
                            <ProductCard key={idx} isNewArrived={isNewArrived} />
                        </SwiperSlide>
                    )}
                </Swiper>

            </Container>
            {children}

        </div>

    )
}

export default Products