import { queryFetchFactory } from '@/src/shared/libraries'

import { Recovery } from './_types'
import { RECOVERY_TARGET } from './_constants'

export const queryFetchRecovery = (data: Recovery) =>
  queryFetchFactory<Recovery, Recovery>(RECOVERY_TARGET, {
    method: 'POST',
    data: data,
  })
