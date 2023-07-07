import React from 'react'
import NavLink from './NavLink'
import { AiOutlineSetting, AiOutlineShoppingCart } from 'react-icons/ai'
import Link from 'next/link'
type Props = {}

const Header = (props: Props) => {
  return (
    <header className='w-full bg-white border-b-gray-300 text-dark '>
      <div className='container mx-auto h-20  flex items-center gap-x-10'>
        <div className='text-2xl   font-extrabold'>ALUKAPE</div>
        <nav className=' hidden lg:flex gap-x-5  font-medium'>
          <NavLink title='Home' nameUrl='/' />
          <NavLink title='Store' nameUrl='/store' />
          <NavLink title='Blog' nameUrl='/blog' />
        </nav>

        <div className='flex items-center gap-5 w-full  justify-end'>
          <div className=' hidden md:flex items-center gap-1'>
            <AiOutlineSetting size={20} />
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcache.desktopnexus.com%2Fthumbseg%2F2487%2F2487414-bigthumbnail.jpg&f=1&nofb=1&ipt=8b76f1270cf727e4fa53bcf6484ff7da55f7163754d7a18f80b3308434cb0a2e&ipo=images"
              alt="" className=' rounded-full object-cover h-10 w-10' />
            <div className=' text-sm italic flex flex-col justify-center items-center'>
              <span>Welcome</span>
              <span className=' font-bold'>Jasson</span>
            </div>
          </div>
          <Link href={'/cart'} className='text-xs flex items-center gap-x-1 font-medium'>
            <div className='relative'>
              <AiOutlineShoppingCart size={26} />
              <div className=' bg-black text-white  rounded-full h-5 w-5 flex items-center justify-center absolute -top-2.5  -right-2 '>3</div>
            </div>
            $150.00
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header