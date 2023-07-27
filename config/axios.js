import axios from 'axios'

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    withCredentials: true,
})

export default axiosClient
