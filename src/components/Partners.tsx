import React from 'react'
import Container from './Container'

type Props = {}

const Partners = (props: Props) => {
    return (
        <Container className=' text-dark py-16 text-center'>
            <h2 className='font-bold text-[42px]'>Our Partners</h2>
            <p className='   font-medium'>We have the perfect travel backpack for all your adventures.</p>
            
            <div className=' flex   justify-center  flex-wrap  items-end gap-20 mt-16'>
                        <img width={85} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-nike-logologobrand-logoiconslogos-251519940082eoxxs.png&f=1&nofb=1&ipt=9d18de22dc9fd30b32a1c1c054e42f46d81597f138ed4ea0ecfa9b82f162e567&ipo=images'/>
                        <img width={85} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogosmarcas.net%2Fwp-content%2Fuploads%2F2020%2F11%2FThe-North-Face-Logo.png&f=1&nofb=1&ipt=50f53cee0101201dd8dfd55228d732e4dcc7a38239a5d07435106870ba6af3ad&ipo=images'/>
                        <img width={85} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodix.com%2Flogo%2F759107.png&f=1&nofb=1&ipt=5d00957971801653aae9e256ab777572befb033ed77a3165c9d16ccc6d184b5f&ipo=images'/>
                        <img width={85} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fbig%2F68-687556_puma-logo-black-sports-brand-logo-png-clipart.png&f=1&nofb=1&ipt=f2619f1971e1c9e64a56b358021a03b2d08164adb06c5e2a7d5ccfff8097c503&ipo=images'/>
            </div>
        </Container>
    )
}

export default Partners