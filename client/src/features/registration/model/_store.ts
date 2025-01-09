import { atom } from 'jotai'

import { Nullable } from '@/src/shared/@types'

export const registrationEmailAtom = atom<Nullable<string>>(null)
