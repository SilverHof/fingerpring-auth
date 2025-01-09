import { queryFetchFactory } from '@/src/shared/libraries'

import { Registration } from './_types'
import { REGISTRATION_TARGET } from './_constants'

export const queryFetchRegistration = (data: Registration) =>
  queryFetchFactory<Registration, Registration>(REGISTRATION_TARGET, {
    method: 'POST',
    data: data,
  })
