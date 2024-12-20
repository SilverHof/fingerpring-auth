'use client'

import { FieldValues, useFormContext } from 'react-hook-form'

import { omitObjectProperty } from '@/src/shared/helpers'

import { useAdditionalFormProvider } from './use-additional-form-provider'

export const useFormInitializerContext = <
  FormValues extends FieldValues,
  FormContext = any,
  TransformedValues extends FieldValues | undefined = undefined,
>() => {
  const methods = useFormContext<FormValues, FormContext, TransformedValues>()
  const additionalMethods = useAdditionalFormProvider()

  return {
    ...omitObjectProperty(methods, ['watch']),
    defaultWatch: methods.watch,
    ...additionalMethods,
  }
}
