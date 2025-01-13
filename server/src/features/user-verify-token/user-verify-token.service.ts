import { Injectable, NotFoundException } from '@nestjs/common'
import { hash } from 'argon2'

import { PrismaService } from '@/prisma/prisma.service'

// import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UserVerifyTokenService {
	public constructor(private readonly prismaService: PrismaService) {}

	public async findById(id: string) {
		const user = await this.prismaService.userVerifyTokens.findUnique({
			where: {
				id: id
			}
		})

		if (!user) {
			throw new NotFoundException(
				'Пользователь не найден. Пожалуйста, проверьте введенные данные.'
			)
		}

		return user
	}

	public async findByEmail(email: string) {
		const user = await this.prismaService.userVerifyTokens.findUnique({
			where: {
				email: email
			}
		})

		return user
	}

	public async create(email: string, token: string) {
		const user = await this.prismaService.userVerifyTokens.create({
			data: {
				email: email,
				token: token
			}
		})

		return user
	}

	public async update(email: string, token: string) {
		const user = await this.findByEmail(email)

		const updatedUser = await this.prismaService.userVerifyTokens.update({
			where: {
				id: user.id
			},
			data: {
				token: token
			}
		})

		return updatedUser
	}

	public async deleteToken(email: string) {
		const user = await this.findByEmail(email)

		const updatedUser = await this.prismaService.userVerifyTokens.update({
			where: { email: email },
			data: { token: null }
		})

		return updatedUser
	}
}
