import { Properties } from '@/app/interface/properties'
import Image from 'next/image'
import React from 'react'
import { Badge } from '../ui/badge'



const ListedProperties = ({
    url,
    category,
    price,
    title,
    description,
    beds,
    baths,
    iconCategory,
    iconColorText,
    iconColorBg

}: Properties) => {
    return (
        <div>
            <div className='relative w-full h-56 mt-5 rounded-2xl overflow-hidden'>
                <Image
                    fill
                    src={url}
                    className='object-cover'
                    alt={title}
                />

                {category && (
                    <div
                        className='list-properties_categories px-6 py-2 rounded-full'
                        style={{
                            background: iconColorBg ? iconColorBg : '',
                            color: iconColorText ? iconColorText : ''
                        }}
                    >
                        {iconCategory && (
                            <Image
                                src={iconCategory}
                                width={15}
                                height={15}
                                alt={category}
                                className='w-4 h-4'
                            />
                        )}
                        <span className='text-small-text'>{category}</span>
                    </div>
                )
                }
            </div>

            <h2 className='mt-4 text-heading4-semibold'>$ {price}</h2>
            <p className='text-small-text text-dark-3 mt-2'>{description}</p>
            <div className='flex gap-5 mt-3'>
                <div className='flex gap-2 items-center'>
                    <Image
                        src={'/images/icons/icon_bed_.svg'}
                        width={22}
                        height={16}
                        alt='bed'
                        className='text-dark-2 object-cover -mt-1'
                    />
                    <span className='text-small-text text-dark-2'>{beds} beds</span>
                </div>

                <div className='flex gap-2 items-center'>
                    <Image
                        src={'/images/icons/icon_bathroom_.svg'}
                        width={22}
                        height={16}
                        alt='bed'
                        className='text-dark-2 object-cover -mt-1'
                    />
                    <span className='text-small-text text-dark-2'>{baths} Bath</span>
                </div>

            </div>

        </div>
    )
}

export default ListedProperties