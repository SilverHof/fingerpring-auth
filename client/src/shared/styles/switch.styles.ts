import { cn, SlotsToClasses } from '@nextui-org/react'

export type SwitchClassNames =
  | SlotsToClasses<'base' | 'label' | 'thumbIcon' | 'startContent' | 'endContent' | 'hiddenInput' | 'wrapper' | 'thumb'>
  | undefined

export const switchClassNames: SwitchClassNames = {
  label: 'w-full',
  base: cn(
    'flex flex-row-reverse w-full max-w-md bg-content2 hover:bg-content2 items-center col-span-1',
    'justify-between cursor-pointer rounded-lg gap-2 p-2 border-2 border-transparent',
    'data-[selected=true]:border-primary'
  ),
  wrapper: 'p-0 h-4 overflow-visible col-span-1',
  thumb: cn(
    'w-6 h-6 border-2 shadow-lg',
    'group-data-[hover=true]:border-primary',
    'group-data-[selected=true]:ms-6',
    'group-data-[pressed=true]:w-7',
    'group-data-[selected]:group-data-[pressed]:ms-4'
  ),
}
