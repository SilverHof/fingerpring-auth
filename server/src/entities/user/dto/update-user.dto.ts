import {
	IsBoolean,
	IsEmail,
	IsNotEmpty,
	IsOptional,
	IsString
} from 'class-validator'

export class UpdateUserDto {
	@IsString({ message: 'Имя должно быть строкой.' })
	@IsNotEmpty({ message: 'Имя обязательно для заполнения.' })
	name: string

	@IsString({ message: 'Email должен быть строкой.' })
	@IsEmail({}, { message: 'Некорректный формат email.' })
	@IsNotEmpty({ message: 'Email обязателен для заполнения.' })
	email: string

	@IsBoolean({ message: 'isTwoFactorEnabled должно быть булевым значением.' })
	isTwoFactorEnabled: boolean

	@IsString({ message: 'firstFingerprint должно быть строкой.' })
	@IsOptional()
	firstFingerprint?: string
}
export class UpdateUserVerifiedDto {
	@IsString({ message: 'Email должен быть строкой.' })
	@IsEmail({}, { message: 'Некорректный формат email.' })
	@IsNotEmpty({ message: 'Email обязателен для заполнения.' })
	email: string
}

export class UpdateUserByEmailDto {
	@IsString({ message: 'Email должен быть строкой.' })
	@IsEmail({}, { message: 'Некорректный формат email.' })
	@IsNotEmpty({ message: 'Email обязателен для заполнения.' })
	email: string

	@IsString({ message: 'Email должен быть строкой.' })
	@IsEmail({}, { message: 'Некорректный формат email.' })
	@IsOptional()
	currentFingerprint?: string
}
