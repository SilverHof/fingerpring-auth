import Router from 'next/router'
import type { SetStateAction, WritableAtom } from 'jotai'
import type { RESET } from 'jotai/utils'
import { atomWithReset } from 'jotai/utils'

import { isTestEnv } from '@/src/shared/config'

import type { AtomWithHashOptions } from './_types'

import { atomWithUrlLocation } from './atom-with-url-location'

export const atomWithStorageFactory = <Value>(
  key: string,
  initialValue: Value,
  options?: AtomWithHashOptions<Value>
): WritableAtom<Value, SetStateAction<Value> | typeof RESET> => {
  const eventName = options?.storageType === 'hash' ? 'hashchange' : 'popstate'

  if (options?.storageType === 'none') {
    return atomWithReset(initialValue)
  }

  return atomWithUrlLocation(
    key,
    initialValue,
    Object.assign(
      {
        delayInit: false,
        subscribe: (callback) => {
          isTestEnv || Router.events.on('routeChangeComplete', callback)
          window.addEventListener(eventName, callback)
          return () => {
            isTestEnv || Router.events.off('routeChangeComplete', callback)
            window.removeEventListener(eventName, callback)
          }
        },
      } as AtomWithHashOptions<Value>,
      options
    )
  )
}
