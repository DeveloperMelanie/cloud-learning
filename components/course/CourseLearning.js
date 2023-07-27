import Tick from 'icons/Tick'

export default function CourseLearning({ course }) {
    const { whatlearnt } = course

    return (
        <div className='border shadow-sm rounded-2xl rounded-tl-none p-6 space-y-6'>
            <h2 className='text-2xl font-bold'>Lo que aprenderás</h2>
            <div className='space-y-4 font-body'>
                {whatlearnt.map((item, index) => (
                    <div key={index} className='flex gap-3 items-center'>
                        <Tick />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
