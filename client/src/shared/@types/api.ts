export interface CollectionResponse<T = {}> {
  '@context': string
  '@id': string
  '@type': string
  'hydra:member': T[]
  count?: number
  'hydra:totalItems': number
  'hydra:view': {
    '@id': string
    '@type': string
    'hydra:first': string
    'hydra:last': string
    'hydra:next': string
  }
}

export interface BaseEntity {
  '@context': string
  '@id': string
  '@type': string
  id: string
  dateCreate: string
  dateUpdate: string
}
