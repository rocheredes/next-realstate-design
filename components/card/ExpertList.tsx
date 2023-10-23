import Image from 'next/image'
import React from 'react'


interface Props {
    imgUrl: string,
    name: string
    profession: string
}

const ExpertList = ({
    imgUrl,
    name,
    profession
}: Props) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='relative w-32 h-44 rounded-tl-[80px] rounded-tr-[20px] rounded-b-3xl overflow-hidden'>
                <Image
                    fill
                    src={imgUrl}
                    alt='imagen01'
                    className='object-cover'
                />
                <div
                    className='overlay items-end text-left bg-transparent bg-gradient-to-b from-black/0 to-black/40'
                />
            </div>


            <div className=' px-2 text-center mt-5'>
                <p className='text-dark-1 text-buttons-text '>{name}</p>
                <p className='text-small-text leading-[22px] text-secondary-500 mt-2'>{profession}</p>
            </div>

        </div>
    )
}

export default ExpertList