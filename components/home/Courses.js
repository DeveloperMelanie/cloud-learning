import Heading from 'components/Heading'
import CoursesList from 'components/CoursesList'
import Button from 'components/Button'

export default function Courses({ courses }) {
    return (
        <section id='courses' className='container pb-4'>
            <Heading title='Nuestros cursos'>
                Explora nuestros cursos en Cloud Learning. Cada uno está
                diseñado para impulsar tu carrera y expandir tus habilidades.
            </Heading>

            <CoursesList courses={courses} />
            <Button href='/courses' className='mt-14 w-fit mx-auto py-3 px-14'>
                Ver todos
            </Button>
        </section>
    )
}
