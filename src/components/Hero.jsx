import lightHero from '../assets/light.png'
import darkHero from '../assets/dark.png'

function Hero() {

    return(
        <div id='Home' className="w-full lg:text-xl bg-white dark:bg-slate-600 pt-20 md:pt-32 pb-20 px-2 md:px-10 flex flex-col items-center justify-center text-center dark:text-white">
            <img src={lightHero} alt="" className='w-2/3 md:w-1/3 border-2 dark:border-slate-800 bg-white dark:bg-gray-400 hover:bg-gray-300 dark:hover:bg-gray-800 hover:scale-90 cursor-pointer duration-700 delay-75 ease-in-out rounded-xl shadow-xl' />
            <h2 className='font-semibold pt-4'>Hi! I'm <span className='text-gray-600 dark:text-blue-400'>Michael Dela Cruz</span> and I make websites.</h2>
            {/* <h2 className='text-xl'>Try Dark Mode!</h2> */}
            <h2 className='text-center'>Scroll down to learn more about me <br/> and my projects.</h2>
        </div>
    )
}

export default Hero