import { Icon } from '@iconify/react'

// TODO: Change html tags to proper ones if it exist
function Modal(props) {

    return(
        <div className="z-40 bg-black/50 fixed top-0 bottom-0 right-0 left-0">
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-[90vw] lg:w-[75vw] h-[50vh] bg-white rounded-xl flex flex-col lg:flex-row relative">
                    <div onClick={props.closeModal} className="absolute top-0 right-0 m-2 p-1 font-bold text-lg cursor-pointer hover:bg-gray-200 text-gray-800 transition-colors duration-300 delay-75 ease-in-out rounded-full">
                        <Icon icon="iconamoon:close-bold" className='text-2xl' />
                    </div>
                    <div className="bg-blue-400 rounded-tr-xl lg:rounded-tr-none lg:rounded-l-xl h-full w-full lg:w-1/2"></div>
                    <div className="w-full lg:w-1/2 pl-4 pr-10 py-5 flex flex-col gap-2">
                        <div className="font-semibold text-xl">{props.title}</div>
                        <div>{props.desc}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal