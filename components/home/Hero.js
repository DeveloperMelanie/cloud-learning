import HashLink from 'components/HashLink'

export default function Hero() {
    return (
        <section className='bg-secondary-gradient mx-4 lg:mx-16 rounded-3xl px-16 py-14 text-center lg:text-left'>
            <div className='max-w-[1300px] mx-auto flex gap-12 flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center'>
                <div className='space-y-10'>
                    <h1 className='text-5xl max-w-[420px] mx-auto lg:mx-0 leading-tight'>
                        Encuentra los mejores cursos en{' '}
                        <strong className='font-medium'>Cloud Learning</strong>
                    </h1>
                    <div className='max-w-[500px] font-body font-semibold'>
                        <p className='text-gray-600'>
                            Descubre Cloud Learning, tu plataforma para el
                            aprendizaje en línea. Ofrecemos cursos de calidad,
                            diseñados por expertos. Aprende, mejora tus
                            habilidades y alcanza tus metas con nosotros.
                        </p>
                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <HashLink
                            to='courses'
                            className='flex items-center justify-center bg-primary-gradient rounded-md py-3 px-14 text-white font-semibold text-lg whitespace-nowrap'
                        >
                            Explorar
                        </HashLink>
                    </div>
                </div>
                <div className='relative lg:mr-20'>
                    <img
                        src='/telephone.png'
                        alt='Cloud Learning courses'
                        className='max-w-[230px] sm:max-w-[300px] relative z-10'
                    />
                    <div className='shadow-mini bg-opacity-25 bg-white rounded-full translate-x-[-50%] translate-y-[-50%] w-[255px] h-[255px] sm:w-[350px] sm:h-[350px] -z-1 absolute left-1/2 top-1/2' />
                    <div className='shadow-mini bg-opacity-25 bg-white rounded-full translate-x-[-50%] translate-y-[-50%] w-[305px] h-[305px] sm:w-[450px] sm:h-[450px] -z-1 absolute left-1/2 top-1/2' />
                </div>
            </div>
        </section>
    )
}
