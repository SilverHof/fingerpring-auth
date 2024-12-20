'use client'

import { composeProviders } from '@/src/shared/helpers'

import { WithJotai } from './_with-jotai'
import { WithNextUi } from './_with-next-ui'
import { WithTanstackQuery } from './_with-tanstack-query'

export const WithProviders = composeProviders(
  WithNextUi,
  WithTanstackQuery,
  WithJotai,
)
