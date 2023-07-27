import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { confirmUser } from 'redux/features/auth/authSlice'
import { addAlert } from 'redux/features/alerts/alertSlice'

export default function Confirm() {
    const dispatch = useDispatch()
    const router = useRouter()
    const { t } = router.query

    useEffect(() => {
        const confirm = async () => {
            if (t) {
                const action = await dispatch(confirmUser({ token: t }))
                if (confirmUser.rejected.match(action)) {
                    dispatch(
                        addAlert({ message: action.payload, type: 'error' }),
                    )
                } else {
                    router.push('/')
                }
            }
        }
        confirm()
    }, [t])

    return null
}
