import * as yup from 'yup'

import { ValidationSchema } from '@/src/shared/libraries'
import { createValidationSchema } from '@/src/shared/libraries/yup'

import { Recovery } from './_types'

export const recoverySchema = createValidationSchema({
  email: yup.string().email('Введите почту'),
}) as ValidationSchema<Recovery>
