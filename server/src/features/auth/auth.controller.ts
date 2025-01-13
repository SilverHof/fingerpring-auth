import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'

import { AuthService } from './auth.service'
import { AuthorizationDta } from './dto/authorization.dto'
import { RegistrationDto } from './dto/registration.dto'

@Controller('api')
export class AuthController {
	public constructor(private readonly authService: AuthService) {}

	@Post('registration')
	@HttpCode(HttpStatus.OK)
	public async register(@Body() dto: RegistrationDto) {
		return this.authService.registration(dto)
	}

	@Post('authorization')
	@HttpCode(HttpStatus.OK)
	public async login(@Body() dto: AuthorizationDta) {
		return this.authService.authorization(dto)
	}
}
