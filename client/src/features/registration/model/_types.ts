import { JSX, SVGProps } from 'react'

import { Fingerprint } from '../../fingerprint'

export interface Registration {
  email: string
  password: string
  passwordRepeat: string
  currentFingerprint: string
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
