import { Module } from '@nestjs/common'

import { UserVerifyTokenService } from './user-verify-token.service'

@Module({
	providers: [UserVerifyTokenService],
	exports: [UserVerifyTokenService] // Экспортируем для использования в других модулях
})
export class UserVerifyTokenModule {}
