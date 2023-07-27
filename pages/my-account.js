import SEO from 'components/SEO'
import Skeleton from 'react-loading-skeleton'
import { useSelector } from 'react-redux'

export default function Profile() {
    const auth = useSelector(state => state.auth)
    const isLoading = auth.status === 'loading'
    const { user } = auth

    return (
        <>
            <SEO title='Mi perfil' />
            <section className='py-52 bg-gray-50'>
                <div className='max-w-[700px] mx-auto relative flex flex-col break-words bg-white shadow-xl rounded-2xl px-6'>
                    <div className='flex justify-center'>
                        {isLoading ? (
                            <Skeleton
                                circle
                                width={150}
                                height={150}
                                containerClassName='-mt-[75px]'
                            />
                        ) : (
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className='shadow-xl rounded-full -mt-[75px] max-w-none w-[150px] h-[150px]'
                            />
                        )}
                    </div>
                    <div className='text-center mt-8'>
                        {isLoading ? (
                            <>
                                <Skeleton width={150} count={1} />
                                <Skeleton width={150} count={1} />
                            </>
                        ) : (
                            <>
                                <h3 className='text-xl font-semibold mb-2'>
                                    {user.name}
                                </h3>
                                <div className='font-body'>
                                    {user.occupation || 'Tu ocupación'}
                                </div>
                            </>
                        )}
                    </div>
                    <div className='mt-10 py-10 border-t text-center'>
                        <div className='flex flex-wrap justify-center'>
                            <div className='w-full px-4 font-body'>
                                <p className='mb-4 text-lg leading-relaxed text-blueGray-700'>
                                    An artist of considerable range, Jenna the
                                    name taken by Melbourne-raised,
                                    Brooklyn-based Nick Murphy writes, performs
                                    and records all of his own music, giving it
                                    a warm, intimate feel with a solid groove
                                    structure. An artist of considerable range.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
