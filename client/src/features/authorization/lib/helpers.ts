import { Role } from '../model'

export const isAdminRole = (role?: Role) => {
  return role === Role.ADMIN
}
