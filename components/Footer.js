import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='bg-primary bg-opacity-20 py-20'>
            <div className='container'>
                <div className='md:flex gap-12 md:justify-between'>
                    <div className='mb-6 md:mb-0 max-w-[285px] font-body font-semibold text-gray-500'>
                        <Link href='/' className='space-y-6'>
                            <img
                                src='/logo.png'
                                className='w-full max-w-[170px]'
                                alt='Cloud Learning'
                            />
                            <p>
                                Descubre, aprende y crece. Con Cloud Learning,
                                el cielo es el límite. ¡Eleva tu aprendizaje!
                            </p>
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-14 xl:gap-24 sm:grid-cols-3 mt-2'>
                        <div>
                            <h2 className='mb-6 text-xl font-semibold text-gray-900'>
                                Sobre nosotros
                            </h2>
                            <ul className='text-gray-500 font-semibold font-body space-y-4'>
                                <li>
                                    <Link
                                        href='/about'
                                        className='hover:underline'
                                    >
                                        ¿Qué es Cloud Learning?
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/purpose'
                                        className='hover:underline'
                                    >
                                        ¿Cuál es nuestra finalidad?
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='mb-6 text-xl font-semibold text-gray-900'>
                                Ingresar
                            </h2>
                            <ul className='text-gray-500 font-semibold font-body space-y-4'>
                                <li>
                                    <Link
                                        href='/register'
                                        className='hover:underline'
                                    >
                                        Registrarse
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/login'
                                        className='hover:underline'
                                    >
                                        Iniciar sesión
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/forgot-password'
                                        className='hover:underline'
                                    >
                                        Olvidé mi contraseña
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='mb-6 text-xl font-semibold text-gray-900'>
                                Sobre este sitio
                            </h2>
                            <ul className='text-gray-500 font-semibold font-body space-y-4'>
                                <li>
                                    <Link
                                        href='/privacy-policy'
                                        className='hover:underline'
                                    >
                                        Política de privacidad
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/cookies-policy'
                                        className='hover:underline'
                                    >
                                        Política de cookies
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/terms-and-conditions'
                                        className='hover:underline'
                                    >
                                        Términos y condiciones
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/legal-warning'
                                        className='hover:underline'
                                    >
                                        Aviso legal
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
