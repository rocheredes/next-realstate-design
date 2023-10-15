'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
const CompanyCarrousel = () => {
    return (
        <>
          
            <Swiper>
                <SwiperSlide>
                    <div className='relative h-48 w-full'>
                        <Image
                            fill
                            src='/images/google.png'
                            alt='House Image'
                            className='object-cover'
                        />
                    </div>
                </SwiperSlide>

            </Swiper>
        </>

    )
}

export default CompanyCarrousel
