import Link from 'next/link'

import SEO from 'components/SEO'
import RegisterForm from 'components/auth/RegisterForm'

export default function Register() {
    return (
        <>
            <SEO title='Registrarse' />

            <div className='w-full flex flex-wrap items-center min-h-screen'>
                <div className='w-full md:w-1/3 flex justify-center items-center flex-col px-5 md:px-8 h-full md:h-auto'>
                    <Link href='/' className='mb-6'>
                        <img
                            src='/logo.png'
                            alt='Cloud Learning'
                            className='max-w-[160px]'
                        />
                    </Link>
                    <div className='flex flex-col justify-center '>
                        <p className='text-center text-3xl'>
                            ¡Bienvenido a Cloud Learning!
                        </p>
                        <RegisterForm />
                        <div className='text-center pt-12 pb-12 font-body'>
                            <p>
                                ¿Ya tienes una cuenta?{' '}
                                <Link href='/login' className='font-bold'>
                                    Inicia sesión aquí
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-2/3 shadow-2xl hidden md:block'>
                    <img
                        src='https://cfifinancial.com/images/diffetentintro.jpg'
                        alt='Cloud Learning courses'
                        className='object-cover w-full h-screen'
                    />
                </div>
            </div>
        </>
    )
}
