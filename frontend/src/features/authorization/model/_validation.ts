import * as yup from 'yup'

import { ValidationSchema } from '@/src/shared/libraries'
import { createValidationSchema } from '@/src/shared/libraries/yup'

import { Authorization } from './_types'

export const authorizationSchema = createValidationSchema({
  email: yup
    .string()
    .required('Введите почту')
    .email('Введите корректный адрес электронной почты')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Почта должна соответствовать стандартному формату')
    .test('restrictedDomains', 'Почта с данного домена недопустима', (value) => {
      if (!value) return false
      const restrictedDomains = ['example.com', 'test.com']
      const domain = value.split('@')[1]
      return !restrictedDomains.includes(domain)
    }),
  password: yup.string().required('Введите пароль'),
  rememberMe: yup.boolean().optional(),
}) as ValidationSchema<Authorization>
