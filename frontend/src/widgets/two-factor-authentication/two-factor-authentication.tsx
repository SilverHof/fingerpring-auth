'use client'

import { TFAItem } from '@/src/features'
import { Radio, RadioGroup, RadioGroupProps } from '@nextui-org/react'

export interface TwoFactorAuthenticationProps extends RadioGroupProps {
  TFAItems: TFAItem[]
}

export const TwoFactorAuthentication = ({ value, onValueChange, TFAItems }: TwoFactorAuthenticationProps) => {
  return (
    <RadioGroup
      orientation='vertical'
      className='flex flex-col gap-3'
      label='Выберите метод 2FA'
      color='primary'
      value={value}
      onValueChange={onValueChange}
    >
      {TFAItems.map(({ label, description, value, icon: Icon }, index) => {
        return (
          <Radio
            key={index}
            value={value}
            className='w-full border border-[#2A2A31] rounded-[10px]'
            classNames={{
              base: 'max-w-full inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between flex-row-reverse',
            }}
          >
            <div className='flex align-center gap-3'>
              {Icon && <Icon width={20} height={20} stroke='#3B82F6' className='self-center' />}
              <div className='flex flex-col justify-center '>
                <span className='text-white text-base font-bold'>{label}</span>
                <span className='text-[#A3A3A3] text-sm'>{description}</span>
              </div>
            </div>
          </Radio>
        )
      })}
    </RadioGroup>
  )
}
