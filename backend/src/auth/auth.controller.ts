import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registration')
  async register(@Body() dto: RegisterDto) {
    const user = await this.authService.registration(dto.email, dto.password);
    return { message: 'User registered successfully', user };
  }
}
