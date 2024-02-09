import { Icon } from '@iconify/react'
import Modal from './Modal'
import { useState } from 'react'

function ProjectCard(props) {
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true);
      };

    const closeModal = () => {
        setModal(false);
    };

    return(
        <>
            <li className="flex justify-between border dark:border-gray-500/80 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 delay-75 ease-in-out shadow-xl dark:shadow-gray-800">
                <div className="h-full w-1/5 bg-blue-100 dark:bg-slate-600 rounded-l-xl">
                    <Icon icon={props.logo} className='h-full w-full px-4 text-gray-600 dark:text-gray-200' />
                </div>

                <div className="w-4/5 pl-2 pr-4 py-4 flex flex-col justify-between gap-1">
                <div>
                    <div className="flex justify-between gap-2">
                        <h2 className="font-semibold text-base lg:text-lg">{props.title}</h2>
                    </div>

                    <p className='text-xs lg:text-sm'>{props.desc}</p>
                </div>

                    <div className='flex justify-between text-xs md:text-sm pt-2'>
                        {props.techStack}
                        <button onClick={() => setModal(true)} className='w-fit rounded-md px-2 text-blue-500 font-semibold'>Learn more</button>
                    </div>
                </div>
            </li>
            { modal && (
                <Modal title={props.title}
                    desc={props.desc}
                    closeModal={closeModal} />)
            }
        </>
    )
}

export default ProjectCard