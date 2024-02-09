import ProjectCard from './ProjectCard'
import { Icon } from '@iconify/react'
import { useEffect } from 'react'

function Projects() {
    const techStackButtonClasses = "hover:bg-blue-100 dark:hover:bg-slate-800 duration-150 delay-75 transition-colors ease-in-out border dark:border-slate-600 dark:hover:border-slate-800 p-1 rounded-full h-8 w-8 flex items-center justify-center text-white";

    return(
        <>
            <div id='Projects' className="dark:bg-gray-700 dark:text-white text-xs md:text-base py-20 px-2 md:px-6 lg:px-20">
                <h1 className="font-semibold text-center text-5xl pb-10">Projects</h1> 

                <h2 className="font-semibold text-2xl text-gray-700 pb-2">Personal</h2>                
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <ProjectCard title="This Portfolio" logo="dashicons:portfolio" 
                        desc="This portfolio was made using React, to show details about me and my past projects."
                        techStack={
                            <div className="flex gap-1">
                                <div title='React JS Library' className={techStackButtonClasses}>
                                    <Icon title='react' icon="logos:react" className='h-full w-full' />
                                </div>
                                <div title='Tailwind CSS' className={techStackButtonClasses}>
                                    <Icon title='tailwind' icon="devicon:tailwindcss" className='h-full w-full' />
                                </div>
                            </div>
                        } 
                    />                  
                </ul>

                <br />

                <h2 className="font-semibold text-2xl text-gray-700 pb-2">Internship</h2>                
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <ProjectCard title="DTR Website" logo="lets-icons:date-fill" 
                        desc="This portfolio was made using React. This portfolio was made using React. This portfolio was made using React. This portfolio was made using React." 
                        techStack={
                            <div className="flex gap-1">
                                <div title='Nuxt' className={techStackButtonClasses}>
                                    <Icon title='nuxt' icon="logos:nuxt-icon" className='h-full w-full' />
                                </div>
                                <div title='Vue' className={techStackButtonClasses}>
                                    <Icon title='vue' icon="logos:vue" className='h-full w-full' />
                                </div>
                                <div title='Tailwind CSS' className={techStackButtonClasses}>
                                    <Icon title='tailwind' icon="devicon:tailwindcss" className='h-full w-full' />
                                </div>
                                <div title='Express' className={techStackButtonClasses}>
                                    <Icon title='express' icon="simple-icons:express" className='h-full w-full text-black dark:text-white' />
                                </div>
                            </div>
                        } 
                    />
                    <ProjectCard title="Simple E-commerce Website" logo="maki:shop"
                        desc="This portfolio was made using React. This portfolio was made using React. This portfolio was made using React. This portfolio was made using React." 
                        techStack={
                            <div className="flex gap-1">
                                <div title='Tailwind CSS' className={techStackButtonClasses}>
                                    <Icon title='tailwind' icon="devicon:tailwindcss" className='h-full w-full' />
                                </div>
                                <div title='Laravel' className={techStackButtonClasses}>
                                    <Icon title='laravel' icon="logos:laravel" className='h-full w-full' />
                                </div>
                                <div title='Php' className={techStackButtonClasses}>
                                    <Icon title='php' icon="logos:php" className='h-full w-full' />
                                </div>
                            </div>
                        } 
                    />
                    <ProjectCard title="Landing Page" logo="fluent:web-asset-24-filled"
                        desc="This portfolio was made using React. This portfolio was made using React. This portfolio was made using React. This portfolio was made using React."
                        techStack={
                            <div className="flex gap-1">
                                <div title='Vue' className={techStackButtonClasses}>
                                    <Icon title='vue' icon="logos:vue" className='h-full w-full' />
                                </div>
                                <div title='Tailwind CSS' className={techStackButtonClasses}>
                                    <Icon title='tailwind' icon="devicon:tailwindcss" className='h-full w-full' />
                                </div>
                            </div>
                        }  
                    />                    
                </ul>

                <br />

                <h2 className="font-semibold text-2xl text-gray-700 pb-2">Capstone</h2>                
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <ProjectCard title="Rental Space Finder" logo="ic:round-house"
                        desc="This is our capstone project. It is a mobile application created using Flutter and Firebase. It works on both Android and iOS devices."
                        techStack={
                            <div className="flex gap-1">
                                <div title='Flutter' className={techStackButtonClasses}>
                                    <Icon title='flutter' icon="logos:flutter" className='h-full w-full' />
                                </div>
                                <div title='Firebase' className={techStackButtonClasses}>
                                    <Icon title='Firebase' icon="logos:firebase" className='h-full w-full' />
                                </div>
                            </div>
                        }   
                    />                    
                </ul>

            </div>
        </>
    )
}

export default Projects