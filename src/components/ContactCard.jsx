import { Icon } from '@iconify/react'

function ContactCard(props) {
    return (
        <a href={props.link} target='black'
        className='group flex justify-between items-center w-full h-fit border dark:border-slate-600 px-2 py-4 rounded bg-white dark:bg-slate-500 hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors ease-in-out duration-300 delay-75'>
            <div className='flex gap-4 items-center justify-center'>
                <Icon icon={props.icon} className='h-10 w-10 text-black' />
                <div>
                    <h3>{props.title}</h3>
                    <h4 className='text-gray-500 dark:text-gray-400 leading-3 text-sm font-bold'>{props.subtitle}</h4>
                </div>
            </div>

            <div>
                <Icon icon="icon-park-outline:right" className='h-10 w-10 group-hover:bg-slate-200 dark:group-hover:bg-slate-400 rounded-full text-gray-500 dark:text-gray-300 group-hover:text-gray-500 transition-colors ease-in-out duration-300 delay-75' />
            </div>
        </a>
    )
}

export default ContactCard