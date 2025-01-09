import { SettingsItem as SettingsItemProps } from '@/src/features'
import { Divider } from '@nextui-org/react'

import { SettingsItem } from '../settings-item'

export interface SettingsSectionProps {
  title: string
  description?: string
  settingsItems: Record<string, SettingsItemProps>
  onChange?: (selected: boolean) => void
}

export const SettingsSection = ({ title, description, settingsItems }: SettingsSectionProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col gap-1'>
        <h2 className='text-lg'>{title}</h2>
        <span className='text-[#94A3B8] text-base'>{description}</span>
      </div>
      <div className='grid grid-cols-2 gap-2'>
        {Object.entries(settingsItems).map(([key, { name, description, isActive }]) => (
          <SettingsItem key={key} keyName={key} name={name} description={description} isActive={isActive} />
        ))}
      </div>
  </div>
  )
}
