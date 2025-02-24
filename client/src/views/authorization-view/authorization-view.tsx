'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { useAtom, useSetAtom } from 'jotai'

import {
  Authorization,
  authorizationSchema,
  CONFIRMATION_URLS,
  getFingerprint,
  isAdminAtom,
  isAdminRole,
  Role,
  useAuthorization,
  userEmailAtom,
} from '@/src/features'
import { SettingsIcon } from '@/src/shared/assets/svg'
import { inputClassNames } from '@/src/shared/styles'
import { SettingsForm } from '@/src/widgets'
import { Button, Checkbox, Input, Link } from '@nextui-org/react'

import { rememberMeAtom } from '@/src/features/authorization/model/_store'

import { useFormInitializer } from '@/src/shared/libraries'
import { BaseFormWrapper, PasswordInput } from '@/src/shared/ui'

export const AuthorizationView = () => {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const [rememberMe, setRememberMe] = useAtom(rememberMeAtom)
  const [isAdmin, setIsAdmin] = useAtom(isAdminAtom)
  const setUserEmail = useSetAtom(userEmailAtom)

  const { Form, control, setValue, getValues } = useFormInitializer({
    baseSchema: authorizationSchema,
  })

  const { mutate: authorize, isPending: isPendingAuthorization } = useAuthorization({
    onSuccess: (data) => {
      if (isAdminRole(data.role)) {
        setIsAdmin(true)
        return
      }
    },
    onError: (error) => {
      if (error.response?.status === 403) {
        router.push(CONFIRMATION_URLS.AUTHORIZATION)
      }
    },
  })

  const onAuthorization = async (data: Authorization) => {
    setUserEmail(getValues('email'))
    const fingerprint = JSON.stringify(await getFingerprint())
    authorize({ ...data, currentFingerprint: fingerprint })
  }

  getFingerprint().then((data) => {
    console.log('data', data)
  })

  return (
    <>
      <BaseFormWrapper>
        <Form
          onSubmit={onAuthorization}
          className='bg-gradient-to-b from-[#232429] to-[#1B1B1F] p-10 rounded-2xl w-full max-w-md z-10 border border-[#2A2A31] shadow-xl relative'
        >
          <h1 className='text-2xl font-bold text-center text-[#E2E8F0] mb-6'>Авторизация</h1>
          <div className='space-y-6'>
            <Controller
              name='email'
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Input
                  fullWidth
                  isClearable
                  label='Email'
                  placeholder='Введите ваш email'
                  variant='bordered'
                  isInvalid={!!error?.message}
                  errorMessage={error?.message}
                  onClear={() => setValue('email', '')}
                  classNames={inputClassNames}
                  {...field}
                />
              )}
            />
            <PasswordInput name='password' />
            <div className='flex justify-between'>
              <Controller
                name='rememberMe'
                render={({ field }) => (
                  <Checkbox
                    name='remember'
                    color='primary'
                    className='text-sm text-[#94A3B8]'
                    isSelected={field.value || rememberMe}
                    onValueChange={(isSelected) => {
                      field.onChange(isSelected)
                      setRememberMe(isSelected)
                    }}
                  >
                    Запомнить меня
                  </Checkbox>
                )}
              />
              <Link href='/recovery' className='text-[#60A5FA] hover:text-[#3B82F6] underline'>
                Забыли пароль?
              </Link>
            </div>
            <Button
              type='submit'
              isLoading={isPendingAuthorization}
              isDisabled={isPendingAuthorization}
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
      </BaseFormWrapper>
      <Button
        isIconOnly
        onPress={() => setIsOpen(true)}
        className='absolute top-8 right-8 rounded-full bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] hover:opacity-90 text-white shadow-md shadow-[#2563EB]/50'
      >
        <SettingsIcon width={24} height={24} />
      </Button>
      <SettingsForm isOpen={isOpen} setIsOpen={setIsOpen} />
      {isAdmin && (
        <>
          <Button
            isIconOnly
            onPress={() => setIsOpen(true)}
            className='absolute top-8 right-8 rounded-full bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] hover:opacity-90 text-white shadow-md shadow-[#2563EB]/50'
          >
            <SettingsIcon width={24} height={24} />
          </Button>
          <SettingsForm isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
      )}
    </>
  )
}
