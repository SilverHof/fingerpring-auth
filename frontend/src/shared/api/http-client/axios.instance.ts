import type { AxiosInstance } from 'axios'
import axios from 'axios'

export const axiosInstance: AxiosInstance = axios.create({
  // baseURL: BASE_URL,
  baseURL: 'https://localhost:4000',
})
