import React from 'react'
import Link from 'next/link'
import { GoLinkExternal } from 'react-icons/go'
import Container from './Container'
type Props = {}

const ProductBanner = (props: Props) => {
    return (
        <Container bgColor='bg-light'>
            <div className=' grid lg:grid-cols-2 gap-10  rounded-lg  overflow-hidden bg-white'>
                <div className=' h-full w-full max-h-80'>
                    <img
                        className=' w-full h-full object-cover '
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthegadgetflow.com%2Fwp-content%2Fuploads%2F2019%2F09%2FRoadwarez-Road-Tracker-Bluetooth-Enabled-Cycling-Backpack-01-1200x923.jpg&f=1&nofb=1&ipt=4165b3a9a0a4748607a25d33122a0623c22b171b0e2723cdc5a2cb7341f373ff&ipo=images" alt="" />
                </div>
                <div className=' flex flex-col  row-start-1  lg:row-start-auto justify-center '>
                    <h2 className=' text-[32px] font-medium text-dark pb-10  pr-5'>
                        Find the right <span className=' text-brow uppercase font-bold'>backpack</span> to move and explore this beautiful world
                    </h2>

                    <Link href={'/store'} className=' btn btnDark w-fit'>See Catalog <GoLinkExternal size={20} /></Link>
                </div>
            </div>

        </Container>
    )
}

export default ProductBanner