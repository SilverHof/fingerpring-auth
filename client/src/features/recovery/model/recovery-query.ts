import { AxiosError, AxiosRequestConfig } from 'axios'

import { useMutation, UseMutationOptions } from '@tanstack/react-query'

import { Recovery } from './_types'
import { RECOVERY_PRIMARY_KEY } from './_constants'
import { queryFetchRecovery } from './_requests'

export const useRecovery = (
  options?: Omit<UseMutationOptions<Recovery, AxiosError, Recovery>, 'mutationFn'>,
  config?: AxiosRequestConfig
) => {
  return useMutation({
    mutationFn: (data) => queryFetchRecovery(data)(config)(),
    ...options,
    mutationKey: RECOVERY_PRIMARY_KEY,
  })
}
