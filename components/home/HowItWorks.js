import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faBookmark,
    faLightbulb,
} from '@fortawesome/free-regular-svg-icons'
import Heading from 'components/Heading'

const InfoCard = ({ icon, title, description }) => (
    <div className='text-gray-500 rounded-md space-y-6 text-center max-w-[350px]'>
        <div className='w-[110px] h-[110px] mx-auto bg-primary bg-opacity-5 shadow-blur rounded-full flex justify-center items-center'>
            <FontAwesomeIcon
                icon={icon}
                color='#00b274'
                className='w-[45px] h-[45px]'
            />
        </div>
        <h4 className='text-2xl font-semibold text-black'>{title}</h4>
        <p className='font-body font-semibold'>{description}</p>
    </div>
)

export default function HowItWorks() {
    return (
        <section className='container'>
            <Heading title='¿Cómo funciona?'>
                Cloud Learning es sencillo. Solo debes inscribirte en los cursos
                que te interesan y así acceder al conocimiento que buscas.
            </Heading>

            <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-14 w-full max-w-[1250px] mx-auto'>
                <InfoCard
                    icon={faUser}
                    title='Crea tu Cuenta'
                    description='Regístrate y abre las puertas a un mundo de conocimiento.'
                />
                <InfoCard
                    icon={faBookmark}
                    title='Inscríbete a Cursos'
                    description='Explora y elige entre una amplia variedad de cursos que se adaptan a tus intereses y necesidades.'
                />
                <InfoCard
                    icon={faLightbulb}
                    title='Aprende'
                    description='Emprende tu viaje de aprendizaje y expande tus habilidades a tu propio ritmo.'
                />
            </div>
        </section>
    )
}
