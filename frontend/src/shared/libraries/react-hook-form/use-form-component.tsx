'use client'

import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form'

import { FormProps } from './_types'

import { AdditionalFormProvider } from './use-additional-form-provider'

export type UseFormComponentArgs<FormValues extends FieldValues = FieldValues> = {
  methods: UseFormReturn<FormValues, any, undefined>
  optimizeWatch: (valueToWatch: string) => any
}

export const useFormComponent =
  <FormValues extends FieldValues = FieldValues>({ methods, optimizeWatch }: UseFormComponentArgs<FormValues>) =>
  ({ children, className = '', onSubmit, onError, ...rest }: FormProps<FormValues>) => {
    const onFormSubmit: SubmitHandler<FormValues> = async (data) => {
      try {
        await onSubmit?.(data, methods)
      } catch (error) {
        return Promise.reject(error)
      }
    }

    return (
      <FormProvider {...methods}>
        <AdditionalFormProvider.Provider value={{ optimizeWatch }}>
          <form
            onSubmit={methods.handleSubmit(
              (data) => onFormSubmit(data),
              (data) => onError?.(data, methods)
            )}
            className={className}
            {...rest}
            noValidate
          >
            {children}
          </form>
        </AdditionalFormProvider.Provider>
      </FormProvider>
    )
  }
