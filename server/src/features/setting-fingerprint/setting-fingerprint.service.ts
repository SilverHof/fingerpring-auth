import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/prisma/prisma.service'

import { UpdateSettingsFingerprintDto } from './dto/setting-fingerprint.dto'

@Injectable()
export class SettingsFingerprintService {
	constructor(private prisma: PrismaService) {}

	async getSettings() {
		return this.prisma.settingsFingerprint.findUnique({
			where: { id: 'global-settings' }
		})
	}

	async updateSettings(data: UpdateSettingsFingerprintDto) {
		return this.prisma.settingsFingerprint.update({
			where: { id: 'global-settings' },
			data: data
		})
	}
}
