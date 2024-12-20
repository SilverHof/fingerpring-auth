import * as yup from 'yup'
import dayjs from 'dayjs'

import { TFunction } from '@/src/shared/@types'
import { removeTimezone } from '@/src/shared/helpers'

export const isFutureDate = (t: TFunction) => {
  return yup
    .string()
    .test('is-future', t('common:Date_must_be_not_in_the_future'), function (value) {
      const { path, createError } = this
      return value && dayjs(removeTimezone(value)).isAfter(dayjs())
        ? createError({ path, message: t('common:Date_must_be_not_in_the_future') })
        : true
    })
    .required(t('common:Required_field'))
}
