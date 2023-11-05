'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css'
import { StarIcon } from '@heroicons/react/24/solid';
import BlockquoteIcon from '../icons/BlockquoteIcon';
import { Avatar, AvatarImage } from '../ui/avatar';

interface TestimonialProps {
    description: string
    rating: number
    user: {
        name: string
        imgUrl: string
    }
}

interface Props {
    testimonials: TestimonialProps[]
}

const TestimonialSlider = ({ testimonials }: Props) => {

    console.log("SSSSSS", testimonials)

    const pagination = {
        el: '.pagination',
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return (
                '<div class="' + className + ' !flex-1 !h-1 !rounded-lg cursor-pointer">' + '' + '</div>'
            )
        },
    };



    return (

        <Swiper

            pagination={pagination}
            modules={[Pagination]}
        >
            {
                testimonials.map(({ description, rating, user }, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex flex-col gap-5 mt-10 py-8 px-6 rounded-3xl shadow-sm'>
                            <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
                                <BlockquoteIcon classContainer='w-10 h-9' />
                                <p className='mt-3 text-buttons-text not-italic leading-relaxed'>{description}</p>
                            </blockquote>

                            <hr />

                            <div className='user flex gap-3'>
                                <Avatar className='w-14 h-14'>
                                    <AvatarImage
                                        src={user.imgUrl}
                                        className='object-cover'
                                    />
                                </Avatar>

                                <div>
                                    <p className='text-buttons-text'>{user.name}</p>
                                    <div className='flex mt-3'>
                                        {Array(5).fill(1).map((rat, index) => (
                                            <StarIcon
                                                key={index}
                                                className={`w-4 h-4 ${index < rating ? 'fill-[#FFC700]' : 'fill-light-2'}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }



            <div className="flex justify-start space-x-3 mt-3 mx-4 pagination" />



        </Swiper>


    )
}

export default TestimonialSlider