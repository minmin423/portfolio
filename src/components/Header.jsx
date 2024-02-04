import { Icon } from '@iconify/react'
import logo from '/logo.svg'

function Header() {
    const headerItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

    // console.log("here at", window.location.hash)

    return (
        <nav className="text-lg xl:text-xl z-40 fixed top-0 left-0 right-0 bg-gray-200 font-semibold w-full h-16 text-black py-2 xl:px-20 md:px-10 px-2 flex justify-between items-center">
            <a className="h-full hover:scale-90 transition-all duration-300 delay-75 ease-in-out" href='#Home'>
                <img src={logo} alt="LOGO" className='h-full' />
            </a>

            <ul className="hidden md:flex gap-1">
                {headerItems.map((item, index) => (
                    <a className="rounded-xl px-2 py-1 cursor-pointer hover:bg-blue-50 duration-300 delay-75 ease-in-out transition-colors" key={index} href={`#` + item}>
                        <li key={index}>{item}</li>
                    </a>
                ))}
            </ul>

            <div className="hidden md:flex cursor-pointer h-full">
                <Icon icon="ph:moon-fill" className='h-full w-full p-2 hover:scale-90 hover:bg-gray-100 rounded-full transition-all duration-300 delay-75 ease-in-out' />
            </div>
        </nav>
    )
}

export default Header