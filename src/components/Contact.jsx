import yamyam from '../assets/yamyam.jpg'
import ContactCard from './ContactCard'

function Contact() {

    return(
        <div className='relative w-full h-full'>
            <ul className='absolute right-2 top-2 flex gap-1'>
                <li className='rounded-full h-5 w-5 bg-gray-300'></li>
                <li className='rounded-full h-5 w-5 bg-gray-500'></li>
                <li className='rounded-full h-5 w-5 bg-gray-700'></li>
            </ul>
            <div id='Contact' className='bg-gray-200 dark:bg-slate-700 dark:text-white h-fit w-full px-2 md:px-6 lg:px-20 pb-32 pt-20'>
                
                <h1 className='text-center pb-6 font-semibold text-5xl'>Contact</h1>

                <div className="flex flex-col-reverse md:flex-row justify-between gap-4 font-semibold text-lg">
                    <div className='w-full md:w-1/2'>
                        <h2 className='pb-2 md:pb-10 pt-10 md:pt-0 text-center md:text-start'>Connect with me on these platforms!</h2>
                        
                        <div className='flex flex-col gap-4'>
                            <ContactCard icon="logos:linkedin-icon" title="LinkedIn" subtitle="michaelangelodc423" link="https://www.linkedin.com/in/michaelangelodc423" />
                            <ContactCard icon="logos:github-icon" title="Github" subtitle="minmin423" link="https://github.com/minmin423" />
                            <ContactCard icon="bi:twitter-x" title="X (Twitter)" subtitle="@michaeldc_dev" link="https://twitter.com/michaeldc_dev
" />
                        </div>
                    </div>

                    <div className='flex w-full md:w-1/2 justify-center'>
                        <img src={yamyam} alt="" className='px-32 md:px-0 md:h-96 rounded-lg' />
                    </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Contact