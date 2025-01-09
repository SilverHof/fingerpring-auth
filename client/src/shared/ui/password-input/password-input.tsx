'use client'

import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { Input } from '@nextui-org/react'

import { EyeCloseIcon, EyeOpenIcon } from '../../assets/svg'
import { inputClassNames } from '../../styles'
import { PasswordStrengthBar } from '../password-strength-bar'

export interface PasswordInputProps {
  name: 'password' | 'passwordRepeat'
}

export const PasswordInput = ({ name }: PasswordInputProps) => {
  const { control } = useFormContext()
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  const isPassword = name === 'password'
  const label = isPassword ? 'Пароль' : 'Повторите пароль'
  const placeholder = isPassword ? 'Введите ваш пароль' : 'Введите ваш пароль повторно'
  const type = isVisible ? 'text' : 'password'

  const EyeComponent = () => {
    const icons = {
      open: EyeOpenIcon,
      close: EyeCloseIcon,
    }
    const IconComponent = isVisible ? icons.open : icons.close
    return (
      <div onClick={toggleVisibility}>
        <IconComponent width={20} height={20} className='text-2xl text-default-400 pointer-events-none' />
      </div>
    )
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error, isDirty } }) => {
        const withPasswordStrengthBar = !isPassword && isDirty
        return (
          <div className='flex flex-col gap-4'>
            <Input
              fullWidth
              isClearable
              type={type}
              endContent={<EyeComponent />}
              label={label}
              placeholder={placeholder}
              isInvalid={!!error?.message}
              errorMessage={error?.message}
              variant='bordered'
              classNames={inputClassNames}
              {...field}
            />
            {withPasswordStrengthBar && <PasswordStrengthBar password={field.value || ''} />}
          </div>
        )
      }}
    />
  )
}
