import * as yup from 'yup'

import { ValidationSchema } from '@/src/shared/libraries'
import { createValidationSchema } from '@/src/shared/libraries/yup'

import { Confirmation } from './_types'

export const confirmationSchema = createValidationSchema({
  token: yup.string().min(6, 'Введите код подтверждения').required('Введите код подтверждения'),
}) as ValidationSchema<Confirmation>
