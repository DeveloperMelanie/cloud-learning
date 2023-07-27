import Link from 'next/link'
import Heading from 'components/Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPaintBrush,
    faCode,
    faBriefcase,
    faFlask,
    faHeartbeat,
    faMusic,
} from '@fortawesome/free-solid-svg-icons'

const Category = ({ url, children, icon, category }) => (
    <Link
        href={url}
        className='flex flex-col justify-between w-full md:max-w-[400px] bg-white hover:scale-105 transition-transform rounded-2xl shadow-subtle rounded-tl-none p-9 font-body font-bold space-y-8'
    >
        <p className='text-gray-500 font-semibold'>{children}</p>
        <div className='flex gap-3 items-center'>
            <FontAwesomeIcon
                icon={icon}
                color='#00b274'
                className='w-[35px] h-[35px]'
            />
            <h4 className='text-lg'>{category}</h4>
        </div>
    </Link>
)

export default function Categories() {
    return (
        <section className='bg-primary bg-opacity-20 py-24'>
            <div className='container'>
                <Heading title='Categorías principales'>
                    Explora nuestras categorías principales y descubre una
                    amplia gama de cursos que se adaptan a tus intereses y
                    necesidades.
                </Heading>

                <div className='grid justify-items-center gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1250px] mx-auto'>
                    <Category url='/' icon={faPaintBrush} category='Diseño'>
                        Explora el fascinante mundo del diseño con nuestros
                        cursos. Aprende desde diseño gráfico hasta diseño de
                        interiores y lleva tus habilidades creativas al
                        siguiente nivel.
                    </Category>
                    <Category url='/' icon={faCode} category='Programación'>
                        Sumérgete en el mundo de la programación con nuestros
                        cursos. Aprende a codificar en varios lenguajes.
                    </Category>
                    <Category url='/' icon={faBriefcase} category='Negocios'>
                        Impulsa tu carrera en el mundo empresarial con nuestros
                        cursos de negocios. Aprende sobre estrategia, marketing
                        y más.
                    </Category>
                    <Category url='/' icon={faFlask} category='Ciencia'>
                        Explora el fascinante mundo de la ciencia con nuestros
                        cursos. Descubre los misterios del universo.
                    </Category>
                    <Category url='/' icon={faHeartbeat} category='Salud'>
                        Mejora tu bienestar con nuestros cursos de salud.
                        Aprende sobre nutrición, ejercicio y más.
                    </Category>
                    <Category url='/' icon={faMusic} category='Música'>
                        Descubre tu pasión por la música con nuestros cursos.
                        Aprende a tocar un instrumento o a producir tu propia
                        música.
                    </Category>
                </div>
            </div>
        </section>
    )
}
