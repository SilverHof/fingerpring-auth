export interface Confirmation {
  email: string
  token: string
}

export enum CONFIRMATION_MODE_ENUM {
  REGISTRATION = 'registration',
  AUTHORIZATION = 'authorization',
}
