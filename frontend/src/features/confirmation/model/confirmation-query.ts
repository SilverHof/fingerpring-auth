import { useRouter } from 'next/router'
import { AxiosError, AxiosRequestConfig } from 'axios'

import { useMutation, UseMutationOptions } from '@tanstack/react-query'

import { Confirmation } from './_types'
import { CONFIRMATION_PRIMARY_KEY } from './_constants'
import { queryFetchConfirmation } from './_requests'

export const useConfirmation = (
  options?: Omit<UseMutationOptions<Confirmation, AxiosError, Confirmation>, 'mutationFn'>,
  config?: AxiosRequestConfig
) => {
  // const router = useRouter()
  return useMutation({
    mutationFn: (data) => queryFetchConfirmation(data)(config)(),
    ...options,
    mutationKey: CONFIRMATION_PRIMARY_KEY,
    // onSuccess: (data) => router.push('/some-external-link'),
    onError: (error) => {},
  })
}
