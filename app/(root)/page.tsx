import SearchForm from '@/components/forms/SearchForm'
import CompanyCarrousel from '@/components/sliders/CompanyCarrousel'
import MainSlider from '@/components/sliders/MainSlider'
import Image from 'next/image'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { categories, properties, userGroupsImages } from '../../constant'
import { PlusIcon, MagnifyingGlassIcon, HomeIcon } from '@heroicons/react/24/outline'
import ListedProperties from '@/components/card/ListedProperties'
import { Button } from '@/components/ui/button'
import { Properties } from '../interface/properties'
import OurServiceCard from '@/components/card/OurServiceCard'
import { BedIcon } from 'lucide-react'
import NeighborhoodProperties from '@/components/card/NeighborhoodProperties'
import ExpertList from '@/components/card/ExpertList'

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

        <div className='mt-8'>
          {/* Todo: Make a Company carosell */}
          <CompanyCarrousel />
        </div>

        <div className='users-group  mt-10 '>
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


        <div className='who-we-are mt-16'>
          <div className='info'>
            <h1 className='text-secondary-500 text-base'>WHO ARE WE</h1>
            <h1 className='text-3xl font-semibold mt-3'>Assisting individuals in locating the appropriate real estate.</h1>
            <p className='text-dark-3 text-small-text mt-4'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.</p>

          </div>

          <div className='images flex gap-4 mt-16 '>
            <div className='relative w-44 h-64 rounded-2xl overflow-hidden'>
              <Image
                fill
                src='/images/3c1780f6158b1d62f2036152ec7a594f.jpg'
                className='object-cover'
                alt='image01'

              />
            </div>
            <div className='flex flex-col gap-4 -mt-8'>
              <div className='relative w-36 h-36 rounded-2xl overflow-hidden'>
                <Image
                  fill
                  src='/images/8d9d904d15616c6b35ab1d67adea9e75.jpg'
                  className='object-cover'
                  alt='image01'

                />
              </div>

              <div className='relative w-36 h-24 rounded-2xl overflow-hidden'>
                <Image
                  fill
                  src='/images/8363fc4f62fd9a46cc28eb202059adff.jpg'
                  className='object-cover'
                  alt='image01'

                />
              </div>
            </div>
          </div>


          <div className='infoicons mt-10'>
            <div className='infoicons_container  p-7 shadow-md rounded-3xl'>
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

            <div className='infoicons_container p-7 mt-10 shadow-md rounded-3xl'>
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

        <div className='our-news mt-16 mb-16'>
          <div className='info'>
            <h1 className='text-secondary-500 text-base'>CHECKOUT OUR NEW</h1>
            <h1 className='text-3xl font-semibold mt-3'>Latest Listed Properties.</h1>
            <p className='text-dark-3 text-small-text mt-4'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.</p>

          </div>

          <div className='mt-4'>
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

            <div className='flex justify-center mt-14'>
              <Button variant={'outline'} className=' text-primary-500 hover:text-primary-500 border-primary-500 rounded-full py-5 px-7' > View more properties </Button>
            </div>
          </div>

        </div>



      </section>

      <section className='our-services bg-light-2 bg-opacity-30 pt-28 py-20 px-6'>
        <div>
          <h1 className='text-dark-2 text-center text-base tracking-widest'>OUR SERVICES</h1>
          <h3 className='text-dark-1 text-center text-heading3-semibold leading-normal mt-5' >Donec porttitor euismod dignissim</h3>
        </div>

        <div className='mt-10'>
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
            title="Buy a New Home"
            description='Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. '
            icon={<BedIcon className='w-6 h-6 text-white' />}
          />

        </div>
      </section>

      <section className='areas py-28 px-6'>
        <div>
          <h1 className='text-secondary-500 text-base tracking-widest'>AREAS ACROSS THE TOWN</h1>
          <h3 className='text-dark-2 text-heading3-medium leading-normal mt-5' >Neighborhood Properties</h3>
        </div>

        <div className='grid grid-cols-2 gap-x-5 gap-y-5 mt-5'>
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
          />

          <NeighborhoodProperties
            imgUrl='/images/areas/imagen05.jpg'
            price='112'
            cityName='San Francisco, CA'
          />

        </div>

      </section>

      <section className='introduce-yourself pb-6 px-6'>
        <div>
          <h1 className='text-secondary-500 text-base tracking-widest text-center font-semibold'>INTRODUCE YOURSELF TO</h1>
          <h3 className='text-dark-2 text-heading3-medium leading-normal text-center mt-2' >Our Team of Experts</h3>
        </div>

        <div className='grid grid-cols-2 gap-y-5 mt-5'>
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


    </>
  )
}
