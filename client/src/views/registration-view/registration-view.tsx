'use client'

import { useRouter } from 'next/navigation'
import { Controller } from 'react-hook-form'
import { useSetAtom } from 'jotai'

import { getFingerprint, Registration, registrationSchema, useRegistration, userEmailAtom } from '@/src/features'
import { inputClassNames } from '@/src/shared/styles'
import { Button, Input, Link } from '@nextui-org/react'

import { useFormInitializer } from '@/src/shared/libraries'
import { BaseFormWrapper, PasswordInput } from '@/src/shared/ui'

export const RegistrationView = () => {
  const router = useRouter()

  const setUserEmail = useSetAtom(userEmailAtom)

  const { Form, setValue, control, getValues } = useFormInitializer({
    baseSchema: registrationSchema,
  })

  const { mutate: registration, isPending: isPendingRegistration } = useRegistration({
    onSuccess: () => {
      router.push('/confirmation?mode=registration')
      setUserEmail(getValues('email'))
    },
  })

  const onRegistration = async (data: Registration) => {
    const fingerprint = JSON.stringify(await getFingerprint())
    registration({ ...data, currentFingerprint: fingerprint })
  }

  return (
    <BaseFormWrapper>
      <Form
        className='bg-gradient-to-b from-[#232429] to-[#1B1B1F] p-10 rounded-2xl w-full max-w-md z-10 border border-[#2A2A31] shadow-xl relative'
        onSubmit={onRegistration}
      >
        <h1 className='text-2xl font-bold text-center text-[#E2E8F0] mb-6'>Регистрация</h1>

        <div className='space-y-6'>
          <Controller
            name='email'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                fullWidth
                isClearable
                isInvalid={!!error?.message}
                errorMessage={error?.message}
                label='Почта'
                placeholder='Введите почту'
                onClear={() => setValue('email', '')}
                variant='bordered'
                classNames={inputClassNames}
                {...field}
              />
            )}
          />
          <PasswordInput name='password' />
          <PasswordInput name='passwordRepeat' />
          <Button
            type='submit'
            isLoading={isPendingRegistration}
            isDisabled={isPendingRegistration}
            className='w-full bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] hover:opacity-90 text-white shadow-md shadow-[#2563EB]/50'
          >
            Зарегистрироваться
          </Button>
        </div>

        <div className='mt-6 flex items-center justify-center text-sm gap-2'>
          <span className='text-[#94A3B8]'>Есть аккаунт?</span>
          <Link href='/authorization' className='text-[#60A5FA] hover:text-[#3B82F6] underline'>
            Авторизация
          </Link>
        </div>
      </Form>
    </BaseFormWrapper>
  )
}
