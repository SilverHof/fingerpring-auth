import { Primitive } from './_types'

import { isNullOrUndefined } from './is-null-or-undefined'
import { isObjectType } from './is-object'

export const isPrimitive = (value: unknown): value is Primitive => {
  return isNullOrUndefined(value) || !isObjectType(value)
}
