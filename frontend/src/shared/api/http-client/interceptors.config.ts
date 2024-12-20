import { axiosInstance } from './axios.instance'
import { requestInterceptor } from './interceptors.request'
import { responseInterceptor } from './interceptors.response'

axiosInstance.interceptors.request.use(requestInterceptor)
axiosInstance.interceptors.response.use((config) => config, responseInterceptor)
