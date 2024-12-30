import * as yup from 'yup'

import * as zxcvbn from '@zxcvbn-ts/core'
import { zxcvbnOptions } from '@zxcvbn-ts/core'
import { dictionary } from '@zxcvbn-ts/language-common'

import { ValidationSchema } from '@/src/shared/libraries'
import { createValidationSchema } from '@/src/shared/libraries/yup'

import { Registration } from './_types'

zxcvbnOptions.setOptions({
  dictionary,
})

yup.addMethod(yup.string, 'strongPassword', function () {
  return this.test('strongPassword', 'Пароль слишком простой', (value) => {
    if (!value) return false
    const { score } = zxcvbn.zxcvbn(value)
    if (score < 3) return false

    const hasUpperCase = /[A-Z]/.test(value)
    const hasLowerCase = /[a-z]/.test(value)
    const hasNumber = /\d/.test(value)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value)
    const isLongEnough = value.length >= 8

    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isLongEnough
  })
})

export const registrationSchema = createValidationSchema({
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
  password: yup.string().required('Введите пароль').strongPassword(),
  repeatPassword: yup
    .string()
    .required('Введите пароль')
    .oneOf([yup.ref('password')], 'Пароли не совпадают'),
}) as ValidationSchema<Registration>
