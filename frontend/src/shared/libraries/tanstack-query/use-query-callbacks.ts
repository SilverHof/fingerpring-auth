'use client'

import { useEffect } from 'react'

import type { UseQueryCallbackType } from './_types'

export const useQueryCallbacks = <Response>({ response, callbacks }: UseQueryCallbackType<Response>): void => {
  useEffect(() => {
    if (response.isSuccess) callbacks.onSuccess?.(response.data)
  }, [response.data, response.isSuccess, callbacks])

  useEffect(() => {
    if (response.isError) callbacks.onError?.(response.error)
  }, [response.data, response.isError, callbacks])

  useEffect(() => {
    if (response.isSuccess || response.isError) callbacks.onSettled?.(response.data, response.error)
  }, [response.data, response.isSuccess, response.isError, callbacks])
}
