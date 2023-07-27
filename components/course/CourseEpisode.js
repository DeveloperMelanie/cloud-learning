import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'

export default function CourseEpisode({ episode }) {
    return (
        <div className='border border-t-0 flex gap-4 justify-between items-center px-8 py-3'>
            <div className='flex gap-4 items-center'>
                <FontAwesomeIcon icon={faVideo} className='w-[15px] h-[15px]' />
                <h4 className='font-semibold'>{episode.title}</h4>
            </div>
            <span className='font-body font-semibold text-gray-500'>
                {episode.duration}
            </span>
        </div>
    )
}
