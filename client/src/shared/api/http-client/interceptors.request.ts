import type { AxiosRequestConfig } from 'axios'
import { parseCookies } from 'nookies'

import { TOKEN_PATH } from '@/src/shared/config'

import { DEFAULT_HEADERS } from './_constants'
import { refreshTokenRequest } from './_helpers'

import { tokenState } from './interceptors.variables'

export const requestInterceptor = async (config: AxiosRequestConfig) => {
  const cookies = parseCookies()
  // eslint-disable-line
  const { REFRESH_TOKEN } = cookies
  // eslint-disable-line
  let { ACCESS_TOKEN } = cookies

  if (config.url?.includes(TOKEN_PATH)) {
    return config
  }

  if (tokenState.isRefreshing) {
    return new Promise((resolve, reject) => {
      tokenState.requestQueue.push({ resolve, reject, config })
    })
  }

  if (!ACCESS_TOKEN && REFRESH_TOKEN && typeof window !== 'undefined' && navigator.onLine) {
    tokenState.isRefreshing = true
    const tokens = await refreshTokenRequest(REFRESH_TOKEN)
    tokenState.isRefreshing = false
    for (const request of tokenState.requestQueue) {
      request.config.headers && (request.config.headers.Authorization = `Bearer ${tokens?.ACCESS_TOKEN}`)
      request.resolve(request.config)
    }
    tokenState.requestQueue = []
    tokens?.ACCESS_TOKEN && (ACCESS_TOKEN = tokens.ACCESS_TOKEN)
  }

  config.headers = {
    ...DEFAULT_HEADERS,
    ...(config.method === 'GET' && { Pragma: 'no-cache' }),
    ...config.headers,
    ...(ACCESS_TOKEN && { Authorization: `Bearer ${ACCESS_TOKEN}` }),
  }
  delete config.params?.sort

  return config
}
