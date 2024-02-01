
// TODO: Change html tags to proper ones if it exist
function Modal(props) {

    return(
        <div className="z-50 bg-black/50 fixed top-0 bottom-0 right-0 left-0">
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="max-w-[80vw] h-[50vh] bg-white rounded-xl flex relative">
                    <div className="absolute top-0 right-0 px-4 py-2 m-2 font-bold text-lg cursor-pointer hover:bg-gray-200 text-gray-800 transition-colors duration-300 delay-75 ease-in-out rounded-full">X</div>
                    <div className="bg-blue-400 rounded-l-xl h-full w-1/3"></div>
                    <div className="w-2/3 pl-4 pr-10 py-5 flex flex-col gap-2">
                        <div className="font-semibold text-xl">{props.title}</div>
                        <div>{props.desc}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal