import Image from 'next/image'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYahoo } from '@fortawesome/free-brands-svg-icons'
import SEO from 'components/SEO'

import Gmail from 'icons/Gmail'
import Hotmail from 'icons/Hotmail'

export default function Success() {
    const router = useRouter()
    const { forPassword } = router.query

    return (
        <>
            <SEO title='Revisa tu email' />

            <div className='flex flex-col items-center justify-center min-h-screen w-full'>
                <section className='text-center'>
                    <div className='mb-6'>
                        <Image
                            width={320}
                            height={230}
                            quality={100}
                            src='/success.svg'
                            alt='Cloud Learning'
                            className='mx-auto'
                        />
                    </div>
                    <h2 className='text-center max-w-500px text-3xl md:text-4xl m-4'>
                        {forPassword
                            ? '¡Te hemos enviado un correo a tu email!'
                            : '¡Tu cuenta ha sido creada!'}
                    </h2>
                    <p className='text-lg md:text-xl'>
                        {forPassword
                            ? 'Sigue las instrucciones enviadas para recuperar tu cuenta.'
                            : 'Verifica tu correo electrónico para finalizar el proceso.'}
                    </p>
                    <div className='mt-8 flex justify-center gap-4'>
                        <a
                            href='https://mail.google.com'
                            target='_blank'
                            rel='noreferrer'
                            className='flex items-center justify-center bg-white hover:bg-gray-100 transition-all shadow-lg border border-gray-200 rounded-full w-[70px] h-[70px]'
                        >
                            <Gmail />
                        </a>
                        <a
                            href='https://outlook.live.com'
                            target='_blank'
                            rel='noreferrer'
                            className='flex items-center justify-center bg-white hover:bg-gray-100 transition-all shadow-lg border border-gray-200 rounded-full w-[70px] h-[70px]'
                        >
                            <Hotmail />
                        </a>
                        <a
                            href='https://mail.yahoo.com'
                            target='_blank'
                            rel='noreferrer'
                            className='flex items-center justify-center bg-white hover:bg-gray-100 transition-all shadow-lg border border-gray-200 rounded-full w-[70px] h-[70px]'
                        >
                            <FontAwesomeIcon
                                icon={faYahoo}
                                color='#6409d2'
                                className='w-[35px] h-[35px]'
                            />
                        </a>
                    </div>
                </section>
            </div>
        </>
    )
}
