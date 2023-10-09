import Link from 'next/link'
import {HomeIcon, Bars3Icon} from '@heroicons/react/24/outline'

const Navbar = () => {
    return (
        <nav className='topbar'>
            <Link href="/" className='flex items-center gap-2'>
                <div className='flex justify-center items-center bg-primary-500 rounded-full w-[50px] h-[50px]'>
                    <HomeIcon className='w-6 h-6 text-white'/>
                </div>
                <p className='text-dark-4 text-heading4-semibold max-xs:hidden'>
                    Rezilla
                </p>
            </Link>

            <div className='navbar_burguer cursor-pointer'>
                <Bars3Icon className='w-6 h-6 text-dark-1' />
            </div>


        </nav>
    )
}

export default Navbar