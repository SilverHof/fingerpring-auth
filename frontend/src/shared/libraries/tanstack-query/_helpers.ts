import type { ParsedUrlQuery } from 'querystring'

import type { CustomQueryKey } from './_types'

export const getCurrentQueryKey = (
  primaryKey: CustomQueryKey,
  filters: Record<string, unknown> & ParsedUrlQuery,
  queryKey?: string[] | undefined
) => [...primaryKey, Object.entries(filters).join(), ...(queryKey || [])] as CustomQueryKey
