import { queryFetchFactory } from '@/src/shared/libraries'

import { Confirmation } from './_types'
import { CONFIRMATION_TARGET } from './_constants'

export const queryFetchConfirmation = (data: Confirmation) =>
  queryFetchFactory<Confirmation, Confirmation>(CONFIRMATION_TARGET, {
    method: 'POST',
    data: data,
  })
