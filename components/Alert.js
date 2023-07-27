import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { removeAlert } from 'redux/features/alerts/alertSlice'

export default function Alert() {
    const dispatch = useDispatch()
    const alerts = useSelector(state => state.alerts)

    useEffect(() => {
        alerts.forEach(alert => {
            toast[alert.type](alert.message)
            dispatch(removeAlert(alert.id))
        })
    }, [alerts, dispatch])

    return null
}
