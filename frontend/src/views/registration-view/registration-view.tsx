'use client'

import { Controller } from 'react-hook-form'

import { registrationSchema, TFA_ENUM, TFA_ITEMS } from '@/src/features'
import { TwoFactorAuthentication } from '@/src/widgets'
import { Button, Divider, Input, Link } from '@nextui-org/react'

import { useFormInitializer } from '@/src/shared/libraries'

export const RegistrationView = () => {
  const { Form, setValue, control } = useFormInitializer({
    baseSchema: registrationSchema,
    hookParams: {
      defaultValues: {
        method2FA: TFA_ENUM.OTP,
      },
    },
  })

  return (
    <div className='min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#202124] to-[#1A1B1E]'>
      <div
        className='absolute inset-0 w-full h-full pointer-events-none'
        style={{
          backgroundSize: '40px 40px',
          backgroundImage: `
            linear-gradient(to right, rgba(50, 50, 50, 0.2) 0.5px, transparent 1px),
            linear-gradient(to bottom, rgba(50, 50, 50, 0.2) 0.5px, transparent 1px)
          `,
        }}
      />

      <Form className='bg-gradient-to-b from-[#232429] to-[#1B1B1F] p-10 rounded-2xl w-full max-w-md z-10 border border-[#2A2A31] shadow-xl relative'>
        <h1 className='text-2xl font-bold text-center text-[#E2E8F0] mb-6'>Регистрация</h1>

        <div className='space-y-6'>
          <Controller
            name='login'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                fullWidth
                isClearable
                isInvalid={!!error?.message}
                errorMessage={error?.message}
                label='Логин'
                placeholder='Введите ваш логин'
                onClear={() => setValue('login', '')}
                variant='bordered'
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
          <Controller
            name='password'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                fullWidth
                isClearable
                label='Пароль'
                placeholder='Введите ваш пароль'
                variant='bordered'
                type='password'
                isInvalid={!!error?.message}
                errorMessage={error?.message}
                onClear={() => setValue('password', '')}
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
          <Controller
            name='repeatPassword'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                fullWidth
                isClearable
                label='Повторите пароль'
                placeholder='Введите ваш пароль повторно'
                type='password'
                isInvalid={!!error?.message}
                errorMessage={error?.message}
                onClear={() => setValue('repeatPassword', '')}
                variant='bordered'
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

          <Divider />
          <Controller
            name='method2FA'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TwoFactorAuthentication
                TFAItems={TFA_ITEMS}
                value={field.value}
                onValueChange={field.onChange}
                isInvalid={!!error?.message}
                errorMessage={error?.message}
              />
            )}
          />
          <Divider />
          <Button
            type='submit'
            className='w-full bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] hover:opacity-90 text-white shadow-md shadow-[#2563EB]/50'
          >
            Зарегистрироваться
          </Button>
        </div>

        <div className='mt-6 flex items-center justify-center text-sm gap-2'>
          <span className='text-[#94A3B8]'>Есть аккаунт?</span>
          <Link href='/authorization' className='text-[#60A5FA] hover:text-[#3B82F6] underline'>
            Войти
          </Link>
        </div>
      </Form>
    </div>
  )
}
