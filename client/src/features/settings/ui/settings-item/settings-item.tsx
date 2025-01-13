'use client'

import { Controller, useFormContext } from 'react-hook-form'

import { SettingsItem as SettingsItemType } from '@/src/features'
import { switchClassNames } from '@/src/shared/styles'
import { Switch } from '@nextui-org/react'

export interface SettingsItemProps extends SettingsItemType {
  keyName: string
}

export const SettingsItem = ({ name, description, keyName, isActive }: SettingsItemProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={keyName}
      control={control}
      render={({ field }) => (
        <Switch
          {...field}
          classNames={switchClassNames}
          defaultChecked={isActive}
          isSelected={field.value}
          onValueChange={field.onChange}
        >
          <div className='flex flex-col gap-1'>
            <p className='text-sm'>{name}</p>
            <p className='text-tiny text-default-400'>{description}</p>
          </div>
        </Switch>
      )}
    />
  )
}
