import * as yup from 'yup'

import { TFunction } from '@/src/shared/@types'

export const getOptionalRequired = (schema: yup.Schema, t: TFunction, required?: boolean) => {
  return required ? schema.required(t('common:Required_field')) : schema.notRequired()
}
