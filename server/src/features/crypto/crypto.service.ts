import { Injectable } from '@nestjs/common'
import { hash, verify } from 'argon2'
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto'

@Injectable()
export class CryptoService {
	private readonly encryptionKey: Buffer
	private readonly algorithm = 'aes-256-cbc'

	public constructor() {
		const key = process.env.ENCRYPTION_KEY || 'default_encryption_key_32_bytes!'
		if (key.length !== 32) {
			throw new Error('ENCRYPTION_KEY must be exactly 32 characters long')
		}
		this.encryptionKey = Buffer.from(key)
	}

	async hashPassword(password: string) {
		return hash(password)
	}

	async verifyPassword(dbPassword: string, sentPassword: string) {
		return verify(dbPassword, sentPassword)
	}

	encrypt(data: string): string {
		const algorithm = this.algorithm
		const encryptionKey = this.encryptionKey

		const initializeVector = randomBytes(16)
		const cipher = createCipheriv(algorithm, encryptionKey, initializeVector)

		const encrypted = Buffer.concat([cipher.update(data, 'utf8'), cipher.final()])
		return `${initializeVector.toString('hex')}:${encrypted.toString('hex')}`
	}

	decrypt(encryptedData: string): string {
		const algorithm = this.algorithm
		const encryptionKey = this.encryptionKey

		const [initializeVectorHex, encryptedHex] = encryptedData.split(':')
		const initializeVector = Buffer.from(initializeVectorHex, 'hex')
		const encryptedText = Buffer.from(encryptedHex, 'hex')

		const decipher = createDecipheriv(algorithm, encryptionKey, initializeVector)
		const decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()])
		return decrypted.toString('utf8')
	}
}
