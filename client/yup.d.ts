import { StringSchema } from 'yup'

declare module 'yup' {
  interface StringSchema {
    strongPassword(): this
  }
}
