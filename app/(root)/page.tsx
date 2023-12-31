'use client'
import SearchForm from '@/components/forms/SearchForm'
import CompanyCarrousel from '@/components/sliders/CompanyCarrousel'
import MainSlider from '@/components/sliders/MainSlider'
import Image from 'next/image'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { categories, properties, testimonials, userGroupsImages } from '../../constant'
import { PlusIcon, MagnifyingGlassIcon, HomeIcon, PhoneIcon, EnvelopeIcon, ArrowSmallRightIcon } from '@heroicons/react/24/outline'
import ListedProperties from '@/components/card/ListedProperties'
import { Button } from '@/components/ui/button'
import OurServiceCard from '@/components/card/OurServiceCard'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, BedIcon, Facebook, LucideFacebook } from 'lucide-react'
import NeighborhoodProperties from '@/components/card/NeighborhoodProperties'
import ExpertList from '@/components/card/ExpertList'
import Treding from '@/components/card/Treding'

import TestimonialSlider from '@/components/sliders/TestimonialSlider'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import FacebookIcon from '@/components/icons/FacebookIcon'
import LinkedinIcon from '@/components/icons/LinkedinIcon'
import InstagramIcon from '@/components/icons/InstagramIcon'
import { useState } from 'react'


export default function Home() {
  const [swiper, setSwiper] = useState<any>({})
  
  return (
    <>


      <section className='rounded-b-[50rem]'
        style={{
          background: 'linear-gradient(180deg, rgba(76, 201, 240, 0.00) 0%, rgba(67, 97, 238, 0.30) 100%)'
        }}
      >

        <div className='px-6 py-3 lg:px-24 xl:px-40'>

          <div className='mt-8 relative xl:flex xl:space-x-32'>


            {/* <div className='w-10 h-10 rounded-full rotate-[30deg] absolute left-auto right-8 -top-7' style={{
              background: 'linear-gradient(180deg, rgba(67, 97, 238, 1) 0%, rgba(67, 97, 238, 0.00) 100%)'
            }} /> */}

            <div className='xl:w-6/12'>
              <div className='xl:w-2/3'>
                <h1 className='text-secondary-500 text-base'>REAL ESTATE</h1>
                <h1 className='text-4xl font-semibold mt-5'>Find a perfect home you love..!</h1>
                <p className='text-small-text mt-4 text-dark-3'>
                  Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.
                </p>
              </div>
              <MainSlider />

            </div>

            <div className='mt-10 xl:w-6/12'>
              <SearchForm />
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col  mt-10 px-6 py-3 xl:px-40'>
        <div>
          <p className='text-dark-3 text-buttons-text text-center px-16 leading-normal'>Trusted by 100+ Companies across the globe! </p>
        </div>

        <div className='mt-8'>

          <CompanyCarrousel />
        </div>

        <div className='users-group sm:flex sm:flex-row sm:gap-7 mt-10 lg:justify-center'>
          <div className='users-group_container rounded-full  border-2  '>
            <div className='flex justify-start -space-x-1.5'>
              {
                userGroupsImages.map(({ url, alt }, index) => (

                  <Avatar key={url} className='w-8 h-8 ring-2 ring-white'>
                    <AvatarImage
                      className="object-cover object-top ring-2 ring-white" loading="lazy"
                      src={url}
                      alt={alt}
                    />

                    {
                      index === userGroupsImages.length - 1 && (
                        <div className='overlay' >
                          <PlusIcon className='w-4 h-4 font-bold stroke-[3]' />
                        </div>
                      )
                    }
                  </Avatar>


                ))
              }

            </div>

            <p className='text-buttons-text text-dark-2 leading-normal'>72k+ Happy Customers</p>
          </div>

          <div className='users-group_container rounded-full border-2 mt-5 '>

            <Image
              src={'/images/3c1780f6158b1d62f2036152ec7a594f.jpg'}
              alt='house-image'
              width={60}
              height={60}
              className='self-stretch object-cover !w-14 h-14 p-0.5 rounded-full border-2 border-white'
              loading='lazy'
            />


            <p className='text-buttons-text text-dark-2 leading-normal'>
              200+ New Listings Everyday!
            </p>
          </div>

        </div>


        <div className='who-we-are mt-16 relative '>

          <div className='info row-span-1 lg:order-1 lg:w-5/12'>
            <h1 className='text-secondary-500 text-base'>WHO ARE WE</h1>
            <h1 className='text-3xl font-semibold mt-3'>Assisting individuals in locating the appropriate real estate.</h1>
            <p className='text-dark-3 text-small-text mt-4'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.</p>

          </div>

          <div className='images flex gap-4 mt-16 justify-center lg:order-3 lg:absolute lg:inset-y-0 lg:right-0 lg:px-5 lg:w-7/12 '>
            <div className='relative w-44 h-64 rounded-2xl overflow-hidden sm:w-72 sm:h-[31rem] sm:h '>
              <Image
                fill
                src='/images/3c1780f6158b1d62f2036152ec7a594f.jpg'
                className='object-cover'
                alt='image01'

              />
            </div>
            <div className='flex flex-col gap-4 -mt-8 lg:order-2'>
              <div className='relative w-36 h-36 sm:w-72 sm:h-72 rounded-2xl overflow-hidden'>
                <Image
                  fill
                  src='/images/8d9d904d15616c6b35ab1d67adea9e75.jpg'
                  className='object-cover'
                  alt='image01'

                />
              </div>

              <div className='relative w-36 h-24 sm:w-72 sm:h-72 rounded-2xl overflow-hidden'>
                <Image
                  fill
                  src='/images/8363fc4f62fd9a46cc28eb202059adff.jpg'
                  className='object-cover'
                  alt='image01'

                />
              </div>
            </div>
          </div>


          <div className='infoicons sm:flex sm:gap-2 mt-10 lg:flex-col lg:order-2 lg:w-5/12'>
            <div className='infoicons_container p-7 shadow-md rounded-3xl'>
              <Image
                src='/images/who-we-are/icon_smart_home_.svg'
                width={34}
                height={34}
                alt='smart_home'
                className='shrink-0'
              />

              <div>
                <h1 className='text-buttons-text text-secondary-500'>Donec porttitor euismod</h1>
                <p className="mt-2 text-dark-3 text-small-text leading-normal">Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
              </div>
            </div>

            <div className='infoicons_container p-7 mt-10 sm:mt-0 shadow-md rounded-3xl'>
              <Image
                src='/images/who-we-are/icon_user_octagon_.svg'
                width={34}
                height={34}
                alt='smart_home'
                className='shrink-0'
              />

              <div>
                <h1 className='text-buttons-text text-secondary-500'>Donec porttitor euismod</h1>
                <p className="mt-2 text-dark-3 text-small-text leading-normal">Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
              </div>
            </div>
          </div>

        </div>

        <div className='our-news mt-16 mb-16 xl:mt-44'>
          <div className='xl:flex xl:justify-between'>
            <div className='info'>
              <h1 className='text-secondary-500 text-base'>CHECKOUT OUR NEW</h1>
              <h1 className='text-3xl font-semibold mt-3'>Latest Listed Properties.</h1>
              <p className='text-dark-3 text-small-text mt-4'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.</p>

            </div>

            <div className='flex gap-2 py-6'>
              {
                categories.map((cat, index) => (
                  <Button
                    key={cat.name}
                    className={`py-5 px-8 rounded-full text-buttons-text   ${index === 1 ? 'bg-primary-500 text-white hover:bg-violet-950' : 'text-primary-500 border border-primary-500 bg-white hover:bg-white'}`}
                  >
                    {cat.name}
                  </Button>
                ))
              }
            </div>
          </div>

          <div className='mt-4'>
            <div className='grid md:grid-cols-2 md:gap-8 xl:grid-cols-4'>
              {
                properties.map((prope) => (
                  <ListedProperties
                    key={prope.url}
                    url={prope.url}
                    category={prope.category}
                    price={prope.price}
                    title={prope.title}
                    description={prope.description}
                    beds={prope.beds}
                    baths={prope.baths}
                    iconCategory={prope.iconCategory}
                    iconColorText={prope.iconColorText}
                    iconColorBg={prope.iconColorBg}
                  />
                ))
              }
            </div>


            <div className='flex justify-center mt-14'>
              <Button variant={'outline'} className=' text-primary-500 hover:text-primary-500 border-primary-500 rounded-full py-5 px-7' > View more properties </Button>
            </div>
          </div>

        </div>

      </section>

      <section className='our-services bg-light-2 bg-opacity-30 pt-28 py-20 px-6 xl:px-40'>
        <div>
          <h1 className='text-dark-2 text-center text-base tracking-widest'>OUR SERVICES</h1>
          <h3 className='text-dark-1 text-center text-heading3-semibold leading-normal mt-5' >Donec porttitor euismod dignissim</h3>
        </div>

        <div className='mt-10 grid md:grid-cols-3 md:gap-5'>
          <OurServiceCard
            title="Buy a New Home"
            description='Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. '
            icon={<MagnifyingGlassIcon className='w-6 h-6 text-white' />}
          />

          <OurServiceCard
            title="Sell a House"
            description='Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. '
            icon={<HomeIcon className='w-6 h-6 text-white' />}
          />

          <OurServiceCard
            title="Rent a House"
            description='Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. '
            icon={<BedIcon className='w-6 h-6 text-white' />}
          />

        </div>
      </section>

      <section className='areas py-28 px-6 xl:px-40'>
        <div>
          <h1 className='text-secondary-500 text-base tracking-widest'>AREAS ACROSS THE TOWN</h1>
          <h3 className='text-dark-2 text-heading3-medium leading-normal mt-5' >Neighborhood Properties</h3>
        </div>

        <div className='grid grid-cols-2 gap-x-5 gap-y-5 mt-5 xl:grid-cols-3'>
          <NeighborhoodProperties
            imgUrl='/images/areas/imagen01.jpg'
            price='216'
            cityName='New York City, NY'

          />

          <NeighborhoodProperties
            imgUrl='/images/areas/imagen02.jpg'
            price='141'
            cityName='Houston, TX'
          />

          <NeighborhoodProperties
            imgUrl='/images/areas/imagen03.jpg'
            price='212'
            cityName='San Diego, CA'
          />

          <NeighborhoodProperties
            imgUrl='/images/areas/imagen04.jpg'
            price='183'
            cityName='Philadelphia, PA'
            containerClass='xl:h-80'
          />

          <NeighborhoodProperties
            imgUrl='/images/areas/imagen05.jpg'
            price='112'
            cityName='San Francisco, CA'
            containerClass='col-span-2 xl:h-80'
          />

        </div>

      </section>

      <section className='introduce-yourself pb-24 px-6 xl:px-40'>
        <div>
          <h1 className='text-secondary-500 text-base tracking-widest text-center font-semibold'>INTRODUCE YOURSELF TO</h1>
          <h3 className='text-dark-2 text-heading3-medium leading-normal text-center mt-2' >Our Team of Experts</h3>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-y-5 mt-5 xl:px-20'>
          <ExpertList
            imgUrl='/images/expert/expert01.jpg'
            name='Brendon M'
            profession='CEO & Founder'

          />

          <ExpertList
            imgUrl='/images/expert/expert02.jpg'
            name='Jodi J. Appleby'
            profession='Real Estate Developer'

          />

          <ExpertList
            imgUrl='/images/expert/expert03.jpg'
            name='Justin S. Meza'
            profession='Listing Agent'

          />

          <ExpertList
            imgUrl='/images/expert/expert04.jpg'
            name='Susan T. Smith'
            profession="Buyer's Agent"


          />
        </div>

      </section>

      <section className='trending py-28 pb-6 px-6 bg-primary-500 xl:px-40'>
        <div>
          <h1 className='text-white text-base tracking-widest text-center font-semibold'>WHAT’S TRENDING</h1>
          <h3 className='text-white text-heading3-medium leading-normal text-center mt-2' >Latest Blogs & Posts</h3>
        </div>

        <div className='grid md:grid-cols-2 gap-5 mt-10 xl:grid-cols-3'>
          <Treding
            imgUrl='/images/trending/trending01.jpg'
            title='Top 10 Home Buying Mistakes to Avoid'
            description='Etiam eget elementum elit. Aenean dignissim dapibus vestibulum'
            date='28 Tue'

          />

          <Treding
            imgUrl='/images/trending/trending02.jpg'
            title='How to Stage Your Home for a Quick Sale'
            description='Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.'
            date='08 Mon'

          />

          <Treding
            imgUrl='/images/trending/trending03.jpg'
            title='5 Tips for First-Time Home Sellers'
            description='In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.'
            date='26 Wed'

          />

        </div>

        <Button variant='outline' className='my-10 py-5 px-8 text-buttons-text text-primary-500 rounded-full hover:text-primary-500'>View more blogs</Button>


      </section>

      <section className='testimonials py-28 pb-6 px-6 md:grid md:grid-cols-2 md:gap-x-5 xl:mx-40'>
        <div>
          <h1 className='text-secondary-500 text-base tracking-widest  font-semibold'>TESTIMONIALS </h1>
          <h3 className='text-dark-2 text-heading3-medium leading-normal mt-2' >Look What Our Customers Say!</h3>
          <p className='text-small-text text-dark-2 mt-6'> Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.</p>

          <div className='hidden md:flex gap-3 mt-16'>
            <ArrowLeftCircleIcon 
            className='w-14 h-14 stroke-secondary-500 stroke-[0.5] cursor-pointer'
            onClick={()=>swiper.slidePrev()}
            />
            <ArrowRightCircleIcon  className='w-14 h-14 stroke-secondary-500 stroke-[0.5] cursor-pointer'
             onClick={()=>swiper.slideNext()}
            />
          </div>

        </div>



        <div>
          <TestimonialSlider
            testimonials={testimonials}
            setSwiper={setSwiper}
          />
        </div>



      </section >

      <section className='become-agent  pb-28 px-6 xl:mx-40'>
        <div className='md:flex md:justify-start md:gap-4 become-agent mt-24 bg-primary-500 rounded-[1.25rem] px-8 pt-24 xl:pt-0'>
          <div className='order-1 md:order-2 md:flex md:flex-col xl:flex xl:flex-row xl:items-center'>

            <div className='xl:w-6/12'>
              <h1 className='text-white text-heading3-semibold'>Become a Agent.</h1>
              <p className='text-white text-small-text leading-normal mt-5' >
                Fusce venenatis tellus a felis scelerisque. venenatis tellus a felis scelerisque.
              </p>
            </div>
            <Button type='button'
              variant='default'
              className='mt-10 p-7 text-buttons-text bg-white hover:bg-white text-primary-500 rounded-full xl:px-8 xl:py-6'
            >
              Register Now
            </Button>
          </div>

          <div className='relative w-64 h-64 overflow-hidden order-2 md:order-1 md:w-6/12 md:-mt-40 md:!h-96 xl:w-64'>

            <Image
              width={320}
              height={320}
              src={'/images/users/user8.png'}
              className='!w-80 !h-80 object-cover md:!h-96 xl:!h-80 xl:mt-24'
              alt='user'
            />
          </div>
        </div>
      </section>


      <footer className='bg-secondary-500/10 py-14 xl:px-64 xl:grid xl:grid-cols-4 xl:gap-x-10'>
        <div className='footer-rezilla px-20 md:px-0 xl:-mt-4'>
          <div className='flex items-center justify-center indent-3 xl:justify-start'>
            <div className='flex justify-center items-center bg-primary-500 rounded-full w-[50px] h-[50px]'>
              <HomeIcon className='w-6 h-6 text-white' />
            </div>
            <p className='text-dark-2 text-heading4-semibold max-xs:hidden'>
              Rezilla
            </p>
          </div>

          <p className='address text-buttons-text text-center leading-normal text-dark-3 mt-8 xl:text-left'>
            2728 Hickory StreetSalt Lake City, UT 84104
          </p>

          <p className='phone flex justify-center items-center text-buttons-text text-center leading-normal text-dark-3 mt-8 xl:justify-start'>
            <PhoneIcon className='w-4 h-4 mr-3' />
            +1 206-214-2298
          </p>

          <p className='email flex justify-center items-center text-buttons-text text-center leading-normal text-dark-3 mt-8 xl:justify-start'>
            <EnvelopeIcon className='w-4 h-4 mr-3' />
            support@rezilla.com
          </p>
        </div>

        <div className='hidden quick-links px-20 md:flex-col md:px-0 xl:flex xl:flex-col '>
          <p className='text-dark-2 text-heading4-semibold  text-center max-xs:hidden xl:text-left'>
            Quick Links
          </p>

          <Link href="#" className='text-buttons-text text-center leading-normal text-dark-3 mt-8 xl:text-left'>
            Home
          </Link>

          <Link href="#" className='text-buttons-text text-center leading-normal text-dark-3 mt-4 xl:text-left'>
            About
          </Link>

          <Link href="#" className='text-buttons-text text-center leading-normal text-dark-3 mt-4 xl:text-left'>
            Listings
          </Link>

          <Link href="#" className='text-buttons-text text-center leading-normal text-dark-3 mt-4 xl:text-left'>
            Services
          </Link>

          <Link href="#" className='text-buttons-text text-center leading-normal text-dark-3 mt-4 xl:text-left'>
            Blogs
          </Link>

          <Link href="#" className='text-buttons-text text-center leading-normal text-dark-3 mt-4 xl:text-left'>
            Become an Agent
          </Link>
        </div>

        <div className='hidden quick-links px-20 md:flex-col md:px-0 xl:flex xl:flex-col'>
          <p className='text-dark-2 text-heading4-semibold text-center max-xs:hidden xl:text-left'>
            Discovery
          </p>

          <Link href="#" className='text-buttons-text text-center leading-normal text-dark-3 mt-8 xl:text-left'>
            Canada
          </Link>

          <Link href="#" className='text-buttons-text text-center leading-normal text-dark-3 mt-4 xl:text-left'>
            United States
          </Link>

          <Link href="#" className='text-buttons-text text-center leading-normal text-dark-3 mt-4 xl:text-left'>
            Germany
          </Link>

          <Link href="#" className='text-buttons-text text-center leading-normal text-dark-3 mt-4 xl:text-left'>
            Africa
          </Link>

          <Link href="#" className='text-buttons-text text-center leading-normal text-dark-3 mt-4 xl:text-left'>
            India
          </Link>

        </div>


        <div className='subscribe flex flex-col justify-center items-center mt-8 xl:mt-0 xl:justify-start xl:items-start'>
          <p className='text-heading4-semibold text-center  text-dark-2 px-20 xl:text-left xl:px-0'>
            Subscribe to our Newsletter!
          </p>

          <div className='flex items-center gap-1 bg-white rounded-full overflow-hidden p-1 mt-2 xl:mt-5 xl:rounded-xl '>
            <Input
              placeholder='Email Address'
              className='flex-1 no-focus placeholder:text-light-1 placeholder:text-regular-text !text-light-1 text-regular-text border-none'

            />
            <button className='flex justify-center items-center w-14 h-14 bg-primary-500 hover:bg-primary-500 rounded-full text-white xl:w-10 xl:h-10'>
              <ArrowSmallRightIcon className='w-6 h-6' />
            </button>

          </div>

          <p className='text-heading4-semibold text-center leading-normal text-dark-2 px-20 xl:text-left xl:px-0 xl:mt-16'>
            Follow Us on
          </p>

          <div className='flex space-x-3 mt-3 '>
            <Link href='#'>
              <FacebookIcon classContainer='w-6 h-6 text-primary-500' />
            </Link>
            <Link href='#'>
              <LinkedinIcon classContainer='w-6 h-6 text-primary-500' />
            </Link>
            <Link href='#'>
              <InstagramIcon classContainer='w-6 h-6 text-primary-500' />
            </Link>
          </div>

        </div>

      </footer>

    </>
  )
}
