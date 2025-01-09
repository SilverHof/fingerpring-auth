'use client'

import { Controller } from 'react-hook-form'
import { useAtomValue } from 'jotai'

import { Confirmation, confirmationSchema, registrationEmailAtom } from '@/src/features'
import { ConfirmationEmailIcon } from '@/src/shared/assets/svg'
import { Button, InputOtp } from '@nextui-org/react'

import { useFormInitializer } from '@/src/shared/libraries'
import { BaseFormWrapper } from '@/src/shared/ui'

import { useConfirmationController } from './use-confirmation-controller'

export const ConfirmationView = () => {
  const registrationEmail = useAtomValue(registrationEmailAtom)
  const { Form, control } = useFormInitializer({
    baseSchema: confirmationSchema,
  })

  const {
    states: { title, subtitle },
    requests: { confirmation, isPending },
  } = useConfirmationController()

  const onSubmitConfirm = (data: Confirmation) => {
    confirmation({
      token: data.token,
      email: registrationEmail as string,
    })
  }

  return (
    <>
      <BaseFormWrapper>
        <Form
          onSubmit={onSubmitConfirm}
          className='bg-gradient-to-b from-[#232429] to-[#1B1B1F] p-10 rounded-2xl w-full max-w-md z-10 border border-[#2A2A31] shadow-xl relative'
        >
          <h1 className='text-2xl font-bold text-center text-[#E2E8F0] mb-6'>{title}</h1>
          <p className='text-center text-[#94A3B8] text-base'>{subtitle}</p>
          <div className='flex items-center justify-center p-3'>
            <ConfirmationEmailIcon stroke='#60A5FA' color='#60A5FA' width={140} height={120} />
          </div>
          <div className='space-y-6'>
            <Controller
              name='token'
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputOtp
                  {...field}
                  length={6}
                  fullWidth
                  size='lg'
                  label='Код подтверждения'
                  placeholder='Введите ваш код подтверждения'
                  variant='bordered'
                  isInvalid={!!error?.message}
                  errorMessage={error?.message}
                  classNames={{ base: 'items-center' }}
                  onValueChange={field.onChange}
                />
              )}
            />
            <Button
              type='submit'
              isLoading={isPending}
              isDisabled={isPending}
              className='w-full bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] hover:opacity-90 text-white shadow-md shadow-[#2563EB]/50'
            >
              Оправить
            </Button>
            <div className='mt-6 flex items-center justify-center text-sm gap-2'>
              <span className='text-[#94A3B8]'>Не получили сообщение?</span>
              <span onClick={() => {}} className='text-[#60A5FA] hover:text-[#3B82F6] underline cursor-pointer'>
                Отправить повторно
              </span>
            </div>
          </div>
        </Form>
      </BaseFormWrapper>
    </>
  )
}
