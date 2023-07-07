import React from 'react'
import Container from './Container'
import { AiFillInstagram, AiOutlineSend, AiOutlineTwitter, AiOutlineMail } from 'react-icons/ai'
import { RiFacebookFill } from 'react-icons/ri'
import Link from 'next/link'
type Props = {}

const Footer = (props: Props) => {
    return (
        <footer >
            <Container bgColor=' bg-brow' className='  text-dark py-20 grid md:grid-cols-2   lg:grid-cols-3 gap-10 lg:gap-5'>
                <div className=' space-y-3.5'>
                    <h2 className=' text-2xl font-bold'>Newsletter</h2>
                    <div className=' w-full'>
                        <form className=' flex  w-full rounded-lg overflow-hidden'>
                            <div className=' w-full relative'>
                                <input className='bg-white py-3.5 pl-8 w-full' placeholder='Your email' />
                                <AiOutlineMail className='absolute left-2 top-1/2 -mt-2'  size={16}/>
                            </div>

                            <button type='submit' className=' bg-dark  group flex gap-2 items-center px-5  text-white'>
                                <span className='hidden md:block'>Subscribe</span>
                                <AiOutlineSend className='transform  group-hover:-rotate-45 relative group-hover:-top-0.5 transition-all  ease-out' />
                            </button>
                        </form>

                        <div className='flex items-center gap-2 mt-4'>
                            <Link href={'/'} className=' w-8  h-8 bg-dark rounded-full flex justify-center items-center'>
                                <RiFacebookFill color='white' size={20} />
                            </Link>
                            <Link href={'/'} className=' w-8  h-8 bg-dark rounded-full flex justify-center items-center'>
                                <AiFillInstagram color='white' size={20} />
                            </Link>
                            <Link href={'/'} className=' w-8  h-8 bg-dark rounded-full flex justify-center items-center'>
                                <AiOutlineTwitter color='white' size={20} />
                            </Link>

                        </div>
                    </div>
                </div>
                <div className='  text-black text-5xl font-bold lg:text-center  md:row-start-1  self-center lg:row-start-auto'>ALUKAPE</div>
                <div className=' space-y-3.5'>
                    <h2 className=' text-2xl font-bold'>Contact Info</h2>
                    <p>(470)124-1234</p>
                    <p>info@yourcompany.com</p>
                    <p>address 123, 34056 GA United States</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer