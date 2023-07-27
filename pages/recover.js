import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import Link from 'next/link'

import SEO from 'components/SEO'
import RecoverForm from 'components/auth/RecoverForm'

import { recoverUser } from 'redux/features/auth/authSlice'
import { addAlert } from 'redux/features/alerts/alertSlice'

export default function Recover() {
    const [tokenMatch, setTokenMatch] = useState(false)

    const router = useRouter()
    const dispatch = useDispatch()
    const { t } = router.query

    useEffect(() => {
        const checkToken = async () => {
            if (!t) return
            setTokenMatch(false)

            const action = await dispatch(recoverUser({ token: t }))
            if (recoverUser.rejected.match(action)) {
                dispatch(addAlert({ message: action.payload, type: 'error' }))
            } else {
                setTokenMatch(true)
            }
        }
        checkToken()
    }, [t])

    return (
        tokenMatch && (
            <>
                <SEO title='Recuperar acceso' />

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
                                ¡No la olvides la próxima vez!
                            </p>
                            <RecoverForm token={t} />
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
    )
}
