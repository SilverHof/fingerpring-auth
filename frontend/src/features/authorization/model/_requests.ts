import { queryFetchFactory } from '@/src/shared/libraries'

import { Authorization } from './_types'
import { AUTHORIZATION_TARGET } from './_constants'

export const queryFetchAuthorization = (data: Authorization) =>
  queryFetchFactory<Authorization, Authorization>(AUTHORIZATION_TARGET, {
    method: 'POST',
    data: data,
  })
