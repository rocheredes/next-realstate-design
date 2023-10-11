import MainSlider from '@/components/sliders/MainSlider'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

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
          </div>


        </div>



      </section>
    </>
  )
}
