import { Module } from '@nestjs/common'

import { UserService } from '@/entities/user/user.service'

import { UserVerifyTokenService } from '../user-verify-token/user-verify-token.service'

import { ConfirmationController } from './confirmation.controller'
import { ConfirmationService } from './confirmation.service'
import { CryptoService } from '../crypto/crypto.service'

@Module({
	controllers: [ConfirmationController],
	providers: [ConfirmationService, UserService, UserVerifyTokenService, CryptoService]
})
export class ConfirmationModule {}
