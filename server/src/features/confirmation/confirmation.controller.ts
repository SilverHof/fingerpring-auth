import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'

import { ConfirmationService } from './confirmation.service'
import { ConfirmationDto } from './dto/confirmation.dto'

@Controller('api/confirmation')
export class ConfirmationController {
	public constructor(
		private readonly confirmationService: ConfirmationService
	) {}

	// route для регистрации
	@Post('registration')
	@HttpCode(HttpStatus.OK)
	public async registration(@Body() dto: ConfirmationDto) {
		return this.confirmationService.registration(dto)
	}

	// route для регистрации
	@Post('authorization')
	@HttpCode(HttpStatus.OK)
	public async authorization(@Body() dto: ConfirmationDto) {
		return this.confirmationService.authorization(dto)
	}

	// // route для выхода из аккаунта
	// @Post('confirmation/password-recovery')
	// @HttpCode(HttpStatus.OK)
	// public async logout(
	// 	@Req() req: Request,
	// 	@Res({ passthrough: true }) res: Response
	// ) {
	// 	return this.authService.logout(req, res)
	// }

	// // route для выхода из аккаунта
	// @Post('confirmation/password-recovery')
	// @HttpCode(HttpStatus.OK)
	// public async logout(
	// 	@Req() req: Request,
	// 	@Res({ passthrough: true }) res: Response
	// ) {
	// 	return this.authService.logout(req, res)
	// }
}
