import type { AxiosError } from 'axios'
import { destroyCookie, parseCookies } from 'nookies'

import { ACCESS_TOKEN_COOKIES_NAME } from './_constants'
import { logout, refreshTokenRequest } from './_helpers'

import { axiosHttpClient } from './axios.http-client'
import { tokenState } from './interceptors.variables'

export const responseInterceptor = async (error: AxiosError) => {
  const cookies = parseCookies()
  const isOnline = typeof window !== 'undefined' && navigator.onLine
  const { REFRESH_TOKEN } = cookies

  if (error.response?.status === 401 && isOnline) {
    if (REFRESH_TOKEN) {
      tokenState.isRefreshing = true
      destroyCookie(null, ACCESS_TOKEN_COOKIES_NAME, { path: '/' })

      const tokens = await refreshTokenRequest(REFRESH_TOKEN)
      tokenState.isRefreshing = false

      const authorizationHeader = `Bearer ${tokens?.ACCESS_TOKEN}`

      for (const request of tokenState.requestQueue) {
        request.config.headers && (request.config.headers.Authorization = authorizationHeader)
        request.resolve(request.config)
      }

      tokenState.requestQueue = []
      error?.config?.headers && (error.config.headers.Authorization = authorizationHeader)
      return axiosHttpClient(error.config)
    }
    logout()
  }

  if (
    error.response?.status === 400 &&
    (error as AxiosError<{ error_description: string }>).response?.data?.error_description ===
      'refresh token is invalid, expired or revoked' &&
    isOnline
  ) {
    logout()
  }

  return Promise.reject(error)
}
