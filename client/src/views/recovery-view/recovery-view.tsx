'use client'

import { Controller } from 'react-hook-form'

import { Button, Input, Link } from '@nextui-org/react'

import { recoverySchema, useRecovery } from '@/src/features/recovery'

import { useFormInitializer } from '@/src/shared/libraries'
import { BaseFormWrapper } from '@/src/shared/ui'

export const RecoveryView = () => {
  const { Form, control } = useFormInitializer({
    baseSchema: recoverySchema,
  })

  const { mutate: recovery } = useRecovery()

  return (
    <BaseFormWrapper>
      <Form
        onSubmit={recovery}
        className='bg-gradient-to-b from-[#232429] to-[#1B1B1F] p-10 rounded-2xl w-full max-w-md z-10 border border-[#2A2A31] shadow-xl relative'
      >
        <h1 className='text-2xl font-bold text-center text-[#E2E8F0] mb-6'>Восстановление пароля</h1>
        <div className='space-y-6'>
          <Controller
            name='email'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                fullWidth
                isClearable
                label='Введите email'
                placeholder='Введите вашу email'
                variant='bordered'
                isInvalid={!!error?.message}
                errorMessage={error?.message}
                classNames={{
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
                }}
                {...field}
              />
            )}
          />
          <Button
            type='submit'
            className='w-full bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] hover:opacity-90 text-white shadow-md shadow-[#2563EB]/50'
          >
            Отправить код
          </Button>
          <div className='mt-6 flex items-center justify-center text-sm gap-2'>
            <span className='text-[#94A3B8]'>Вспомнили пароль?</span>
            <Link href='/authorization' className='text-[#60A5FA] hover:text-[#3B82F6] underline'>
              Авторизация
            </Link>
          </div>
        </div>
      </Form>
    </BaseFormWrapper>
  )
}
