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
            <li className="flex justify-between border rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 delay-75 ease-in-out shadow-xl">
                <div className="h-full w-1/3 bg-blue-100 rounded-l-xl">
                    <Icon icon={props.logo} className='h-full w-full px-8 text-gray-600' />
                </div>

                <div className="w-2/3 pl-2 pr-4 py-4 flex flex-col justify-between gap-1">
                <div>
                    <div className="flex justify-between gap-2">
                        <h2 className="font-semibold text-xl">{props.title}</h2>
                        <div className="flex gap-1">
                            <div title='React JS Library' className="hover:bg-blue-100 duration-150 delay-75 transition-colors ease-in-out bg-white-600 border p-1 rounded-full h-8 w-8 flex items-center justify-center text-white">
                                <Icon title='react' icon="logos:react" className='h-full w-full' />
                            </div>
                        </div>
                    </div>

                    <p>{props.desc}</p>
                </div>

                    <div className='flex justify-end text-xs md:text-sm'>
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