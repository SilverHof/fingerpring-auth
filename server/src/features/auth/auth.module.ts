import { forwardRef, Module } from '@nestjs/common'

import { UserService } from '@/entities/user/user.service'

import { CryptoService } from '../crypto/crypto.service'
import { EmailModule } from '../email/email.module'
import { SettingsFingerprintService } from '../setting-fingerprint/setting-fingerprint.service'
import { UserVerifyTokenModule } from '../user-verify-token/user-verify-token.module'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
	imports: [EmailModule, UserVerifyTokenModule],
	controllers: [AuthController],
	providers: [AuthService, UserService, SettingsFingerprintService, CryptoService],
	exports: [AuthService]
})
export class AuthModule {}
