import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginByOneTap } from 'redux/features/auth/authSlice'

export default function useGoogleOneTap() {
    const { status, loggedIn } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        if (status !== 'loading' && !loggedIn) {
            window.google.accounts.id.initialize({
                client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
                callback: handleCredentialResponse,
                cancel_on_tap_outside: false,
            })
            window.google.accounts.id.prompt()
        }
    }, [status, loggedIn])

    const handleCredentialResponse = response => {
        dispatch(loginByOneTap(response))
    }
}
