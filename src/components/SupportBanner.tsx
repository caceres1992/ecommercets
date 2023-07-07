import Link from 'next/link'
import React from 'react'
import { GoLinkExternal } from 'react-icons/go'
import Container from './Container'

type Props = {}

const SupportBanner = (props: Props) => {
    return (
        <Container>

            <div className='  grid lg:grid-cols-2 gap-20 rounded-lg  overflow-hidden bg-light p-10'>
                <div className=' flex flex-col gap-5 justify-center '>
                    <h2 className='  text-[42px] font-bold text-dark '>
                        We support you with all our heart
                    </h2>
                    <p className=' text-[28px] font-medium text-black'>The 10% of your purchase will be donated to <span className=' bg-gradient-to-br text-transparent  bg-clip-text from-red-600 to-orange-600 font-bold'> Star Kids </span>in Peru. </p>

                    <Link href={'/store'} className=' btn btnDark w-fit'>Visit Star Kids <GoLinkExternal size={20} /></Link>
                </div>

                <div className=' h-full w-full max-h-96 grid-cols-2 grid gap-1 rounded-lg  overflow-hidden'>
                    <img
                        className=' w-full h-full object-cover '
                        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffarm3.static.flickr.com%2F2393%2F1681927589_7a5deee863_o.jpg&f=1&nofb=1&ipt=544228028c07250ce8e150602f28254559c444a88467884b38dae0b47f3fa54a&ipo=images" alt="" />
                    <img
                        className=' w-full h-full object-cover '
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-GxZovbuZmLA%2FVilT9x2pnBI%2FAAAAAAAAAYo%2FrGiT0dFyEwY%2Fs1600%2FPeru_children.jpg&f=1&nofb=1&ipt=2270bb5577babeb8e12fed03fa4361d9b579567d884a1d8602eaf13eb996495b&ipo=images" alt="" />

                    <img
                        className=' w-full h-full object-cover col-span-2 '
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.goabroad.com%2Fsection_cloudinary%2Fgaplabs%2Fimage%2Fupload%2Fimages2%2Fprogram_content%2Fgeneric-why-volunteer-in-peru-5-1569348079.jpg&f=1&nofb=1&ipt=52f1d560cc42bd0ec6e2867429624c5ac1bd86aa63c09af86bfdd404445183bc&ipo=images" alt="" />

                </div>

            </div>
        </Container>

    )
}

export default SupportBanner