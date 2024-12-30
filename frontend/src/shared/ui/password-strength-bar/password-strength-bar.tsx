'use client'

import { cn } from '@nextui-org/react'
import { zxcvbnOptions } from '@zxcvbn-ts/core'
import { dictionary } from '@zxcvbn-ts/language-common'

import { CancelIcon, CheckIcon } from '../../assets/svg'

export const PasswordStrengthBar = ({ password }: { password: string }) => {
  zxcvbnOptions.setOptions({ dictionary })
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  const isLongEnough = password.length >= 14

  const rules = [
    { label: 'Минимум 14 символов', valid: isLongEnough },
    { label: 'Хотя бы одна заглавная буква', valid: hasUpperCase },
    { label: 'Хотя бы одна строчная буква', valid: hasLowerCase },
    { label: 'Хотя бы одна цифра', valid: hasNumber },
    { label: 'Хотя бы один специальный символ', valid: hasSpecialChar },
  ]

  const fulfilledRules = rules.filter((rule) => rule.valid).length
  const totalRules = rules.length

  const progress = (fulfilledRules / totalRules) * 100

  const colors = ['bg-red-500', 'bg-yellow-500', 'bg-yellow-400', 'bg-green-400', 'bg-green-600']
  const colorIndex = Math.min(Math.floor(progress / 20), colors.length - 1)

  const strengthText = ['Очень слабый', 'Слабый', 'Средний', 'Хороший', 'Сильный']

  return (
    <div className='flex flex-col gap-1'>
      <div className='flex flex-col gap-2 w-full bg-gray-200 h-1 rounded'>
        <div className={`h-1 rounded ${colors[colorIndex]}`} style={{ width: `${progress}%` }} />
      </div>
      <p className='text-sm mt-1 text-gray-500 text-left'>{strengthText[colorIndex]}</p>
      <ul className='flex flex-col gap-1'>
        {rules.map((rule, index) => (
          <li key={index} className='flex items-center text-sm gap-2'>
            <div
              className={cn('flex justify-center items-center rounded-full w-[18px] h-[18px] bg-red-500', {
                'bg-green-500': rule.valid,
              })}
            >
              {rule.valid ? <CheckIcon width={14} height={14} /> : <CancelIcon width={14} height={14} />}
            </div>
            <span className=''>{rule.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
