import ProjectCard from './ProjectCard'
import Modal from './Modal'

function Projects() {
    // open, setOpen = useState(false)

    return(
        <>
            <div id='Projects' className="bg-white text-xs md:text-base py-20 px-2 md:px-6 lg:px-20">
                <h1 className="font-semibold text-center text-5xl pb-10">Projects</h1>

                {/* <button onClick={setOpen(true)} className='border-2 rounded-md px-2'>PRESS ME</button> */}
                
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <ProjectCard title="This Portfolio" 
                        desc="This portfolio was made using React, to show details about me and my past projects." 
                    />
                    <ProjectCard title="DTR Website" 
                        desc="This portfolio was made using React. This portfolio was made using React. This portfolio was made using React. This portfolio was made using React." 
                    />
                    <ProjectCard title="Simple E-commerce Website" 
                        desc="This portfolio was made using React. This portfolio was made using React. This portfolio was made using React. This portfolio was made using React." 
                    />
                    <ProjectCard title="Landing Page" 
                        desc="This portfolio was made using React. This portfolio was made using React. This portfolio was made using React. This portfolio was made using React." 
                    /> 
                    <ProjectCard title="Rental Space Finder" 
                        desc="This is our capstone project. It is a mobile application created using Flutter and Firebase. It works on both Android and iOS devices." 
                    />                    
                </ul>
            </div>

            { false && (
                <Modal title='Modal Sample Title'
                    desc='Modal sample description. Modal sample description. Modal sample description.Modal sample description. Modal sample description. Modal sample description. Modal sample description.' />)
            }
        </>
    )
}

export default Projects