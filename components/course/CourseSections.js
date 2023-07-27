import { useState } from 'react'
import CourseSection from 'components/course/CourseSection'

export default function CourseSections({ course, totalDuration }) {
    const [globalOpen, setGlobalOpen] = useState(false)
    const { sections } = course
    const sortedSections = [...sections].sort((a, b) => a.index - b.index)

    const totalEpisodes = course.sections.reduce((total, section) => {
        return total + section.episodes.length
    }, 0)

    return (
        <>
            <h2 className='text-2xl font-bold'>Contenido del curso</h2>
            <div>
                <div className='flex gap-2 justify-between items-center font-body font-semibold mb-3 text-intermediate xl:text-base'>
                    <p>
                        {sections.length}{' '}
                        {sections.length === 1 ? 'sección' : 'secciones'} •{' '}
                        {totalEpisodes} clases • {totalDuration} de duración
                        total
                    </p>
                    <button
                        type='button'
                        className='font-bold text-primary hover:text-opacity-90 transition-colors'
                        onClick={() => setGlobalOpen(!globalOpen)}
                    >
                        {globalOpen ? 'Contraer' : 'Ampliar'} todas las
                        secciones
                    </button>
                </div>
                {sortedSections.map(section => (
                    <CourseSection
                        key={section.id}
                        section={section}
                        globalOpen={globalOpen}
                    />
                ))}
            </div>
        </>
    )
}
