import Course from './Course'

export default function CoursesList({ courses }) {
    return (
        <div className='w-full max-w-[1300px] mx-auto grid justify-items-center gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {courses.map(course => (
                <Course key={course.id} course={course} />
            ))}
        </div>
    )
}
