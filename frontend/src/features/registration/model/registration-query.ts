import { AxiosError, AxiosRequestConfig } from 'axios'

import { useMutation, UseMutationOptions } from '@tanstack/react-query'

import { Registration } from './_types'
import { REGISTRATION_PRIMARY_KEY } from './_constants'
import { queryFetchRegistration } from './_requests'

export const useRegistration = (
  options?: Omit<UseMutationOptions<Registration, AxiosError, Registration>, 'mutationFn'>,
  config?: AxiosRequestConfig
) => {
  return useMutation({
    mutationFn: (data) => queryFetchRegistration(data)(config)(),
    ...options,
    mutationKey: REGISTRATION_PRIMARY_KEY,
  })
}
