'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import { CONFIRMATION_MODE_ENUM, useConfirmation } from '@/src/features'

export const useConfirmationController = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const mode = searchParams.get('mode') as CONFIRMATION_MODE_ENUM

  const isRegistrationMode = mode === CONFIRMATION_MODE_ENUM.REGISTRATION
  const isAuthorizationMode = mode === CONFIRMATION_MODE_ENUM.AUTHORIZATION

  const { mutate: confirmation, ...restParams } = useConfirmation(mode, {
    onSuccess: () => {
      if (isRegistrationMode) router.push('/authorization')
      if (isAuthorizationMode) router.push('/authorization')
    },
  })

  const getTitle = () => {
    if (isRegistrationMode) {
      return 'Подтверждение регистрации'
    }
    if (isAuthorizationMode) {
      return 'Подтверждение входа'
    }
  }

  const getSubtitle = () => {
    if (isRegistrationMode)
      return 'Мы отправили вам на почту код подтверждения для завершения регистрации. Введите полученный код в формы ввод'
    if (isAuthorizationMode)
      return 'Мы отправили вам на почту код подтверждения для входа в аккаунт. Введите полученный код в формы ввод'
  }

  return {
    states: {
      title: getTitle(),
      subtitle: getSubtitle(),
    },
    requests: {
      confirmation,
      isPending: restParams.isPending,
    },
  }
}
