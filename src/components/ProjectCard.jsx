import { Icon } from '@iconify/react'

function ProjectCard(props) {

    return(
        <li className="flex justify-between border rounded-xl cursor-pointer">
            <div className="h-full w-1/3 bg-blue-500 rounded-l-xl"></div>

            <div className="w-2/3 pl-2 pr-4 py-4 flex flex-col gap-1">
                <div className="flex justify-between gap-2">
                    <h2 className="font-semibold text-xl">{props.title}</h2>
                    <div className="flex gap-1">
                        <div title='React JS Library' className="hover:bg-blue-100 duration-150 delay-75 transition-colors ease-in-out bg-white-600 border p-1 rounded-full h-8 w-8 flex items-center justify-center text-white">
                            <Icon title='react' icon="logos:react" className='h-full w-full' />
                        </div>
                        {/* <div className="bg-red-600 rounded-full h-5 w-5 flex items-center justify-center p-3 font-semibold text-white">L</div>
                        <div className="bg-green-600 rounded-full h-5 w-5 flex items-center justify-center p-3 font-semibold text-white">V</div>
                        <div className="bg-gray-600 rounded-full h-5 w-5 flex items-center justify-center p-3 font-semibold text-white">E</div> */}
                    </div>
                </div>

                <p>{props.desc}</p>
            </div>
        </li>
    )
}

export default ProjectCard