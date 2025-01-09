import { AxiosError, AxiosRequestConfig } from 'axios'

import { useMutation, UseMutationOptions } from '@tanstack/react-query'

import { Confirmation, CONFIRMATION_MODE_ENUM } from './_types'
import { CONFIRMATION_PRIMARY_KEY } from './_constants'
import { queryFetchConfirmation } from './_requests'

export const useConfirmation = (
  mode: CONFIRMATION_MODE_ENUM,
  options?: Omit<UseMutationOptions<Confirmation, AxiosError, Confirmation>, 'mutationFn'>,
  config?: AxiosRequestConfig
) => {
  return useMutation({
    mutationFn: (data) => queryFetchConfirmation(data, mode)(config)(),
    ...options,
    mutationKey: CONFIRMATION_PRIMARY_KEY[mode],
    onError: (error) => {},
  })
}
