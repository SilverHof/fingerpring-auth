import * as yup from 'yup'
import dayjs from 'dayjs'

import { TFunction } from '@/src/shared/@types'
import { removeTimezone } from '@/src/shared/helpers'

export const isPastDate = (t: TFunction) => {
  return yup
    .string()
    .test('is-past', t('common:Date_must_be_not_in_the_past'), function (value) {
      const { path, createError } = this

      return value && dayjs(removeTimezone(value)).isBefore(dayjs().startOf('day'))
        ? createError({ path, message: t('common:Date_must_be_not_in_the_past') })
        : true
    })
    .required(t('common:Required_field'))
}
