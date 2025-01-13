export interface Confirmation {
  email: string
  token: string
  currentFingerprint?: string
}

export enum CONFIRMATION_MODE_ENUM {
  REGISTRATION = 'registration',
  AUTHORIZATION = 'authorization',
  RECOVERY_PASSWORD = 'recovery_password',
  RESET_PASSWORD = 'reset_password',
}

export const enum CONFIRMATION_URLS {
  REGISTRATION = `/confirmation?mode=${CONFIRMATION_MODE_ENUM.REGISTRATION}`,
  AUTHORIZATION = `/confirmation?mode=${CONFIRMATION_MODE_ENUM.AUTHORIZATION}`,
  RECOVERY_PASSWORD = `/confirmation?mode=${CONFIRMATION_MODE_ENUM.RECOVERY_PASSWORD}`,
  RESET_PASSWORD = `/confirmation?mode=${CONFIRMATION_MODE_ENUM.RESET_PASSWORD}`,
}
