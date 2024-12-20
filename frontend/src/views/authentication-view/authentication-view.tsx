'use client'

import { Button, Checkbox, Input, Link } from '@nextui-org/react'

import { authenticationSchema } from '@/src/features/authentication/model/_validation'

import { useFormInitializer } from '@/src/shared/libraries'

export const AuthenticationView = () => {
  const { Form } = useFormInitializer({
    baseSchema: authenticationSchema,
  })

  return (
    <div className='min-h-screen flex items-center justify-center relative bg-[#161618]'>
      {/* Фоновая сетка */}
      <div
        className='absolute inset-0 w-full h-full'
        style={{
          backgroundSize: '70px 70px',
          backgroundImage: `
               linear-gradient(to right, rgba(36, 35, 36, 0.5) 0.5px, transparent 1px),
               linear-gradient(to bottom, rgba(36, 35, 36, 0.5) 0.5px, transparent 1px)
             `,
        }}
      />

      {/* Карточка авторизации */}
      {/* Точки по углам */}

      <Form className='bg-[#161618] p-10 rounded-xl w-full max-w-md z-10 border border-[#242324] relative'>
        <div className='absolute top-4 left-4 w-1 h-1 rounded-full bg-white' />
        <div className='absolute top-4 right-4 w-1 h-1 rounded-full bg-white' />
        <div className='absolute bottom-4 left-4 w-1 h-1 rounded-full bg-white' />
        <div className='absolute bottom-4 right-4 w-1 h-1 rounded-full bg-white' />
        <h1 className='text-2xl font-bold text-center text-[#E2E8F0] mb-6'>Вход в систему</h1>

        <div className='space-y-4'>
          <Input
            fullWidth
            isClearable
            label='Логин'
            placeholder='Введите ваш логин'
            name='login'
            variant='bordered'
            classNames={{
              base: 'max-w-full',
              label: 'text-[#94A3B8]',
              input: ['text-[#E2E8F0]', 'placeholder:text-[#4A5568]'],
              inputWrapper: [
                'bg-[#242324]',
                'border-[#242324]',
                'focus-within:!border-[#60A5FA]',
                'focus-within:ring-2',
                'focus-within:ring-[#60A5FA]/20',
                'hover:border-[#2D3748]',
              ],
            }}
          />

          <Input
            fullWidth
            isClearable
            type='password'
            label='Пароль'
            placeholder='Введите ваш пароль'
            name='password'
            variant='bordered'
            classNames={{
              base: 'max-w-full',
              label: 'text-[#94A3B8]',
              input: ['text-[#E2E8F0]', 'placeholder:text-[#4A5568]'],
              inputWrapper: [
                'bg-[#242324]',
                'border-[#1a1c2e]',
                'focus-within:!border-[#60A5FA]',
                'focus-within:ring-2',
                'focus-within:ring-[#60A5FA]/20',
                'hover:border-[#2D3748]',
              ],
            }}
          />

          <Checkbox name='remember' color='primary' className='text-sm text-[#94A3B8]'>
            Запомнить меня
          </Checkbox>

          <Button type='submit' className='w-full bg-[#60A5FA] hover:bg-[#3B82F6] text-white'>
            Войти
          </Button>
        </div>

        <div className='mt-6 flex items-center justify-center text-sm gap-2'>
          <span className='text-[#94A3B8]'>Нет аккаунта?</span>
          <Link href='/registration' className='text-[#60A5FA] hover:text-[#3B82F6]'>
            Зарегистрироваться
          </Link>
        </div>
      </Form>
    </div>
  )
}
