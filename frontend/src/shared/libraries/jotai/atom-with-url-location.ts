import { atomWithStorage } from 'jotai/utils'

import type { AtomWithHashOptions } from './_types'

export const atomWithUrlLocation = <Value>(key: string, initialValue: Value, options: AtomWithHashOptions<Value>) => {
  const isStorageTypeHash = options?.storageType === 'hash'

  const getURLParams = () =>
    isStorageTypeHash ? new URLSearchParams(location.hash.slice(1)) : new URLSearchParams(location.search.slice(1))

  const urlMark = isStorageTypeHash ? '#' : '?'

  const serialize = options?.serialize || JSON.stringify
  const deserialize = options?.deserialize || JSON.parse

  function updateQuery(key: string): void
  function updateQuery(key: string, newValue?: Value): void {
    const searchParams = getURLParams()
    newValue ? searchParams.set(key, serialize(newValue)) : searchParams.delete(key)

    const currentState = history.state

    const searchParamsString = searchParams.toString()

    const as = isStorageTypeHash
      ? currentState.as
      : history.state?.as?.replace(/(#|\?)(.+)?/gm, '') + (searchParamsString ? urlMark + searchParamsString : '')

    const historyState = { ...currentState, as, key: key + Date.now() }

    if (options?.replaceState || history.state?.as === historyState.as) {
      history.replaceState(historyState, '', as)
    } else {
      history.pushState(historyState, '', as)
    }
  }

  const subscribe =
    options?.subscribe ||
    ((callback) => {
      window.addEventListener('popstate', callback)
      return () => {
        window.removeEventListener('popstate', callback)
      }
    })

  const queryStorage = {
    getItem: (key: string) => {
      if (typeof window === 'undefined') {
        return initialValue
      }
      const searchParams = getURLParams()
      const storedValue = searchParams.get(key)

      if (storedValue === null) {
        return initialValue
      }

      return deserialize(storedValue)
    },
    setItem: updateQuery,
    removeItem: updateQuery,
    subscribe: (key: string, setValue: (value: Value) => void) => {
      const callback = () => {
        const searchParams = getURLParams()
        const parameter = searchParams.get(key)

        if (parameter !== null) {
          setValue(deserialize(parameter))
        } else {
          setValue(initialValue)
        }
      }

      return subscribe(callback)
    },
    ...(options?.delayInit && { delayInit: true }),
  }

  return atomWithStorage(key, initialValue, queryStorage)
}
