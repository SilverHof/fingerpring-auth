import { Type } from 'class-transformer'
import {
	IsArray,
	IsBoolean,
	IsNumber,
	IsObject,
	IsOptional,
	IsString,
	ValidateNested
} from 'class-validator'

class BrowserDto {
	@IsString()
	browserName: string

	@IsString()
	browserMajorVersion: string

	@IsString()
	browserFullVersion: string

	@IsString()
	os: string

	@IsString()
	osVersion: string

	@IsString()
	device: string

	@IsString()
	userAgent: string
}

class ScreenDto {
	@IsNumber()
	screenWidth: number

	@IsNumber()
	screenHeight: number

	@IsNumber()
	pixelRatio: number

	@IsNumber()
	colorDepth: number

	@IsString()
	orientation: string

	@IsNumber()
	availWidth: number

	@IsNumber()
	availHeight: number

	@IsNumber()
	innerWidth: number

	@IsNumber()
	innerHeight: number

	@IsNumber()
	deviceXDPI: number

	@IsNumber()
	deviceYDPI: number

	@IsBoolean()
	isLandscape: boolean
}

class DeviceDto {
	@IsBoolean()
	isTouchDevice: boolean

	@IsNumber()
	maxTouchPoints: number

	@IsString()
	deviceMemory: string

	@IsNumber()
	hardwareConcurrency: number

	@IsBoolean()
	isMobile: boolean

	@IsBoolean()
	isDesktop: boolean

	@IsBoolean()
	isTablet: boolean

	@IsBoolean()
	isVirtualMachine: boolean

	@IsBoolean()
	isOnline: boolean

	@IsString()
	platform: string

	@IsString()
	language: string

	@IsBoolean()
	screenReader: boolean

	@IsString()
	cpu: string

	@IsBoolean()
	isHeadless: boolean

	@IsString()
	batteryStatus: string

	@IsString()
	vendor: string
}

class TimezoneDto {
	@IsString()
	timezone: string

	@IsNumber()
	utcOffset: number

	@IsString()
	utcOffsetFormatted: string

	@IsString()
	currentTime: string

	@IsString()
	localeTime: string

	@IsBoolean()
	isDST: boolean

	@IsString()
	localeDateFormat: string
}

class NetworkDto {
	@IsString()
	ip: string

	@IsString()
	type: string

	@IsString()
	continent_code: string

	@IsString()
	continent_name: string

	@IsString()
	country_code: string

	@IsString()
	country_name: string

	@IsString()
	region_code: string

	@IsString()
	region_name: string

	@IsString()
	city: string

	@IsOptional()
	@IsString()
	zip: string | null

	@IsNumber()
	latitude: number

	@IsNumber()
	longitude: number

	@IsOptional()
	location: {
		geoname_id: number
		capital: string
		calling_code: string
		country_flag: string
		country_flag_emoji: string
		country_flag_emoji_unicode: string
		is_eu: boolean
		languages: { code: string; name: string; native: string }[]
	}

	@IsOptional()
	@IsString()
	connection_type: string | null

	@IsOptional()
	@IsString()
	ip_routing_type: string | null

	@IsOptional()
	@IsString()
	msa: string | null

	@IsOptional()
	@IsString()
	dma: string | null

	@IsOptional()
	@IsNumber()
	radius: number | null
}

class ApplicationDto {
	@IsArray()
	@IsString({ each: true })
	plugins: string[]

	@IsBoolean()
	localStorageEnabled: boolean

	@IsBoolean()
	sessionStorageEnabled: boolean

	@IsBoolean()
	indexedDBEnabled: boolean

	@IsBoolean()
	cookiesEnabled: boolean

	@IsArray()
	@IsString({ each: true })
	mediaDevices: string[]

	@IsBoolean()
	serviceWorkerEnabled: boolean

	@IsArray()
	@IsString({ each: true })
	languages: string[]

	@IsOptional()
	@IsString()
	doNotTrack: string | null

	@IsNumber()
	colorDepth: number

	@IsNumber()
	pixelDepth: number

	@IsNumber()
	hardwareConcurrency: number

	@IsNumber()
	maxTouchPoints: number

	@IsOptional()
	@IsObject()
	localStorage?: Storage

	@IsOptional()
	@IsObject()
	sessionStorage?: Storage
}

export class FingerprintDto {
	@ValidateNested()
	@Type(() => BrowserDto)
	browser: BrowserDto

	@ValidateNested()
	@Type(() => ScreenDto)
	screen: ScreenDto

	@ValidateNested()
	@Type(() => DeviceDto)
	device: DeviceDto

	@ValidateNested()
	@Type(() => TimezoneDto)
	timezone: TimezoneDto

	@ValidateNested()
	@IsOptional()
	@Type(() => NetworkDto)
	network?: NetworkDto

	@ValidateNested()
	@Type(() => ApplicationDto)
	application: ApplicationDto

	@IsString()
	canvas: string
}
