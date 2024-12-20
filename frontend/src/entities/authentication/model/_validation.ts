import * as yup from 'yup'

import { ValidationSchema } from '@/src/shared/libraries'
import { createValidationSchema } from '@/src/shared/libraries/yup'

import { Authentication } from './_types'

export const authenticationSchema = createValidationSchema({
  login: yup.string().required(),
  password: yup.string().required(),
  rememberMe: yup.boolean().optional(),
}) as ValidationSchema<Authentication>
