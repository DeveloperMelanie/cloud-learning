import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import alertReducer from './features/alerts/alertSlice'
import courseReducer from './features/courses/courseSlice'

export default configureStore({
    reducer: {
        auth: authReducer,
        alerts: alertReducer,
        courses: courseReducer,
    },
})
