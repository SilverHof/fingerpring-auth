import { JSX, SVGProps } from 'react'

export interface Registration {
  login: string
  password: string
  repeatPassword: string
  method2FA: TFA_ENUM
}

export enum TFA_ENUM {
  OTP = 'OTP',
  EMAIL = 'email',
  SMS = 'sms',
}

export interface TFAItem {
  label: string
  description: string
  value: TFA_ENUM
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element
}
