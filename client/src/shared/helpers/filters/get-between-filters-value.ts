import type { Nullable } from '@/src/shared/@types'

export const getBetweenFiltersValue = (value: Nullable<number[]>) => {
  return value && value.join('..')
}
