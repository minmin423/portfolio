import lightHero from '../assets/light.png'
import darkHero from '../assets/dark.png'

function Hero() {

    return(
        <div id='Home' className="w-full min-h-screen px-2 md:px-10 flex flex-col items-center justify-center text-center">
            <img src={lightHero} alt="" className='w-full md:w-1/2 lg:w-1/3 border-2 bg-white hover:bg-gray-300 hover:scale-90 cursor-pointer duration-700 delay-75 ease-in-out rounded-xl shadow-xl' />
            <h2 className='text-xl font-semibold pt-4'>Hi! I'm Michael and I make websites.</h2>
            {/* <h2 className='text-xl'>Try Dark Mode!</h2> */}
            <h2 className='text-xl text-center'>Scroll down to learn more about me <br/> and my projects.</h2>
        </div>
    )
}

export default Hero