import { queryFactory, QueryParams } from '@/src/shared/libraries'

import { GET_SETTINGS_PRIMARY_KEY } from './_constants'
import { queryFetchSettingsFingerprint } from './_requests'

export const settingsFingerprintQuery = queryFactory({
  primaryKey: GET_SETTINGS_PRIMARY_KEY,
  queryFetchFn: queryFetchSettingsFingerprint,
})((filters) => ({
  params: filters,
}))

export const useSettingsFingerprintQuery = (params?: QueryParams<any>) =>
  settingsFingerprintQuery.query({
    ...params,
  })
