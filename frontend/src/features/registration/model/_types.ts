import { JSX, SVGProps } from 'react'

export interface Registration {
  email: string
  password: string
  repeatPassword: string
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
