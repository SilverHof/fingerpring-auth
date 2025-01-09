import { SlotsToClasses } from '@nextui-org/react'

export type InputClassNames =
  | SlotsToClasses<
      | 'description'
      | 'input'
      | 'base'
      | 'label'
      | 'errorMessage'
      | 'mainWrapper'
      | 'inputWrapper'
      | 'innerWrapper'
      | 'clearButton'
      | 'helperWrapper'
    >
  | undefined

export const inputClassNames: InputClassNames = {
  base: 'max-w-full',
  label: 'text-[#94A3B8]',
  input: ['text-[#E2E8F0]', 'placeholder:text-[#4A5568]'],
  inputWrapper: [
    'bg-[#2D2F36]',
    'border-[#35363E]',
    'focus-within:!border-[#60A5FA]',
    'focus-within:ring-2',
    'focus-within:ring-[#60A5FA]/30',
    'hover:border-[#3B3C45]',
  ],
  errorMessage: 'absolute',
}
