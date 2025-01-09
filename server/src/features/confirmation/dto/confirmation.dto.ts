import {
	IsEmail,
	IsNotEmpty,
	IsString,
} from 'class-validator'

export class ConfirmationDto {
	@IsString({ message: 'Email должен быть строкой.' })
	@IsEmail({}, { message: 'Некорректный формат email.' })
	@IsNotEmpty({ message: 'Email обязателен для заполнения.' })
	email: string

	@IsString({ message: 'Токен должен быть строкой.' })
	@IsNotEmpty({ message: 'Токен обязателен для заполнения.' })
	token: string
}
