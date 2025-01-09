import * as yup from 'yup'

import { BaseEntity, TFunction } from '@/src/shared/@types'

import { getOptionalRequired } from './get-optional-required'

export const validateSelect = (t: TFunction, required = true) => {
  return yup
    .mixed()
    .nullable()
    .when({
      is: (value: string | BaseEntity) => typeof value === 'string' || value === null,
      then: (schema) => getOptionalRequired(schema, t, required),
      otherwise: (schema) =>
        getOptionalRequired(
          schema.transform((option: BaseEntity) => option['@id']),
          t,
          required
        ),
    })
}
