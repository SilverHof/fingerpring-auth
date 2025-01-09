import type { SetStateAction, WritableAtom } from 'jotai'
import type { RESET } from 'jotai/utils'

import type { AtomWithHashOptions } from './_types'

import { atomWithStorageFactory } from './atom-with-storage-factory'

export const filterAtomsFactory = <FiltersContent extends Record<string, FiltersContent[keyof FiltersContent]>>(
  filters: FiltersContent,
  options?: AtomWithHashOptions<FiltersContent[keyof FiltersContent]>
) =>
  Object.fromEntries(
    Object.entries(filters).map(([key, value]) => [key, atomWithStorageFactory(key, value, options)])
  ) as {
    [key in keyof FiltersContent]: WritableAtom<FiltersContent[key], SetStateAction<FiltersContent[key]> | typeof RESET>
  }
