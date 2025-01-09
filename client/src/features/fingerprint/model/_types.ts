export interface Fingerprint {
  browser: Browser
  screen: Screen
  device: Device
  timezone: Timezone
  network?: Network
  application: Application
  canvas: string
  webgl: string
}

export interface Browser {
  browserName: string
  browserMajorVersion: string
  browserFullVersion: string
  os: string
  osVersion: string
  device: string
  userAgent: string
}

export interface Screen {
  screenWidth: number
  screenHeight: number
  pixelRatio: number
  colorDepth: number
  orientation: string
  availWidth: number // Доступная ширина экрана (без панели задач и т.д.)
  availHeight: number // Доступная высота экрана
  innerWidth: number // Внутренняя ширина окна браузера
  innerHeight: number // Внутренняя высота окна браузера
  deviceXDPI: number // Плотность пикселей устройства по оси X (не всегда доступна)
  deviceYDPI: number // Плотность пикселей устройства по оси Y (не всегда доступна)
  isLandscape: boolean // Ориентация экрана: альбомная или портретная
}

export interface Device {
  isTouchDevice: boolean
  maxTouchPoints: number
  deviceMemory: number | 'Unknown'
  hardwareConcurrency: number
  isMobile: boolean
  isDesktop: boolean
  isTablet: boolean
  isVirtualMachine: boolean
  isOnline: boolean
  platform: string // Платформа (например, Android, iOS, Windows)
  language: string // Язык системы
  screenReader: boolean // Использует ли устройство экранный диктор (например, для слабовидящих)
  cpu: string // Информация о процессоре устройства
  isHeadless: boolean // Определение, является ли устройство без экрана (например, сервер или headless browser)
  batteryStatus: string // Статус батареи (если доступно)
  vendor: string // Производитель устройства
}

export interface Timezone {
  timezone: string
  utcOffset: number
  utcOffsetFormatted: string
  currentTime: string
  localeTime: string
  isDST: boolean
  localeDateFormat: string
}

export interface Network {
  ip: string
  type: string
  continent_code: string
  continent_name: string
  country_code: string
  country_name: string
  region_code: string
  region_name: string
  city: string
  zip: string | null
  latitude: number
  longitude: number
  location: {
    geoname_id: number
    capital: string
    calling_code: string
    country_flag: string
    country_flag_emoji: string
    country_flag_emoji_unicode: string
    is_eu: boolean
    languages: {
      code: string
      name: string
      native: string
    }[]
  }
  connection_type: string | null
  ip_routing_type: string | null
  msa: string | null
  dma: string | null
  radius: number | null
}

export interface WebGL {}
export interface Fonts {}
export interface AudioContext {}

export interface Application {
  plugins: string[] // Плагины больше не используем
  localStorageEnabled: boolean
  sessionStorageEnabled: boolean
  indexedDBEnabled: boolean
  cookiesEnabled: boolean
  mediaDevices: string[]
  serviceWorkerEnabled: boolean
  languages: readonly string[]
  doNotTrack: string | null
  colorDepth: number
  pixelDepth: number
  hardwareConcurrency: number
  maxTouchPoints: number
  localStorage?: Storage
  sessionStorage?: Storage
}
