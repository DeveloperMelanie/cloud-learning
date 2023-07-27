import Button from 'components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCirclePlay,
    faTv,
    faMobileAlt,
    faInfinity,
} from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import useModal from 'hooks/useModal'

import Modal from 'components/Modal'

const CourseFeature = ({ icon, children }) => (
    <div className='flex items-center gap-3'>
        <FontAwesomeIcon icon={icon} className='w-[16px] h-[16px]' />
        <span>{children}</span>
    </div>
)

export default function CourseFeatures({ sticky, course, totalDuration }) {
    const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()
    const { introductoryvideo, thumbnail, title, price } = course

    return (
        <>
            <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
                <div className='relative w-full pb-[56.25%]'>
                    <iframe
                        src={introductoryvideo}
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        className='w-full h-full absolute inset-0'
                    />
                </div>
            </Modal>

            <div
                className={`${
                    sticky ? 'sticky top-24' : 'absolute top-0'
                } right-4 bg-white shadow rounded-2xl overflow-hidden max-w-[380px]`}
            >
                <button
                    type='button'
                    className='relative'
                    onClick={handleOpenModal}
                >
                    <img
                        src={thumbnail}
                        alt={title}
                        className='w-full rounded-t-2xl'
                    />
                    <div className='absolute inset-0 bg-black opacity-20' />
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-3 font-bold'>
                        <FontAwesomeIcon
                            icon={faCirclePlay}
                            color='#fff'
                            className='w-[64px] h-[64px] mx-auto'
                        />
                        <p className='text-center text-lg text-white'>
                            Vista previa del curso
                        </p>
                    </div>
                </button>
                <div className='px-6 py-5 space-y-4'>
                    <span className='text-3xl font-bold'>{price} US$</span>
                    <div className='space-y-2'>
                        <Button className='w-full py-2'>
                            Añadir al carrito
                        </Button>
                        <Button filled={false} className='w-full py-2'>
                            Comprar ahora
                        </Button>
                    </div>
                    <span className='block text-lg font-bold'>
                        Este curso incluye:
                    </span>
                    <div className='font-body space-y-2'>
                        <CourseFeature icon={faTv}>
                            {totalDuration} horas de vídeo bajo demanda
                        </CourseFeature>
                        <CourseFeature icon={faMobileAlt}>
                            Acceso en dispositivos móviles y TV
                        </CourseFeature>
                        <CourseFeature icon={faInfinity}>
                            Acceso de por vida
                        </CourseFeature>
                        <CourseFeature icon={faCircleCheck}>
                            Certificado de finalización
                        </CourseFeature>
                    </div>
                </div>
            </div>
        </>
    )
}
