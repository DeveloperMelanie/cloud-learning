import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const alertsSlice = createSlice({
    name: 'alerts',
    initialState,
    reducers: {
        addAlert(state, action) {
            const id = new Date().getTime()
            state.push({ id, ...action.payload })
        },
        removeAlert(state, action) {
            return state.filter(alert => alert.id !== action.payload)
        },
    },
})

export const { addAlert, removeAlert } = alertsSlice.actions

export default alertsSlice.reducer
