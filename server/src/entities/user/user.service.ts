import { Injectable, NotFoundException } from '@nestjs/common'
import { hash } from 'argon2'

import { PrismaService } from '@/prisma/prisma.service'

import { UpdateUserDto, UpdateUserVerifiedDto } from './dto/update-user.dto'

@Injectable()
export class UserService {
	public constructor(private readonly prismaService: PrismaService) {}

	public async findById(id: string) {
		const user = await this.prismaService.user.findUnique({
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
		const user = await this.prismaService.user.findUnique({
			where: {
				email: email
			}
		})

		return user
	}

	public async create(email: string, password: string, fingerprint: string) {
		const user = await this.prismaService.user.create({
			data: {
				email: email,
				password: password ? await hash(password) : '',
				firstFingerprint: fingerprint
			}
		})

		return user
	}

	public async update(userId: string, dto: UpdateUserDto) {
		const user = await this.findById(userId)

		const updatedUser = await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				email: dto.email
			}
		})

		return updatedUser
	}

	public async verify(dto: UpdateUserVerifiedDto) {
		const user = await this.findByEmail(dto.email)

		const updatedUser = await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				isVerified: true
			}
		})

		return updatedUser
	}
}
