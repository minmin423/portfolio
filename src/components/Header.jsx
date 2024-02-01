

function Header() {
    const headerItems = ['Home', 'About', 'Projects', 'Contact']

    return (
        <header className="z-40 fixed top-0 left-0 right-0 bg-gray-300 font-semibold w-full h-16 text-black py-2 xl:px-20 md:px-10 px-2 flex justify-between items-center">
            <h1 className="text-3xl">M</h1>

            <ul className="hidden md:flex gap-4">
                {headerItems.map((item, index) => (
                    <a href={`#` + item}><li className="cursor-pointer" key={index}>{item}</li></a>
                ))}
            </ul>

            <div className="hidden md:flex cursor-pointer">
                Dark
            </div>
        </header>
    )
}

export default Header