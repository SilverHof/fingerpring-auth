export type StorageType = 'hash' | 'query' | 'none'

export interface FilterAtomParams {
  name: string
  initialValue: unknown
}

export interface AtomWithHashOptions<Value> {
  storageType?: StorageType
  serialize?: (val: Value) => string
  deserialize?: (str: string | null) => Value
  delayInit?: boolean
  replaceState?: boolean
  subscribe?: (callback: () => void) => () => void
}
