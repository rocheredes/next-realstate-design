import React, { ReactElement } from 'react'

interface Props {
    title: string
    description: string
    icon?: ReactElement
}

const OurServiceCard = ({ title, description, icon }: Props) => {
    return (
        <div className='flex flex-col justify-center items-center p-10 mb-8 bg-white rounded-3xl gap-3 text-center'>
            <div className='flex justify-center items-center w-16 h-16 rounded-full bg-secondary-500 '>
                {icon}
            </div>
            <h5 className='text-dark-2 text-base'>{title}</h5>
            <p className='text-dark-3 text-small-text'>{description} </p>
        </div>
    )
}

export default OurServiceCard