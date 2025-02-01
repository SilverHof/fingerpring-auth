import { ConflictException, ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { verify } from 'argon2'

import { Fingerprint } from '@/@types/fingerprint'
import { UserService } from '@/entities/user/user.service'
import { generateToken } from '@/shared/utils/generate-code'

import { CryptoService } from '../crypto/crypto.service'
import { EmailService } from '../email/email.service'
import { SettingsFingerprintService } from '../setting-fingerprint/setting-fingerprint.service'
import { UserVerifyTokenService } from '../user-verify-token/user-verify-token.service'

import { AuthorizationDta } from './dto/authorization.dto'
import { RegistrationDto } from './dto/registration.dto'

@Injectable()
export class AuthService {
	public constructor(
		private readonly userService: UserService,
		private readonly configService: ConfigService,
		private readonly emailService: EmailService,
		private readonly cryptoService: CryptoService,
		private readonly userVerifyTokenService: UserVerifyTokenService,
		private readonly settingsFingerprintService: SettingsFingerprintService
	) {}

	public async registration(dto: RegistrationDto) {
		const isExists = await this.userService.findByEmail(dto.email)
		const registrationCode = generateToken()

		if (isExists) {
			throw new ConflictException(
				'Регистрация не удалась. Пользователь с таким email уже существует. Пожалуйста, используйте другой email или войдите в систему.'
			)
		}

		await this.userService.create(dto.email, dto.password, dto.currentFingerprint)

		await this.userVerifyTokenService.create(dto.email, registrationCode)

		await this.emailService.sendConfirmationRegistration(dto.email, registrationCode)

		return {
			message: 'Вы успешно зарегистрировались. Пожалуйста, подтвердите ваш email. Сообщение было отправлено на ваш почтовый адрес.'
		}
	}

	public async authorization(dto: AuthorizationDta) {
		const user = await this.userService.findByEmail(dto.email)

		const isNotValidPassword = !(await this.cryptoService.verifyPassword(user.password, dto.password))
		const isNotValidFingerprint = !(await this.validateFingerprints(dto))

		const authorizationCode = generateToken()

		if (!user || !user.password) {
			throw new NotFoundException('Пользователь не найден. Пожалуйста, проверьте введенные данные')
		}

		if (isNotValidPassword) {
			throw new UnauthorizedException('Неверный пароль. Пожалуйста, попробуйте еще раз или восстановите пароль, если забыли его.')
		}

		await this.userService.updateCurrentFingerprint({
			email: dto.email,
			currentFingerprint: dto.currentFingerprint
		})

		await this.userVerifyTokenService.update(dto.email, authorizationCode)

		if (isNotValidFingerprint) {
			await this.emailService.sendConfirmationAuthorization(dto.email, authorizationCode)
			throw new ForbiddenException('Для подтверждения авторизации подтвердите вход.')
		}

		return {
			message: 'Авторизация прошла успешно.',
			role: user.role
		}
	}

	private parseAndFilter(fingerprintStr: string, settings: Record<string, boolean | string | Date>) {
		// преобразуем строчку в объект
		console.log('fingerprintStr', fingerprintStr)
		const fingerprint = JSON.parse(fingerprintStr) as Fingerprint

		// трансформируем цифровой отпечаток под форму настроек
		const transformedFingerprint: Record<string, any> = {}
		for (const [key, value] of Object.entries(fingerprint)) {
			if (typeof value === 'object' && value !== null) {
				Object.assign(transformedFingerprint, value)
			} else {
				transformedFingerprint[key] = value
			}
		}

		// Фильтруем цифровой отпечаток по настройкам
		const filteredFingerprint: Record<string, any> = {}
		for (const [key, value] of Object.entries(transformedFingerprint)) {
			if (settings[key] === true) {
				filteredFingerprint[key] = value
			}
		}

		// возвращает отфильтрованный цифровой отпечаток в виде строки
		return JSON.stringify(filteredFingerprint)
	}

	private async validateFingerprints(dto: AuthorizationDta) {
		const user = await this.userService.findByEmail(dto.email)
		const settingsFingerprint = await this.settingsFingerprintService.getSettings()

		// Преобразуем отфильтрованные значения в строку
		const currentFingerprintFiltered = this.parseAndFilter(dto.currentFingerprint, settingsFingerprint)
		console.log('user.fingerprints', user.fingerprints)
		// Проверяем каждый сохраненный цифровой отпечаток с новым полученным
		const isEqualsFingerprints = user.fingerprints
			.map(encryptedFingerprint => {
				const decrypted = this.cryptoService.decrypt(this.cryptoService.decrypt(encryptedFingerprint))
				console.log('Decrypted Fingerprint:', decrypted)
				return decrypted
			})
			.some(decryptedFingerprint => {
				const settingsFingerprintFiltered = this.parseAndFilter(decryptedFingerprint, settingsFingerprint)

				return settingsFingerprintFiltered === currentFingerprintFiltered
			})

		return isEqualsFingerprints
	}
}
