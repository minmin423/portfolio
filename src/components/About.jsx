import lightHero from '../assets/light.png'
import { Icon } from '@iconify/react'

function About() {
    const sections = [
        {
          title: 'whoami',
          icon: 'gravity-ui:code',
          content: 'temp text',
        },
        {
          title: 'Education',
          icon: 'noto-v1:man-student',
          content: 'I am a proud graduate holding a Bachelor of Science in Information Technology degree from Baliuag University. With a major in web and mobile application development, I not only excelled academically but also graduated with Latin honors, earning the distinction of cum laude.',
        },
        {
          title: 'Hobbies',
          icon: 'fxemoji:videogame',
          content: "In my leisure time, you'll often find me immersed in the world of PC gaming. Navigating virtual landscapes and conquering challenges brings me immense joy and relaxation. Beyond the pixels, I appreciate the community and camaraderie that gaming fosters.",
        },
      ]      

    return (
        <div className='h-full lg:h-screen px-2 lg:px-10'>
        <h1 className='text-center pt-20 pb-6 font-semibold text-5xl'>About Me</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full text-center text-sm lg:text-base pb-10 lg:pb-0 lg:px-10 h-fit">
            {sections.map((section, index) => (
                <div key={index} className="group hover:bg-gray-200 transition-all hover:scale-105 duration-300 delay-75 ease-in-out shadow-2xl h-full border border-gray-300/75 rounded-xl flex flex-col justify-between gap-2 px-5">
                <div className='w-full flex flex-col items-center'>
                    <h2 className='pt-2 font-semibold text-xl'>{section.title}</h2>
                    <div className='w-7/12 rounded-full shadow-xl group-hover:bg-gray-300 transition-colors duration-300 delay-75 ease-in-out'>
                    <Icon icon={section.icon} className='w-full h-full p-10' />
                    </div>
                </div>
                <div>
                    <p className='text-justify p-2 pb-4 indent-6 leading-5'>{section.content}</p>
                </div>
                </div>
            ))}
            {/* <div className="group hover:bg-gray-200 transition-all hover:scale-105 duration-300 delay-75 ease-in-out shadow-2xl h-full border border-gray-300/75 rounded-xl flex flex-col justify-between gap-2 px-5">
                <div className='w-full flex flex-col items-center'>
                    <h2 className='pt-2 font-semibold text-xl'>whoami</h2>
                    <div className='w-7/12 rounded-full shadow-xl group-hover:bg-gray-300 transition-colors duration-300 delay-75 ease-in-out'>
                        <Icon icon="gravity-ui:code" className='w-full h-full p-10 text-blue-600 group-hover:text-blue-500 transition-colors duration-300 delay-75 ease-in-out' />
                    </div>
                </div>
                <div>
                    <p className='text-justify p-2 pb-4 indent-6 leading-5'>temp text</p>
                </div>
            </div>

            <div className="group hover:bg-gray-200 transition-all hover:scale-105 duration-300 delay-75 ease-in-out shadow-2xl h-full border border-gray-300/75 rounded-xl flex flex-col justify-between gap-2 px-5">
                <div className='w-full flex flex-col items-center'>
                    <h2 className='pt-2 font-semibold text-xl'>Education</h2>
                    <div className='w-7/12 rounded-full shadow-xl group-hover:bg-gray-300 transition-colors duration-300 delay-75 ease-in-out'>
                        <Icon icon="noto-v1:man-student" className='w-full h-full p-10' />
                    </div>
                </div>
                <div>
                    <p className='text-justify p-2 pb-4 indent-6 leading-5'>I am a proud graduate holding a <span className='font-semibold'>Bachelor of Science in Information Technology</span> degree from <span className='font-semibold'>Baliuag University</span>. With a major in web and mobile application development, I not only excelled academically but also graduated with Latin honors, earning the distinction of cum laude.</p>
                </div>
            </div>

            <div className="group hover:bg-gray-200 transition-all hover:scale-105 duration-300 delay-75 ease-in-out shadow-2xl h-full border border-gray-300/75 rounded-xl flex flex-col justify-between gap-2 px-5">
                <div className='w-full flex flex-col items-center'>
                    <h2 className='pt-2 font-semibold text-xl'>Hobbies</h2>
                    <div className='w-7/12 rounded-full shadow-xl group-hover:bg-gray-300 transition-colors duration-300 delay-75 ease-in-out'>
                        <Icon icon="fxemoji:videogame" className='w-full h-full p-10' />
                    </div>
                </div>
                <div>
                    <p className='text-justify p-2 pb-4 indent-6 leading-5'> In my leisure time, you'll often find me immersed in the world of PC gaming. Navigating virtual landscapes and conquering challenges brings me immense joy and relaxation. Beyond the pixels, I appreciate the community and camaraderie that gaming fosters.
                    </p>
                </div>
            </div> */}

        </div>
        </div>
    )
}

export default About