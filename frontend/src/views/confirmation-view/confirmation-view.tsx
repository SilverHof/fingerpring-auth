'use client'

import { Controller } from 'react-hook-form'

import { confirmationSchema, getFingerprint, useConfirmation } from '@/src/features'
import { ConfirmationEmailIcon } from '@/src/shared/assets/svg'
import { inputClassNames } from '@/src/shared/styles'
import { Button, InputOtp } from '@nextui-org/react'

import { useFormInitializer } from '@/src/shared/libraries'
import { BaseFormWrapper } from '@/src/shared/ui'

export const ConfirmationView = () => {
  const { Form, control, optimizeWatch } = useFormInitializer({
    baseSchema: confirmationSchema,
  })

  const { mutate: confirmation } = useConfirmation()

  console.log(
    'getFingerprint',
    getFingerprint().then((data) => console.log(data))
  )

  console.log('optimizeWatch', optimizeWatch('code'))

  return (
    <>
      <BaseFormWrapper>
        <Form
          onSubmit={confirmation}
          className='bg-gradient-to-b from-[#232429] to-[#1B1B1F] p-10 rounded-2xl w-full max-w-md z-10 border border-[#2A2A31] shadow-xl relative'
        >
          <h1 className='text-2xl font-bold text-center text-[#E2E8F0] mb-6'>Подтверждение</h1>
          <p className='text-center text-[#94A3B8] text-base'>
            Мы отправили вам на почту код подтверждения для завершения регистрации. Введите полученный код в формы
            ввода.
          </p>
          <div className='flex items-center justify-center p-3'>
            <ConfirmationEmailIcon stroke='#60A5FA' color='#60A5FA' width={140} height={120} />
          </div>
          <div className='space-y-6'>
            <Controller
              name='code'
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
