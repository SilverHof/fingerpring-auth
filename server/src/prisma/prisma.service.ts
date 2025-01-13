import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/__generated__'

@Injectable()
export class PrismaService
	extends PrismaClient
	implements OnModuleInit, OnModuleDestroy
{
	// Подключение к базе данных при инициализации модуля
	public async onModuleInit(): Promise<void> {
		await this.$connect()
		await this.initializeGlobalSettings() // Вызов функции инициализации
	}

	// Отключение от базы данных при уничтожении модуля
	public async onModuleDestroy(): Promise<void> {
		await this.$disconnect()
	}

	// Функция для инициализации глобальных настроек
	private async initializeGlobalSettings(): Promise<void> {
		const defaultSettings = {
			id: 'global-settings',
			browserName: true,
			browserMajorVersion: true,
			browserFullVersion: true,
			os: true,
			osVersion: true,
			device: true,
			userAgent: true,
			screenWidth: true,
			screenHeight: true,
			pixelRatio: true,
			colorDepth: true,
			orientation: true,
			availWidth: true,
			availHeight: true,
			innerWidth: true,
			innerHeight: true,
			deviceXDPI: true,
			deviceYDPI: true,
			isLandscape: true,
			isTouchDevice: true,
			maxTouchPoints: true,
			deviceMemory: true,
			hardwareConcurrency: true,
			isMobile: true,
			isDesktop: true,
			isTablet: true,
			isVirtualMachine: true,
			isOnline: true,
			platform: true,
			language: true,
			screenReader: true,
			cpu: true,
			isHeadless: true,
			batteryStatus: true,
			vendor: true,
			timezone: true,
			utcOffset: true,
			utcOffsetFormatted: true,
			currentTime: true,
			localeTime: true,
			isDST: true,
			localeDateFormat: true,
			ip: true,
			type: true,
			continent_code: true,
			continent_name: true,
			country_code: true,
			country_name: true,
			region_code: true,
			region_name: true,
			city: true,
			zip: true,
			latitude: true,
			longitude: true,
			location: true,
			connection_type: true,
			ip_routing_type: true,
			msa: true,
			dma: true,
			radius: true,
			plugins: true,
			localStorageEnabled: true,
			sessionStorageEnabled: true,
			indexedDBEnabled: true,
			cookiesEnabled: true,
			mediaDevices: true,
			serviceWorkerEnabled: true,
			languages: true,
			doNotTrack: true,
			pixelDepth: true,
			canvas: true,
			webgl: true
		}

		// Проверяем, существует ли запись с фиксированным ID
		const existingSettings = await this.settingsFingerprint.findUnique({
			where: { id: 'global-settings' }
		})

		// Если записи нет, создаём
		if (!existingSettings) {
			await this.settingsFingerprint.create({
				data: defaultSettings
			})
			console.log('Глобальные настройки успешно созданы.')
		} else {
			console.log('Глобальные настройки уже существуют.')
		}
	}
}
