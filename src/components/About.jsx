import { Icon } from '@iconify/react'
import AboutCard from './AboutCard'

function About() {    

    return (
        <div id='About' className='px-2 md:px-6 lg:px-10 pb-32 pt-20 bg-gray-100'>
          <h1 className='text-center pb-6 font-semibold text-5xl'>About</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full text-center text-sm lg:text-base pb-10 lg:pb-0 lg:px-10 h-fit">
              <AboutCard title='whoami' icon='material-symbols:terminal'
                content={<p>I'm a <span className='font-semibold'>passionate programmer</span> and problem-solver. Proficient in technologies such as JavaScript, Vue.js, React, and Node.js, I thrive on turning creative ideas into functional and user-friendly solutions. Let's connect and build something amazing together!</p>} />

              <AboutCard title='Education' icon='noto-v1:man-student'
                content={<p>I am a proud graduate holding a <span className='font-semibold'>Bachelor of Science in Information Technology</span> degree from Baliuag University. With a major in web and mobile application development, I not only excelled academically but also graduated with Latin honors, earning the distinction of cum laude.</p>} />

              <AboutCard title='Hobbies' icon='fxemoji:videogame'
                content={<p>In my leisure time, you'll often find me immersed in the world of <span className='font-semibold'>PC gaming</span>. Navigating virtual landscapes and conquering challenges brings me immense joy and relaxation. Beyond the pixels, I appreciate the community and camaraderie that gaming fosters.</p>} />
          </div>
        </div>
    )
}

export default About