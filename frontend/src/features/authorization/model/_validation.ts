import * as yup from 'yup'

import { ValidationSchema } from '@/src/shared/libraries'
import { createValidationSchema } from '@/src/shared/libraries/yup'

import { Authorization } from './_types'

export const authorizationSchema = createValidationSchema({
  login: yup.string().required('Введите логин'),
  password: yup.string().required('Введите пароль'),
  rememberMe: yup.boolean().optional(),
}) as ValidationSchema<Authorization>
