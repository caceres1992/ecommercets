import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
type Props = {
  isNewArrived?: boolean
}

const ProductCard = ({ isNewArrived }: Props) => {
  return (
    <div className=' p-5  bg-white  rounded-lg border hover:border-brow cursor-pointer border-[#F9F6F3]'>
      <div className=' h-36 w-full relative'>
        <div className='flex  justify-between absolute top-0 w-full items-center'>
          <AiOutlineHeart size={20} />
          {isNewArrived &&
            <span className=' bg-black text-white text-xs font-bold py-1 px-2 rounded-md'>New</span>

          }
        </div>
        <img
          className=' h-full w-full object-contain '
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.stickpng.com%2Fimages%2F580b585b2edbce24c47b274b.png&f=1&nofb=1&ipt=523218910fd3b4f51bc0bf735e1ebecbc9b517aeb4a9c64ff2b5a7cf04fe8252&ipo=images" alt="" />
      </div>

      <div className=' text-dark   pt-3 '>
        <p className=' font-bold'>Nike Hiking Backpack </p>
        <span className=' font-medium  pt-1 block'>USD 32.00 <span className='  font-normal line-through text-xs text-gray-300'>USD 55.00 </span> </span>

      </div>
    </div>
  )
}

export default ProductCard