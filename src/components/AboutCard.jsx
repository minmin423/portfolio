import { Icon } from '@iconify/react'

function AboutCard(props) {

    return(
        <div className="group hover:bg-gray-200 transition-all hover:scale-105 cursor-pointer duration-300 delay-75 ease-in-out shadow-2xl h-full border border-gray-300/75 rounded-xl flex flex-col gap-6 px-5">
            <div className='w-full h-full flex flex-col items-center'>
                <h2 className='pt-2 font-semibold text-xl'>{props.title}</h2>
                <div className='w-5/12 lg:w-7/12 rounded-full shadow-xl group-hover:bg-gray-300 transition-colors duration-300 delay-75 ease-in-out'>
                    <Icon icon={props.icon} className='w-full h-full p-6 lg:p-10 text-gray-600' />
                </div>
            </div>
            <div>
                <div className='p-2 pb-4 leading-5 indent-6 text-justify'>{props.content}</div>
            </div>
        </div>
    )
}

export default AboutCard