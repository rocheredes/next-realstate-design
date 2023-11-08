import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'


const InfoNavbar = () => {
    return (
        <div className='justify-between bg-primary-500 text-white py-3 px-24 hidden lg:flex'>
            <div className="flex items-center">
                <MapPinIcon className='w-6 h-6' />
                <p className='text-small-text'>
                    Rezilla, 18 Grattan St, Brooklyn
                </p>
            </div>
            
            <div className='flex justify-between items-center gap-4'>
                <div className="flex items-center gap-1">
                    <PhoneIcon className='w-6 h-6' />
                    <p className='text-small-text'>
                        +1 206-214-2298
                    </p>
                </div>

                <div className="flex items-center gap-1">
                    <EnvelopeIcon className='w-6 h-6' />
                    <p className='text-small-text'>
                        support@rezilla.com
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InfoNavbar