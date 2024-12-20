import axios from 'axios'
import { destroyCookie, setCookie } from 'nookies'

import {
  CASDOOR_CLIENT_ID,
  CASDOOR_SERVER_URL,
  CASDOOR_SESSION_STORAGE_NAME,
  REFRESH_TOKEN_GRANT_TYPE,
  REFRESH_TOKEN_REQUEST_TARGET,
  REFRESH_TOKEN_SCOPE,
} from '@/src/shared/config'

import type { AuthTokens } from './_types'
import {
  ACCESS_TOKEN_COOKIES_NAME,
  DEFAULT_HEADERS,
  REFRESH_TOKEN_COOKIES_NAME,
  REFRESH_TOKEN_MAX_AGE,
} from './_constants'

export const getOrSaveCasdoorState = () => {
  let state = sessionStorage.getItem(CASDOOR_SESSION_STORAGE_NAME)
  if (state !== null) {
    return state
  }
  state = Math.random().toString(36).slice(2)
  sessionStorage.setItem(CASDOOR_SESSION_STORAGE_NAME, state)
  return state
}

export const getSignInUrl = (redirectPath: string) =>
  `${CASDOOR_SERVER_URL}/login/oauth/authorize?client_id=${CASDOOR_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
    redirectPath
  )}&scope=read&state=${getOrSaveCasdoorState()}`

export const logout = () => {
  destroyCookie(null, REFRESH_TOKEN_COOKIES_NAME, { path: '/' })
  destroyCookie(null, ACCESS_TOKEN_COOKIES_NAME, { path: '/' })
  if (typeof window !== 'undefined') {
    window.location.href = getSignInUrl(window.location.href)
  }
}

export const setAuthTokensInCookies = (tokens: AuthTokens) => {
  setCookie(null, ACCESS_TOKEN_COOKIES_NAME, tokens.ACCESS_TOKEN, {
    path: '/',
    ...(tokens.EXPIRES && { EXPIRES: new Date(tokens.EXPIRES * 1000) }),
    ...(tokens.EXPIRES_IN && { maxAge: tokens.EXPIRES_IN * 60 }),
  })
  setCookie(null, REFRESH_TOKEN_COOKIES_NAME, tokens.REFRESH_TOKEN, {
    path: '/',
    maxAge: REFRESH_TOKEN_MAX_AGE,
  })
}

export const refreshTokenRequest = (REFRESH_TOKEN: string) =>
  axios
    .post<AuthTokens>(
      CASDOOR_SERVER_URL + REFRESH_TOKEN_REQUEST_TARGET,
      {
        grant_type: REFRESH_TOKEN_GRANT_TYPE,
        scope: REFRESH_TOKEN_SCOPE,
        client_id: CASDOOR_CLIENT_ID,
        REFRESH_TOKEN,
      },
      {
        headers: DEFAULT_HEADERS,
      }
    )
    .then((res) => {
      setAuthTokensInCookies(res.data)
      return res.data
    })
    .catch(() => logout())
