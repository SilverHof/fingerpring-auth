import { Injectable, NotFoundException } from '@nestjs/common'

import { CryptoService } from '@/features/crypto/crypto.service'
import { PrismaService } from '@/prisma/prisma.service'

import { UpdateUserByEmailDto, UpdateUserDto, UpdateUserVerifiedDto } from './dto/update-user.dto'

@Injectable()
export class UserService {
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly cryptoService: CryptoService
	) {}

	public async findById(id: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				id: id
			}
		})

		if (!user) {
			throw new NotFoundException('Пользователь не найден. Пожалуйста, проверьте введенные данные.')
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
				password: password ? await this.cryptoService.hashPassword(password) : '',
				currentFingerprint: this.cryptoService.encrypt(fingerprint)
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
				isVerified: true,
				fingerprints: [this.cryptoService.encrypt(user.currentFingerprint)]
			}
		})

		await this.deleteCurrentFingerprint({ email: dto.email })

		return updatedUser
	}

	public async updateCurrentFingerprint(dto: UpdateUserByEmailDto) {
		const user = await this.findByEmail(dto.email)

		const updatedUser = await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				currentFingerprint: dto.currentFingerprint
			}
		})

		return updatedUser
	}

	public async updateFingerprints(dto: UpdateUserByEmailDto) {
		const user = await this.findByEmail(dto.email)

		const updatedUser = await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				fingerprints: [...user.fingerprints, this.cryptoService.encrypt(user.currentFingerprint)]
			}
		})

		await this.deleteCurrentFingerprint({ email: dto.email })

		return updatedUser
	}

	public async deleteCurrentFingerprint(dto: UpdateUserByEmailDto) {
		const user = await this.findByEmail(dto.email)

		const updatedUser = await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				currentFingerprint: null
			}
		})

		return updatedUser
	}
}
