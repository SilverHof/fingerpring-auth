import { queryFetchFactory } from '@/src/shared/libraries'

import { SettingsFingerprint } from './_types'
import { SETTINGS_REQUEST_TARGET } from './_constants'

export const queryFetchSettingsFingerprint = queryFetchFactory<SettingsFingerprint, SettingsFingerprint>(
  SETTINGS_REQUEST_TARGET
)

export const queryUpdateSettingsFingerprint = (data: SettingsFingerprint) =>
  queryFetchFactory<SettingsFingerprint, SettingsFingerprint>(SETTINGS_REQUEST_TARGET, {
    method: 'PUT',
    data: data,
  })
