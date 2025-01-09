import type { AxiosRequestConfig } from 'axios'

export interface AuthTokens {
  TOKEN_TYPE: string
  EXPIRES?: number
  EXPIRES_IN?: number
  ACCESS_TOKEN: string
  REFRESH_TOKEN: string
}

export interface Request {
  resolve: (value: unknown) => void
  reject: (value: unknown) => void
  config: AxiosRequestConfig
}

export interface TokenState {
  isRefreshing: boolean
  requestQueue: Request[]
}
