'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';



const MainSlider = () => {

    const pagination = {
        el: '.pagination',
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return (
                '<div class="' + className + ' !flex-1 !h-1 !rounded-lg cursor-pointer">' + '' + '</div>'
            )
        },
    };

    const navigation = {
        nextEl: '.swipper-arrows-next',
        prevEl: '.swipper-arrows-prev'
    }

    return (
        <>
            <Swiper
                navigation={navigation}
                pagination={pagination}
                modules={[Pagination, Navigation]}
                breakpoints={{
                    640: {
                      slidesPerView: 2,
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
                <SwiperSlide>
                    <div className='relative h-48 w-full rounded-3xl overflow-hidden'>
                        <Image
                            fill
                            src='/images/c0db865f789961bb3e28500f19c35c4e.jpg'
                            alt='House Image'
                            className='object-cover'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-48 w-full rounded-3xl overflow-hidden'>
                        <Image
                            fill
                            src='/images/8363fc4f62fd9a46cc28eb202059adff.jpg'
                            alt='House Image'
                            className='object-cover'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-48 w-full rounded-3xl overflow-hidden'>
                        <Image
                            fill
                            src='/images/8363fc4f62fd9a46cc28eb202059adff.jpg'
                            alt='House Image'
                            className='object-cover'
                        />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-48 w-full rounded-3xl overflow-hidden'>
                        <Image
                            fill
                            src='/images/3c1780f6158b1d62f2036152ec7a594f.jpg'
                            alt='House Image'
                            className='object-cover'
                        />
                    </div>
                </SwiperSlide>

                <div className="flex justify-start space-x-3 mt-3 mx-4 pagination" />
                <div className="swipper-arrows-next next">
                    <div className="main-swipper-arrow">
                        <ChevronRightIcon className='w-6 h-6 text-light-1' />
                    </div>
                </div>

                <div className="swipper-arrows-prev prev">
                    <div className="main-swipper-arrow">
                        <ChevronLeftIcon className='w-6 h-6 text-light-1' />
                    </div>
                </div>


            </Swiper>

        </>
    )
}

export default MainSlider