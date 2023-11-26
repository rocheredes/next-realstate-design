import Image from 'next/image'
import React from 'react'

interface Props {
    imgUrl: string,
    price: string,
    cityName: string
}

const NeighborhoodProperties = ({
    imgUrl,
    price,
    cityName
}: Props) => {
    return (
        <div className='relative w-full h-40 md:h-64 rounded-3xl overflow-hidden'>
            <Image
                fill
                src={imgUrl}
                alt='imagen01'
            />
            <div
                className='overlay items-end text-left bg-transparent bg-gradient-to-b from-black/0 to-black/100'
            >
                <div className=' px-2 pb-5'>
                    <p className='text-heading3-medium font-semibold'>{price}</p>
                    <p className='text-small-text'>{cityName}</p>
                </div>
            </div>

        </div>
    )
}

export default NeighborhoodProperties