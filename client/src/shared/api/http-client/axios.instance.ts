import type { AxiosInstance } from 'axios'
import axios from 'axios'

export const axiosInstance: AxiosInstance = axios.create({
  // baseURL: BASE_URL,
  baseURL: 'http://localhost:4000',
})
