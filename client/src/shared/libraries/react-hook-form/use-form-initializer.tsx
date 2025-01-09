'use client'

import { useState } from 'react'
import { Control, FieldValues, Resolver, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useTypedController } from '@hookform/strictly-typed'

import { omitObjectProperty } from '@/src/shared/helpers'

import { UseFormInitializerArgs } from './_types'

import { useCompoundValidation } from './use-compound-validation'
import { useFormComponent } from './use-form-component'
import { useOptimizeWatch } from './use-optimize-watch'

export const useFormInitializer = <FormValues extends FieldValues = FieldValues>({
  baseSchema,
  compoundSchemas,
  hookParams,
}: UseFormInitializerArgs<FormValues>) => {
  const [currentValidationSchema, setCurrentValidationSchema] = useState(baseSchema)

  const methods = useForm({
    ...hookParams,
    ...(currentValidationSchema && {
      resolver: yupResolver(currentValidationSchema) as unknown as Resolver<FormValues>,
    }),
    reValidateMode: 'onBlur',
  })

  const { control, watch, setFocus } = methods

  const optimizeWatch = useOptimizeWatch(watch)

  const ControllerTyped = useTypedController<FormValues>({ control: control as Control<Record<string, any>> })
  const FormComponent = useFormComponent<FormValues>({ methods, optimizeWatch })

  useCompoundValidation({
    baseSchema,
    compoundSchemas,
    watch,
    setFocus,
    setCurrentValidationSchema,
  })

  return {
    ...omitObjectProperty(methods, ['watch']),
    defaultWatch: methods.watch,
    optimizeWatch,
    Form: FormComponent,
    ControllerTyped,
  }
}
