import {
	Body,
	Controller,
	HttpCode,
	HttpStatus,
	Post,
	Req,
	Res
} from '@nestjs/common'
import { Request, Response } from 'express'

import { AuthService } from './auth.service'
import { AuthorizationDta } from './dto/authorization.dto'
import { RegistrationDto } from './dto/registration.dto'

@Controller('api')
export class AuthController {
	public constructor(private readonly authService: AuthService) {}

	// route для регистрации
	@Post('registration')
	@HttpCode(HttpStatus.OK)
	public async register(@Body() dto: RegistrationDto) {
		return this.authService.registration(dto)
	}

	// route для авторизации
	@Post('authorization')
	@HttpCode(HttpStatus.OK)
	public async login(@Req() req: Request, @Body() dto: AuthorizationDta) {
		return this.authService.authorization(req, dto)
	}

	// route для выхода из аккаунта
	@Post('logout')
	@HttpCode(HttpStatus.OK)
	public async logout(
		@Req() req: Request,
		@Res({ passthrough: true }) res: Response
	) {
		return this.authService.logout(req, res)
	}

	// @UseGuards(AuthProviderGuard)
	// @Get('/oauth/callback/:provider')
	// public async callback(
	// 	@Req() req: Request,
	// 	@Res({ passthrough: true }) res: Response,
	// 	@Query('code') code: string,
	// 	@Param('provider') provider: string
	// ) {
	// 	if (!code) {
	// 		throw new BadRequestException(
	// 			'Не был предоставлен код авторизации.'
	// 		)
	// 	}

	// 	return res.redirect(
	// 		`${this.configService.getOrThrow<string>('ALLOWED_ORIGIN')}/dashboard/settings`
	// 	)
	// }

	// @UseGuards(AuthProviderGuard)
	// @Get('/oauth/connect/:provider')
	// public async connect(@Param('provider') provider: string) {
	// 	const providerInstance = this.providerService.findByService(provider)

	// 	return {
	// 		url: providerInstance.getAuthUrl()
	// 	}
	// }
}
