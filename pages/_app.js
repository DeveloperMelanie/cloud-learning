import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { checkAuth } from 'redux/features/auth/authSlice'
import { ToastContainer } from 'react-toastify'
import store from 'redux/store'
import useGoogleOneTap from 'hooks/useGoogleOneTap'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Alert from 'components/Alert'

import 'react-toastify/dist/ReactToastify.css'
import 'react-loading-skeleton/dist/skeleton.css'
import 'styles/globals.css'

function MainComponent({ Component, pageProps }) {
    const router = useRouter()
    const excludeRoutes = [
        '/login',
        '/register',
        '/success',
        '/confirm',
        '/forgot-password',
        '/recover',
    ]
    const isExcludedRoute = excludeRoutes.includes(router.pathname)

    const dispatch = useDispatch()
    const loggedIn = useSelector(state => state.auth.loggedIn)

    useEffect(() => {
        dispatch(checkAuth(router))
    }, [dispatch])

    useEffect(() => {
        if (loggedIn && isExcludedRoute) {
            router.push('/')
        }
    }, [loggedIn, router.asPath])

    useGoogleOneTap()

    return (
        <>
            <ToastContainer />
            <Alert />

            {!isExcludedRoute && <Header />}
            <Component {...pageProps} />
            {!isExcludedRoute && <Footer />}
        </>
    )
}

export default function CloudLearning({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <MainComponent Component={Component} pageProps={pageProps} />
        </Provider>
    )
}
