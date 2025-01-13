import { ConflictException, Injectable } from '@nestjs/common'

import { UserService } from '@/entities/user/user.service'

import { UserVerifyTokenService } from '../user-verify-token/user-verify-token.service'

import { ConfirmationDto } from './dto/confirmation.dto'

@Injectable()
export class ConfirmationService {
	public constructor(
		private readonly userService: UserService,
		private readonly userVerifyCodeService: UserVerifyTokenService
	) {}

	public async onEndConfirmation(email: string) {
		// удаление токена после любого действия
		await this.userVerifyCodeService.deleteToken(email)
	}

	public async registration({ email, token }: ConfirmationDto) {
		const isNotExists = !(await this.userService.findByEmail(email))
		const userVerifyCode =
			await this.userVerifyCodeService.findByEmail(email)

		if (isNotExists) {
			throw new ConflictException('Такого пользователя не существует')
		}

		if (userVerifyCode.token === token) {
			await this.userService.verify({ email: email })
		}

		await this.onEndConfirmation(email)

		return {
			message: 'Вы успешно подтвердили регистрацию'
		}
	}

	public async authorization({
		email,
		token,
		currentFingerprint
	}: ConfirmationDto) {
		const isNotExists = !(await this.userService.findByEmail(email))
		const userVerifyCode =
			await this.userVerifyCodeService.findByEmail(email)

		if (isNotExists) {
			throw new ConflictException('Такого пользователя не существует')
		}

		if (userVerifyCode.token === token) {
			await this.userService.updateFingerprints({
				email: email,
				currentFingerprint: currentFingerprint
			})
		}

		await this.onEndConfirmation(email)

		return {
			message: 'Вы успешно подтвердили регистрацию'
		}
	}
}
