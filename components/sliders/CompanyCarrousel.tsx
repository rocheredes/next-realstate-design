'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import { companyImages } from '../../constant/index'
import 'swiper/css'

interface Props {
    slidePerView?: number,
    spaceBetween?: number
}

const CompanyCarrousel = ({
    slidePerView = 3,
    spaceBetween = 20
}: Props) => {
    return (


        <Swiper
            slidesPerView={slidePerView}
            spaceBetween={spaceBetween}
            breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
        >
            {
                companyImages.map(({ url, alt }) => (
                    <SwiperSlide key={url}>
                        
                            <Image
                                width={120}
                                height={40}
                                src={url}
                                alt={alt}
                                className='object-cover !w-full   grayscale'
                            />
                      
                    </SwiperSlide>
                ))
            }


        </Swiper>


    )
}

export default CompanyCarrousel
