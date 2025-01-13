import { AxiosError, AxiosRequestConfig } from 'axios'

import { useMutation, UseMutationOptions } from '@tanstack/react-query'

import { SettingsFingerprint } from './_types'
import { UPDATE_SETTINGS_PRIMARY_KEY } from './_constants'
import { queryUpdateSettingsFingerprint } from './_requests'

export const useUpdateSettingsFingerprint = (
  options?: Omit<UseMutationOptions<SettingsFingerprint, AxiosError, SettingsFingerprint>, 'mutationFn'>,
  config?: AxiosRequestConfig
) => {
  return useMutation({
    mutationFn: (data) => queryUpdateSettingsFingerprint(data)(config)(),
    ...options,
    mutationKey: UPDATE_SETTINGS_PRIMARY_KEY,
  })
}
