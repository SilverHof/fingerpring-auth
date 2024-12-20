import { FormHTMLAttributes, ReactNode } from 'react'
import { FieldErrors, FieldValues, UseFormProps, UseFormReturn } from 'react-hook-form'
import { AnyObject, ObjectSchema } from 'yup'

import { BaseEntity } from '@/src/shared/@types'

export type SchemaValues<FormValues extends FieldValues> = Partial<{
  [Key in Exclude<keyof FormValues, keyof BaseEntity>]: any
}>

export type DefaultSchemaValues<FormValues extends FieldValues> = {
  [Key in keyof FormValues]: any
}

export type ValidationSchema<FormValues extends FieldValues = FieldValues> = ObjectSchema<
  Partial<FormValues>,
  AnyObject,
  Partial<FormValues>
>

export interface CompoundSchema<FormValues extends FieldValues = FieldValues> {
  key: keyof FormValues
  valueToMatch: string | number
  schema: ValidationSchema<FormValues>
}

export type UseFormInitializerArgs<FormValues extends FieldValues = FieldValues> = {
  baseSchema: ValidationSchema<FormValues>
  compoundSchemas?: CompoundSchema<FormValues>[]
  hookParams?: UseFormProps<FormValues>
}

export type OmittedFormHTMLAttributes = Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit' | 'onError' | 'children'>

export type FormChildren = ReactNode | ReactNode[]

export interface FormProps<FromValues extends FieldValues = FieldValues> extends OmittedFormHTMLAttributes {
  children?: FormChildren
  className?: string
  onSubmit?: (data: FromValues, methods?: UseFormReturn<FromValues>) => Promise<unknown> | void
  onError?: (errors?: FieldErrors<FromValues>, methods?: UseFormReturn<FromValues>) => Promise<unknown> | void
}

export type OptimizeWatch =
  | {
      optimizeWatch: (valueToWatch: string) => any
    }
  | undefined
