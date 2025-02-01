import { Module } from '@nestjs/common'

import { CryptoService } from '@/features/crypto/crypto.service'

import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
	controllers: [UserController],
	providers: [UserService, CryptoService]
})
export class UserModule {}
