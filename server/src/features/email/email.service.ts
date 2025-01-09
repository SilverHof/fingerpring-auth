import { Injectable } from '@nestjs/common'
import { render } from '@react-email/components'
import { Resend } from 'resend'

import { SEND_MODE_ENUM, SEND_SUBJECT, SEND_TEMPLATES } from './_constants'

@Injectable()
export class EmailService {
	private resend: Resend
	private readonly from: string

	constructor() {
		this.resend = new Resend(process.env.RESEND_API_KEY)
		this.from = 'onboarding@resend.dev'
	}

	public async sendConfirmationRegistration(email: string, token: string) {
		try {
			const subject = SEND_SUBJECT[SEND_MODE_ENUM.REGISTRATION]
			const html = await render(
				SEND_TEMPLATES[SEND_MODE_ENUM.REGISTRATION]({ token })
			)

			const response = await this.resend.emails.send({
				from: this.from,
				to: email,
				subject,
				html
			})

			console.log('Email sent:', response)
		} catch (error) {
			console.error('Error sending email:', error)
		}
	}

	public async sendConfirmationAuthorization(email: string, token: string) {
		const subject = SEND_SUBJECT[SEND_MODE_ENUM.AUTHORIZATION]
		const html = await render(
			SEND_TEMPLATES[SEND_MODE_ENUM.AUTHORIZATION]({ token })
		)

		this.resend.emails.send({
			from: this.from,
			to: email,
			subject,
			html: html
		})
	}

	public async sendResetPassword(email: string, token: string) {
		const subject = SEND_SUBJECT[SEND_MODE_ENUM.RESET_PASSWORD]
		const html = await render(
			SEND_TEMPLATES[SEND_MODE_ENUM.RESET_PASSWORD]({ token })
		)

		this.resend.emails.send({
			from: this.from,
			to: email,
			subject,
			html: html
		})
	}

	public async sendRecoveryPassword(email: string, token: string) {
		const subject = SEND_SUBJECT[SEND_MODE_ENUM.RECOVERY_PASSWORD]
		const html = await render(
			SEND_TEMPLATES[SEND_MODE_ENUM.RECOVERY_PASSWORD]({ token })
		)

		this.resend.emails.send({
			from: this.from,
			to: email,
			subject,
			html: html
		})
	}
}
