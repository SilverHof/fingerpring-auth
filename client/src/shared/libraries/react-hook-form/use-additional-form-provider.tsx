'use client'

import { createContext, useContext } from 'react'

import { OptimizeWatch } from './_types'

export const AdditionalFormProvider = createContext<OptimizeWatch>(undefined)

export const useAdditionalFormProvider = () => {
  const context = useContext(AdditionalFormProvider)
  if (context === undefined) {
    throw new Error('useCustomFormContext must be used within a CustomFormProvider')
  }
  return context
}
