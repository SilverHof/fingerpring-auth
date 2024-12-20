import { isDateObject } from './is-date-object'
import { isNullOrUndefined } from './is-null-or-undefined'

export const isObjectType = (value: unknown): value is object => {
  return typeof value === 'object'
}

export const isObject = <Type extends object>(value: unknown): value is Type => {
  return !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value)
}
