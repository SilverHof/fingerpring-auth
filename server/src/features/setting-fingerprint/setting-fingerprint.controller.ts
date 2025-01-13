import { Body, Controller, Get, Put } from '@nestjs/common'

import { SettingsFingerprintService } from './setting-fingerprint.service'

@Controller('api/settings-fingerprint')
export class SettingsFingerprintController {
	constructor(private settingsService: SettingsFingerprintService) {}

	@Get()
	async getSettings() {
		return this.settingsService.getSettings()
	}

	@Put()
	async updateSettings(@Body() data: Record<string, any>) {
		return this.settingsService.updateSettings(data)
	}
}
