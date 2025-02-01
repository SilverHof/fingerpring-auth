import { Injectable } from '@nestjs/common'
import { hash, verify } from 'argon2'
import { AES, enc } from 'crypto-js'

@Injectable()
export class CryptoService {
	private readonly encryptionKey: string

	public constructor() {
		// Преобразуем ключ в формат, подходящий для CryptoJS
		const key = 'default_encryption_key_32_bytes!'
		if (key.length !== 32) {
			throw new Error('ENCRYPTION_KEY must be exactly 32 characters long')
		}
		this.encryptionKey = key
	}

	async hashPassword(password: string) {
		return hash(password)
	}

	async verifyPassword(dbPassword: string, sentPassword: string) {
		return verify(dbPassword, sentPassword)
	}

	encrypt(data: string): string {
		// Используем CryptoJS для шифрования
		// Возвращаем строку в формате base64
		return AES.encrypt(data, this.encryptionKey).toString()
	}

	decrypt(encryptedData: string): string {
		// Дешифровка с помощью CryptoJS
		// Возвращаем расшифрованный текст
		return AES.decrypt(encryptedData, this.encryptionKey).toString(enc.Utf8)
	}
}
