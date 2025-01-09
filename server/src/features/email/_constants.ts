import { ConfirmationAuthorizationTemplate } from './templates/confirmation-authorization.template'
import { ConfirmationRegistrationTemplate } from './templates/confirmation-registration.template'
import { RecoveryPasswordTemplate } from './templates/recovery-password.template'
import { ResetPasswordTemplate } from './templates/reset-password.template'

export enum SEND_MODE_ENUM {
	REGISTRATION = 'registration',
	AUTHORIZATION = 'authorization',
	RECOVERY_PASSWORD = 'recovery_password',
	RESET_PASSWORD = 'reset_password'
}

export const SEND_SUBJECT = {
	[SEND_MODE_ENUM.REGISTRATION]: 'Подтверждение регистрации',
	[SEND_MODE_ENUM.AUTHORIZATION]: 'Подтверждение входа в аккаунт',
	[SEND_MODE_ENUM.RECOVERY_PASSWORD]: 'Сброс пароля',
	[SEND_MODE_ENUM.RESET_PASSWORD]: 'Восстановление пароля'
}

export const SEND_TEMPLATES = {
	[SEND_MODE_ENUM.REGISTRATION]: ConfirmationRegistrationTemplate,
	[SEND_MODE_ENUM.AUTHORIZATION]: ConfirmationAuthorizationTemplate,
	[SEND_MODE_ENUM.RECOVERY_PASSWORD]: RecoveryPasswordTemplate,
	[SEND_MODE_ENUM.RESET_PASSWORD]: ResetPasswordTemplate
}
