import { EmailIcon } from '@/src/shared/assets/svg/email-icon'
import { OTPIcon } from '@/src/shared/assets/svg/otp-icon'
import { SMSIcon } from '@/src/shared/assets/svg/sms-icon'

import { TFA_ENUM, TFAItem } from './_types'

export const REGISTRATION_TARGET = '/api/registration'

export const REGISTRATION_PRIMARY_KEY = [REGISTRATION_TARGET, 'registration-query']

export const TFA_ITEMS: TFAItem[] = [
  { value: TFA_ENUM.OTP, label: 'OTP', description: 'Одноразовый код для входа', icon: OTPIcon },
  { value: TFA_ENUM.EMAIL, label: 'Email', description: 'Код отправляется на вашу почту', icon: EmailIcon },
  { value: TFA_ENUM.SMS, label: 'SMS', description: 'Код отправляется на ваш телефон', icon: SMSIcon },
]
