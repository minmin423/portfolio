import { Icon } from '@iconify/react'

function SkillCard(props) {

    return(
        <div className="flex gap-4 border-t even:bg-blue-50/50 px-4 py-2 w-full h-full items-center hover:bg-blue-50 cursor-pointer transition-colors duration-300 delay-75">
            <Icon icon={props.logo} className='h-10 w-10' />
            <h3 className='font-semibold text-lg'>{props.name}</h3>
        </div>
    )
}

export default SkillCard