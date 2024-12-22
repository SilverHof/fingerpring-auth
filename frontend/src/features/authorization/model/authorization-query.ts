import { useRouter } from 'next/router'
import { AxiosError, AxiosRequestConfig } from 'axios'

import { useMutation, UseMutationOptions } from '@tanstack/react-query'

import { Authorization } from './_types'
import { AUTHORIZATION_PRIMARY_KEY } from './_constants'
import { queryFetchAuthorization } from './_requests'

export const useAuthorization = (
  options?: Omit<UseMutationOptions<Authorization, AxiosError, Authorization>, 'mutationFn'>,
  config?: AxiosRequestConfig
) => {
  // const router = useRouter()
  return useMutation({
    mutationFn: (data) => queryFetchAuthorization(data)(config)(),
    ...options,
    mutationKey: AUTHORIZATION_PRIMARY_KEY,
    // onSuccess: (data) => router.push('/some-external-link'),
    onError: (error) => {},
  })
}
