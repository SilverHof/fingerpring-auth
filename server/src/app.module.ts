import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { UserModule } from './entities/user/user.module'
import { AuthModule } from './features/auth/auth.module'
import { ConfirmationModule } from './features/confirmation/confirmation.module'
import { EmailModule } from './features/email/email.module'
import { SettingsFingerprintModule } from './features/setting-fingerprint/setting-fingerprint.module'
import { PrismaModule } from './prisma/prisma.module'
import { IS_DEV_ENV } from './shared/utils/is-dev.util'

@Module({
	imports: [
		ConfigModule.forRoot({
			ignoreEnvFile: !IS_DEV_ENV,
			isGlobal: true
		}),
		PrismaModule,
		AuthModule,
		UserModule,
		EmailModule,
		ConfirmationModule,
		SettingsFingerprintModule
	]
})
export class AppModule {}
