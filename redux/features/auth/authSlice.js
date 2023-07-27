import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosClient from 'config/axios'

// Register
export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            const response = await axiosClient.post('/auth/register', {
                name,
                email,
                password,
            })
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data.msg)
        }
    },
)

// Confirm user
export const confirmUser = createAsyncThunk(
    'auth/confirm',
    async ({ token }, { rejectWithValue }) => {
        try {
            const response = await axiosClient.get(`/auth/confirm/${token}`)
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data.msg)
        }
    },
)

// Login
export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await axiosClient.post('/auth/login', {
                email,
                password,
            })
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data.msg)
        }
    },
)

// Google One Tap
export const loginByOneTap = createAsyncThunk(
    'auth/onetap',
    async ({ credential }, { rejectWithValue }) => {
        try {
            const response = await axiosClient.post('/auth/google/onetap', {
                credential,
            })
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data.msg)
        }
    },
)

// Forgot password
export const forgotPassword = createAsyncThunk(
    'auth/forgotPassword',
    async ({ email }, { rejectWithValue }) => {
        try {
            const response = await axiosClient.post('/auth/forgot-password', {
                email,
            })
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data.msg)
        }
    },
)

// Recover user
export const recoverUser = createAsyncThunk(
    'auth/recover',
    async ({ token }, { rejectWithValue }) => {
        try {
            const response = await axiosClient.get(
                `/auth/forgot-password/${token}`,
            )
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data.msg)
        }
    },
)

// Change password
export const changePassword = createAsyncThunk(
    'auth/changePassword',
    async ({ token, password }, { rejectWithValue }) => {
        try {
            const response = await axiosClient.post(
                `/auth/forgot-password/${token}`,
                { password },
            )
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data.msg)
        }
    },
)

// Check auth
export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    async ({ rejectWithValue }) => {
        try {
            const response = await axiosClient.get('/auth/profile')
            return response.data.user
        } catch (err) {
            return rejectWithValue(err.response.data.msg)
        }
    },
)

// Logout
export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosClient.post('/auth/logout')
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data.msg)
        }
    },
)

const initialState = {
    loggedIn: false,
    user: null,
    status: 'loading',
}

const handleAsyncAction = (builder, action, handleFulfilled) => {
    builder
        .addCase(action.pending, state => {
            state.status = 'loading'
        })
        .addCase(action.fulfilled, (state, action) => {
            state.status = 'succeeded'
            handleFulfilled(state, action)
        })
        .addCase(action.rejected, state => {
            state.status = 'failed'
        })
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        handleAsyncAction(builder, confirmUser, (state, action) => {
            state.loggedIn = true
            state.user = action.payload
        })

        handleAsyncAction(builder, loginUser, (state, action) => {
            state.loggedIn = true
            state.user = action.payload
        })

        handleAsyncAction(builder, changePassword, (state, action) => {
            state.loggedIn = true
            state.user = action.payload
        })

        handleAsyncAction(builder, loginByOneTap, (state, action) => {
            state.loggedIn = true
            state.user = action.payload
        })

        handleAsyncAction(builder, checkAuth, (state, action) => {
            if (action.payload) {
                state.loggedIn = true
                state.user = action.payload
            }
        })

        builder.addCase(logoutUser.fulfilled, state => {
            state.loggedIn = false
            state.user = null
        })
    },
})

export default authSlice.reducer
