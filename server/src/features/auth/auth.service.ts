import {
	ConflictException,
	Injectable,
	InternalServerErrorException,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { User, UserRole } from '@prisma/__generated__'
import { verify } from 'argon2'
import { Request, Response } from 'express'

import { UserService } from '@/entities/user/user.service'
import { PrismaService } from '@/prisma/prisma.service'
import { generateToken } from '@/shared/utils/generate-code'

import { EmailService } from '../email/email.service'
import { UserVerifyTokenService } from '../user-verify-token/user-verify-token.service'

import { AuthorizationDta } from './dto/authorization.dto'
import { RegistrationDto } from './dto/registration.dto'

@Injectable()
export class AuthService {
	public constructor(
		// private readonly prismaService: PrismaService,
		private readonly userService: UserService,
		private readonly configService: ConfigService,
		private readonly emailService: EmailService,
		private readonly userVerifyTokenService: UserVerifyTokenService
		// private readonly providerService: ProviderService,
	) {}

	public async registration(dto: RegistrationDto) {
		const isExists = await this.userService.findByEmail(dto.email)

		if (isExists) {
			throw new ConflictException(
				'Регистрация не удалась. Пользователь с таким email уже существует. Пожалуйста, используйте другой email или войдите в систему.'
			)
		}

		const registrationCode = generateToken()

		await this.userService.create(
			dto.email,
			dto.password,
			dto.firstFingerprint
		)

		await this.userVerifyTokenService.create(dto.email, registrationCode)

		await this.emailService.sendConfirmationRegistration(
			dto.email,
			registrationCode
		)

		return {
			message:
				'Вы успешно зарегистрировались. Пожалуйста, подтвердите ваш email. Сообщение было отправлено на ваш почтовый адрес.'
		}
	}

	public async authorization(req: Request, dto: AuthorizationDta) {
		const user = await this.userService.findByEmail(dto.email)

		if (!user || !user.password) {
			throw new NotFoundException(
				'Пользователь не найден. Пожалуйста, проверьте введенные данные'
			)
		}

		const isValidPassword = await verify(user.password, dto.password)

		if (!isValidPassword) {
			throw new UnauthorizedException(
				'Неверный пароль. Пожалуйста, попробуйте еще раз или восстановите пароль, если забыли его.'
			)
		}

		// return this.saveSession(req, user)

		return {
			message: 'Авторизация прошла успешно.',
			role: user.role
		}
	}

	public async logout(req: Request, res: Response): Promise<void> {
		return new Promise((resolve, reject) => {
			req.session.destroy(err => {
				if (err) {
					return reject(
						new InternalServerErrorException(
							'Не удалось завершить сессию. Возможно, возникла проблема с сервером или сессия уже была завершена.'
						)
					)
				}
				res.clearCookie(
					this.configService.getOrThrow<string>('SESSION_NAME')
				)
				resolve()
			})
		})
	}

	public async saveSession(req: Request, user: User) {
		return new Promise((resolve, reject) => {
			req.session.userId = user.id

			req.session.save(err => {
				if (err) {
					return reject(
						new InternalServerErrorException(
							'Не удалось сохранить сессию. Проверьте, правильно ли настроены параметры сессии.'
						)
					)
				}

				resolve({
					user
				})
			})
		})
	}
}
