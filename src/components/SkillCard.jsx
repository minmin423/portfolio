import { Icon } from '@iconify/react'

function SkillCard(props) {

    return(
        <div className="flex gap-4 border-t dark:border-gray-900 even:bg-blue-50/50 dark:even:bg-slate-800/50 px-4 py-2 w-full h-full items-center hover:bg-blue-50 dark:hover:bg-slate-500 cursor-pointer transition-colors duration-300 delay-75">
            <Icon icon={props.logo} className='h-10 w-10' />
            <h3 className='font-semibold text-lg'>{props.name}</h3>
        </div>
    )
}

export default SkillCard