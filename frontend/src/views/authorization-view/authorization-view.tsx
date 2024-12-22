'use client'

import { Controller } from 'react-hook-form'

import { useAuthorization } from '@/src/features'
import { Button, Checkbox, Input, Link } from '@nextui-org/react'

import { authorizationSchema } from '@/src/features/authorization/model/_validation'

import { useFormInitializer } from '@/src/shared/libraries'

export const AuthorizationView = () => {
  const { Form } = useFormInitializer({
    baseSchema: authorizationSchema,
  })

  const { mutate: authorize } = useAuthorization()

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

      <Form
        onSubmit={(data) => authorize(data)}
        className='bg-gradient-to-b from-[#232429] to-[#1B1B1F] p-10 rounded-2xl w-full max-w-md z-10 border border-[#2A2A31] shadow-xl relative'
      >
        <h1 className='text-2xl font-bold text-center text-[#E2E8F0] mb-6'>Авторизация</h1>
        <div className='space-y-6'>
          <Controller
            name='login'
            render={({ field, fieldState: { error } }) => (
              <Input
                fullWidth
                isClearable
                label='Логин'
                placeholder='Введите ваш логин'
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
          <Controller
            name='password'
            render={({ field, fieldState: { error } }) => (
              <Input
                fullWidth
                isClearable
                type='password'
                label='Пароль'
                placeholder='Введите ваш пароль'
                isInvalid={!!error?.message}
                errorMessage={error?.message}
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

          <div className='flex justify-between'>
            <Controller
              name='rememberMe'
              render={({ field }) => (
                <Checkbox
                  name='remember'
                  color='primary'
                  className='text-sm text-[#94A3B8]'
                  isSelected={field.value}
                  onValueChange={field.onChange}
                >
                  Запомнить меня
                </Checkbox>
              )}
            />
            <span className='text-[#60A5FA] hover:text-[#3B82F6] cursor-pointer underline'>Забыли пароль?</span>
          </div>

          <Button
            type='submit'
            className='w-full bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] hover:opacity-90 text-white shadow-md shadow-[#2563EB]/50'
          >
            Войти
          </Button>
        </div>

        <div className='mt-6 flex items-center justify-center text-sm gap-2'>
          <span className='text-[#94A3B8]'>Нет аккаунта?</span>
          <Link href='/registration' className='text-[#60A5FA] hover:text-[#3B82F6] underline'>
            Регистрация
          </Link>
        </div>
      </Form>
    </div>
  )
}
