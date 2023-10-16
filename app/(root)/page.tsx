import SearchForm from '@/components/forms/SearchForm'
import CompanyCarrousel from '@/components/sliders/CompanyCarrousel'
import MainSlider from '@/components/sliders/MainSlider'
import Image from 'next/image'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { userGroupsImages } from '../../constant'
import { PlusIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <>

      {/* from #4CC9F0, 
    to #4361EE */}
      <section className='rounded-b-[50rem]'
        style={{
          background: 'linear-gradient(180deg, rgba(76, 201, 240, 0.00) 0%, rgba(67, 97, 238, 0.30) 100%)'
        }}
      >

        <div className='px-6 py-3'>
          <div>
            <h1 className='text-secondary-500 text-base'>REAL ESTATE</h1>
            <h1 className='text-4xl font-semibold'>Find a perfect home you love..!</h1>
            <p className='text-small-text mt-4 text-dark-3'>
              Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.
            </p>
          </div>

          <div className='mt-8 relative'>
            <div className='w-10 h-10 rounded-full rotate-[30deg] absolute left-auto right-8 -top-7' style={{
              background: 'linear-gradient(180deg, rgba(67, 97, 238, 1) 0%, rgba(67, 97, 238, 0.00) 100%)'
            }} />

            <MainSlider />

            <div className='mt-10'>
              <SearchForm />
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col mt-10 px-6 py-3'>
        <div>
          <p className='text-dark-3 text-buttons-text text-center px-16 leading-normal'>Trusted by 100+ Companies across the globe! </p>
        </div>

        <div>
          {/* Todo: Make a Company carosell */}
          <CompanyCarrousel />
        </div>

        <div className='users-group  mt-10 mb-10 '>
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

      </section>


    </>
  )
}
