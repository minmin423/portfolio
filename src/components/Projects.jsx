import ProjectCard from './ProjectCard'

function Projects() {

    return(
        <>
            <div id='Projects' className="text-xs md:text-base py-20 px-2 md:px-6 lg:px-20">
                <h1 className="font-semibold text-center text-5xl pb-10">Projects</h1> 

                <h2 className="font-semibold text-2xl text-gray-700 pb-2">Personal</h2>                
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <ProjectCard title="This Portfolio" logo="dashicons:portfolio" 
                        desc="This portfolio was made using React, to show details about me and my past projects." 
                    />                  
                </ul>

                <br />

                <h2 className="font-semibold text-2xl text-gray-700 pb-2">Internship</h2>                
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <ProjectCard title="DTR Website" logo="lets-icons:date-fill" 
                        desc="This portfolio was made using React. This portfolio was made using React. This portfolio was made using React. This portfolio was made using React." 
                    />
                    <ProjectCard title="Simple E-commerce Website" logo="maki:shop"
                        desc="This portfolio was made using React. This portfolio was made using React. This portfolio was made using React. This portfolio was made using React." 
                    />
                    <ProjectCard title="Landing Page" logo="fluent:web-asset-24-filled"
                        desc="This portfolio was made using React. This portfolio was made using React. This portfolio was made using React. This portfolio was made using React." 
                    />                    
                </ul>

                <br />

                <h2 className="font-semibold text-2xl text-gray-700 pb-2">Capstone</h2>                
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <ProjectCard title="Rental Space Finder" logo="ic:round-house"
                        desc="This is our capstone project. It is a mobile application created using Flutter and Firebase. It works on both Android and iOS devices." 
                    />                    
                </ul>

            </div>
        </>
    )
}

export default Projects