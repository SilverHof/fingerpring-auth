import { Module } from '@nestjs/common'

import { PrismaModule } from '@/prisma/prisma.module'

import { SettingsFingerprintController } from './setting-fingerprint.controller'
import { SettingsFingerprintService } from './setting-fingerprint.service'

@Module({
	imports: [PrismaModule],
	controllers: [SettingsFingerprintController],
	providers: [SettingsFingerprintService]
})
export class SettingsFingerprintModule {}
