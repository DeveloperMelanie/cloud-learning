import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Feature = ({
    flip,
    imageSrc,
    subtitle,
    title,
    children,
    link,
    linkText,
}) => (
    <div
        className={`flex flex-wrap-reverse lg:flex-nowrap gap-12 justify-center lg:justify-between items-center ${
            flip ? 'flex-row-reverse' : ''
        }`}
    >
        <div>
            <img
                src={imageSrc}
                alt={title}
                className='w-full max-w-[550px] max-h-[600px]'
            />
        </div>
        <div>
            <span className='text-primary font-body font-bold text-lg'>
                {subtitle}
            </span>
            <h2 className='text-4xl font-bold mb-7'>{title}</h2>
            <p className='text-gray-500 font-body text-lg mb-12'>{children}</p>
            <Link
                href={link}
                className='inline-flex gap-4 items-center text-primary font-bold hover:translate-x-2 transition-transform duration-200'
            >
                <span>{linkText}</span>
                <FontAwesomeIcon icon={faArrowRight} className='w-[15px]' />
            </Link>
        </div>
    </div>
)

export default function Features() {
    return (
        <section className='container'>
            <div className='max-w-[1200px] space-y-24 lg:space-y-10 mx-auto'>
                <Feature
                    imageSrc='/cloud.png'
                    subtitle='Cloud Learning para usuarios'
                    title='Desarrolla tus habilidades personales'
                    link='/courses'
                    linkText='Buscar cursos'
                >
                    Con Cloud Learning, puedes mejorar tus habilidades
                    personales a tu propio ritmo. Ofrecemos una variedad de
                    cursos que te ayudarán a crecer personal y profesionalmente.
                </Feature>
                <Feature
                    flip
                    imageSrc='/cloud-person.png'
                    subtitle='Cloud Learning para creadores'
                    title='Conviértete en instructor'
                    link='/login'
                    linkText='Ingresar'
                >
                    Comparte tu conocimiento y pasión con el mundo. Conviértete
                    en un instructor en Cloud Learning y ayuda a otros a
                    aprender y crecer.
                </Feature>
            </div>
        </section>
    )
}
