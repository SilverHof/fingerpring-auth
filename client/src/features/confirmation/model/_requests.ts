import { queryFetchFactory } from '@/src/shared/libraries'

import { Confirmation, CONFIRMATION_MODE_ENUM } from './_types'
import { CONFIRMATION_TARGET } from './_constants'

export const queryFetchConfirmation = (data: Confirmation, mode: CONFIRMATION_MODE_ENUM) =>
  queryFetchFactory<Confirmation, Confirmation>(CONFIRMATION_TARGET[mode], {
    method: 'POST',
    data: data,
  })
