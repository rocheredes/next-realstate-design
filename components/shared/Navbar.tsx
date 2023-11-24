import Link from 'next/link'
import { HomeIcon, Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline'
import { navLinks } from '@/constant'


const Navbar = () => {
    return (
        <nav className='topbar'>

            <div className='hidden lg:flex'>
                {
                    navLinks.map(({ link, name }, index) => (
                        <Link
                            className={`text-buttons-text px-4 py-3 ${index === 0 ? 'bg-secondary-500/30 rounded-full' : ''}`}
                            key={link}
                            href={link}>
                            {name}
                        </Link>
                    ))
                }
            </div>


            <Link href="/" className='flex items-center gap-1'>
                <div className='flex justify-center items-center bg-primary-500 rounded-full w-[50px] h-[50px]'>
                    <HomeIcon className='w-6 h-6 text-white' />
                </div>
                <p className='text-dark-4 text-heading4-semibold max-xs:hidden'>
                    Rezilla
                </p>
            </Link>

            <div className='navbar_burguer cursor-pointer lg:hidden'>
                <Bars3Icon className='w-6 h-6 text-dark-1' />
            </div>

            <div className='hidden lg:flex gap-1'>
                <div className='flex items-center gap-1'>
                    <UserCircleIcon className='w-5 h-5' />
                    <div className='text-buttons-text'>
                        Login/Register
                    </div>
                </div>

                <Link
                    href={'/listings'}
                    className='!flex bg-primary-500 text-white text-buttons-text'>
                    <HomeIcon className='w-5 h-5'></HomeIcon>
                    Add Listings
                </Link>


            </div>

        </nav>
    )
}

export default Navbar