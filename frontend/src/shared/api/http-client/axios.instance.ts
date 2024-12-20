import type { AxiosInstance } from 'axios'
import axios from 'axios'

export const axiosInstance: AxiosInstance = axios.create({
  // baseURL: BASE_URL,
  baseURL: 'https://api.tmk-unit-muft.dev2.webant.ru',
})
