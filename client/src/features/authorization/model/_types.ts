export interface Authorization {
  email: string
  password: string
  currentFingerprint: string
  rememberMe?: boolean
  role?: Role
}

export enum Role {
  REGULAR = 'REGULAR',
  ADMIN = 'ADMIN'
}
