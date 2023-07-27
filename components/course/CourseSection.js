import CourseEpisode from 'components/course/CourseEpisode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { getTotalContentTime } from 'utilities'
import useAccordion from 'hooks/useAccordion'

export default function Section({ section, globalOpen }) {
    const { isOpen, handleToggle, maxHeight, contentRef } =
        useAccordion(globalOpen)
    const { title, episodes } = section
    const sortedEpisodes = [...episodes].sort((a, b) => a.index - b.index)

    return (
        <>
            <button
                type='button'
                className={`w-full text-left bg-gray-50 first-of-type:rounded-t-2xl border-x border-b first-of-type:border-t flex gap-4 justify-between items-center px-8 py-4 cursor-pointer transition-all
                ${
                    !isOpen ? 'last-of-type:rounded-b-2xl delay-200' : 'delay-0'
                }`}
                onClick={handleToggle}
            >
                <div className='flex gap-4 items-center'>
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        className={`w-[15px] h-[15px] transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                        }`}
                    />
                    <h3 className='font-bold text-lg'>{title}</h3>
                </div>
                <span className='font-body font-semibold whitespace-nowrap hidden sm:block'>
                    {episodes.length} clases • {getTotalContentTime(section)}
                </span>
            </button>
            <div
                ref={contentRef}
                className='accordion bg-white'
                style={{
                    maxHeight,
                }}
            >
                {sortedEpisodes.map(episode => (
                    <CourseEpisode key={episode.id} episode={episode} />
                ))}
            </div>
        </>
    )
}
