import Image from 'next/image'
import React from 'react'

interface Props {
    imgUrl: string
    title: string,
    description: string,
    date: string
}

const Treding = ({
    imgUrl,
    title,
    description,
    date
}: Props) => {
    return (
        <div>
            <div className='relative w-full h-52  rounded-2xl overflow-hidden'>
                <Image
                    fill
                    src={imgUrl}
                    className='object-cover'
                    alt={title}
                />

                <div
                    className='overlay justify-start items-start text-left bg-transparent bg-gradient-to-b from-black/0 to-black/100'
                >
                </div>

                <div className='flex flex-col items-center justify-center absolute inset-0 w-11 h-[45px] p-2 ml-5 rounded-b-[10px] bg-white'>
                        <p className='text-buttons-text  text-dark-2'>{date.split(' ')[0]}</p>
                        <p className='text-small-text  text-dark-3'>{date.split(' ')[1]}</p>
                        
                    </div>

            </div>
            <h2 className='mt-4 text-white text-heading4-medium'>{title}</h2>
            <p className='text-small-text text-light-2 mt-2'>{description}</p>


        </div>
    )
}

export default Treding