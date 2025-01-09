import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { UserModule } from './entities/user/user.module'
import { AuthModule } from './features/auth/auth.module'
import { EmailModule } from './features/email/email.module'
import { PrismaModule } from './prisma/prisma.module'
import { IS_DEV_ENV } from './shared/utils/is-dev.util'
import { ConfirmationModule } from './features/confirmation/confirmation.module'

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
		ConfirmationModule
	]
})
export class AppModule {}
