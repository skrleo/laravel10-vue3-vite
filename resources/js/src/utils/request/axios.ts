import axios, { type AxiosResponse } from 'axios'
import { GlobalStore } from '@/store'

const service = axios.create()

service.interceptors.request.use(
    (config) => {
        const token = GlobalStore().token
        if (token)
            config.headers.Authorization = `Bearer ${token}`
        return config
    },
    (error) => {
        return Promise.reject(error.response)
    },
)

service.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
        if (response.status === 200)
            return response

        throw new Error(response.status.toString())
    },
    (error) => {
        return Promise.reject(error)
    },
)

export default service