"use client"
import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { AiOutlineArrowRight } from 'react-icons/ai'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Hero = () => {


  return (
    <div className=' lg:h-[calc(100vh-80px)] w-full'>
      <div className='py-12 grid lg:grid-cols-2 gap-10 xl:gap-20 justify-center items-center   h-full   container '  >
        <div className=' space-y-8'>
          <div className=' space-y-5  ml-auto    text-center lg:text-left'>
            <h1 className=' text-5xl xl:text-6xl font-bold text-dark'>Ready to Travel!</h1>
            <p className=' text-lg  md:text-2xl text-dark font-medium'>
              We have the perfect travel backpack
              for all your adventures.
            </p>
          </div>
          <div className='lg:hidden'>

            <Swiper
              className=' h-72 md:h-80 lg:h-96 lg:hidden   lg:w-52 xl:w-96  overflow-hidden hero-swiper'
              direction='vertical'
              centeredSlides={true}
              spaceBetween={30}
              pagination={{
                clickable: true
              }}
              modules={[Autoplay, Pagination, Navigation]}


            >
              <SwiperSlide className=''>
                <img
                  width={300}
                  className='mx-auto rounded-md h-full object-cover'
                  src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHLB1zSDFbh2rK1RkSnhJq6ykdpXal%2FQuality-PU-Leather-Backpack-Woman-New-Fashion-Female-Laptop-Backpack-Large-Capacity-Vintage-School-Bag-Mochila.jpg&f=1&nofb=1&ipt=4bec0f2510f0859196b02c9297d2be5518942c19d589517edf1ab316df9c1071&ipo=images' />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  width={300}
                  className='mx-auto rounded-md h-full object-cover'
                  src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F03%2F69%2Fa2%2F0369a23c556fa534f54b341fa6c805d6.jpg&f=1&nofb=1&ipt=5d6009820757a6e666e6a7a77dadf78f782eb640d79d9fe0fee5b7c178f3655f&ipo=images' />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  width={300}
                  className='mx-auto rounded-md h-full object-cover'
                  src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0563%2F0145%2F3447%2Ffiles%2Fsatchel-and-page-leather-backpack_480x480.jpg%3Fv%3D1688025095&f=1&nofb=1&ipt=c6494f0a69020e65ddafd634168924665b5274fbb18cac56ba181cf40ac88d33&ipo=images' />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className=' text-dark flex gap-10 lg:justify-start justify-center'>
            <p className=' font-bold'>Backpack BEIGDE </p>
            <span className=' font-medium'>USD 32.00 <span className='  font-normal line-through text-xs text-gray-300'>USD 55.00 </span> </span>
          </div>
          <div className='flex items-center flex-col   sm:flex-row  lg:justify-start justify-center gap-5 sm:gap-10'>
            <button className='btn  btnDark '>Add to the basket</button>
            <Link className='btn  group' href={'/pay'}>I want it know  <AiOutlineArrowRight size={26} className=' relative block left-0 group-hover:left-4 transition-all ease-in-out' /> </Link>
          </div>
          <div>

          </div>
        </div>
        <div className=' hidden lg:block'>
          <Swiper
            className=' h-[450px]      overflow-hidden hero-swiper'
            direction='vertical'
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true
            }}
            modules={[Autoplay, Pagination, Navigation]}


          >
            <SwiperSlide className=''>
              <img
                width={300}
                className='mx-auto rounded-md h-full object-cover'
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHLB1zSDFbh2rK1RkSnhJq6ykdpXal%2FQuality-PU-Leather-Backpack-Woman-New-Fashion-Female-Laptop-Backpack-Large-Capacity-Vintage-School-Bag-Mochila.jpg&f=1&nofb=1&ipt=4bec0f2510f0859196b02c9297d2be5518942c19d589517edf1ab316df9c1071&ipo=images' />
            </SwiperSlide>

            <SwiperSlide>
              <img
                width={300}
                className='mx-auto rounded-md h-full object-cover'
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F03%2F69%2Fa2%2F0369a23c556fa534f54b341fa6c805d6.jpg&f=1&nofb=1&ipt=5d6009820757a6e666e6a7a77dadf78f782eb640d79d9fe0fee5b7c178f3655f&ipo=images' />
            </SwiperSlide>

            <SwiperSlide>
              <img
                width={300}
                className='mx-auto rounded-md h-full object-cover'
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0563%2F0145%2F3447%2Ffiles%2Fsatchel-and-page-leather-backpack_480x480.jpg%3Fv%3D1688025095&f=1&nofb=1&ipt=c6494f0a69020e65ddafd634168924665b5274fbb18cac56ba181cf40ac88d33&ipo=images' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Hero