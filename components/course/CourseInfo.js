import ReducedText from 'components/ReducedText'
import ReactMarkdown from 'react-markdown'

export default function CourseInfo({ course }) {
    const { requirements, description, author } = course

    return (
        <>
            <div className='space-y-4'>
                <h2 className='text-2xl font-bold'>Requisitos</h2>
                <ul className='space-y-2 font-body list-inside list-disc'>
                    {requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                    ))}
                </ul>
            </div>
            <div className='space-y-4'>
                <h2 className='text-2xl font-bold'>Descripción</h2>
                <ReducedText>
                    <ReactMarkdown>{description}</ReactMarkdown>
                </ReducedText>
            </div>
            <div className='space-y-4'>
                <h2 className='text-2xl font-bold'>Instructor</h2>
                <div className='flex gap-5 items-center'>
                    <div>
                        <img
                            src={author.avatar}
                            alt={author.name}
                            className='object-cover max-w-none w-[112px] h-[112px] rounded-full shadow-subtle'
                        />
                    </div>
                    <div>
                        <h3 className='text-2xl text-primary font-bold'>
                            {author.name}
                        </h3>
                        <span className='block font-body text-gray-500 font-semibold'>
                            {author.occupation ||
                                'Instructor de Cloud Learning'}
                        </span>
                    </div>
                </div>
                <ReducedText>
                    <ReactMarkdown>{author.description}</ReactMarkdown>
                </ReducedText>
            </div>
        </>
    )
}
