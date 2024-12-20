import * as yup from 'yup'
import { Schema } from 'yup'

import { ValidationSchema } from '../react-hook-form'

// Функция для создания схемы валидации на основе переданных полей
// Создана для следующих причин
// Чтобы yup типизация не ругалась, когда она получает схему, где указаны не все поля из интерфейса
// Без any нельзя будет использовать опциональные параметры в схеме (optional(), nullable()) продолжаем ругаться

export const createValidationSchema = <Entity extends object>(fields: {
  [Key in keyof Entity]?: Schema<any>
}) => {
  const filteredFields = Object.fromEntries(Object.entries(fields).filter(([_, value]) => value !== undefined)) as {
    [Key in keyof Entity]: Schema<any>
  }

  return yup.object(filteredFields) as ValidationSchema<Entity>
}
