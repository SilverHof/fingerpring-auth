import * as yup from 'yup'

import { ValidationSchema } from '@/src/shared/libraries'
import { createValidationSchema } from '@/src/shared/libraries/yup'

import { Registration } from './_types'

export const registrationSchema = createValidationSchema({
  login: yup.string().required('Введите логин'),
  password: yup.string().required('Введите пароль'),
  repeatPassword: yup
    .string()
    .required('Введите пароль')
    .oneOf([yup.ref('password')], 'Пароли не совпадают'),
  method2FA: yup.string().required('Выберите  вид 2FA'),
}) as ValidationSchema<Registration>
