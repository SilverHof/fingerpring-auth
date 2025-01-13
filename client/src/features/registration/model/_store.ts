import { atom } from 'jotai'

import { Nullable } from '@/src/shared/@types'

export const userEmailAtom = atom<Nullable<string>>(null)
