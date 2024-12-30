export const SETTINGS_REQUEST_TARGET = '/settings'
export const GET_SETTINGS_PRIMARY_KEY = [SETTINGS_REQUEST_TARGET, 'get-settings-collection']
export const UPDATE_SETTINGS_PRIMARY_KEY = [SETTINGS_REQUEST_TARGET, 'update-settings']

export interface Settings {
  // browser: BrowserSettings
  // screen: Screen
  // device: Device
  // network: Network
  // timezone: Timezone
  // webGL: WebGL
  // canvas: Canvas
  // fonts: Fonts
  // audioContext: AudioContext
  // storage: Storage
}

export interface Settings {
  title: string
  description: string
  items: Record<string, SettingsItem>
}

export interface SettingsItem {
  name: string
  description: string
  isActive: boolean
}

export const SETTINGS: Settings[] = [
  {
    title: 'Настройки браузера',
    description: 'Сбор информации о браузере пользователя',
    items: {
      browserName: { name: 'Название браузера', description: 'Идентификатор браузера', isActive: true },
      browserMajorVersion: { name: 'Основная версия браузера', description: 'Крупная версия браузера', isActive: true },
      browserFullVersion: { name: 'Полная версия браузера', description: 'Полный номер версии', isActive: true },
      os: { name: 'Операционная система', description: 'Тип операционной системы', isActive: true },
      osVersion: { name: 'Версия ОС', description: 'Версия операционной системы', isActive: true },
      device: { name: 'Устройство', description: 'Тип устройства', isActive: true },
      userAgent: { name: 'User-Agent', description: 'Строка User-Agent', isActive: true },
    },
  },
  {
    title: 'Настройки браузера',
    description: 'Сбор информации о браузере пользователя',
    items: {
      browserName: { name: 'Название браузера', description: 'Идентификатор браузера', isActive: true },
      browserMajorVersion: { name: 'Основная версия браузера', description: 'Крупная версия браузера', isActive: true },
      browserFullVersion: { name: 'Полная версия браузера', description: 'Полный номер версии', isActive: true },
      os: { name: 'Операционная система', description: 'Тип операционной системы', isActive: true },
      osVersion: { name: 'Версия ОС', description: 'Версия операционной системы', isActive: true },
      device: { name: 'Устройство', description: 'Тип устройства', isActive: true },
      userAgent: { name: 'User-Agent', description: 'Строка User-Agent', isActive: true },
    },
  },
  {
    title: 'Настройки браузера',
    description: 'Сбор информации о браузере пользователя',
    items: {
      browserName: { name: 'Название браузера', description: 'Идентификатор браузера', isActive: true },
      browserMajorVersion: { name: 'Основная версия браузера', description: 'Крупная версия браузера', isActive: true },
      browserFullVersion: { name: 'Полная версия браузера', description: 'Полный номер версии', isActive: true },
      os: { name: 'Операционная система', description: 'Тип операционной системы', isActive: true },
      osVersion: { name: 'Версия ОС', description: 'Версия операционной системы', isActive: true },
      device: { name: 'Устройство', description: 'Тип устройства', isActive: true },
      userAgent: { name: 'User-Agent', description: 'Строка User-Agent', isActive: true },
    },
  },
  {
    title: 'Настройки браузера',
    description: 'Сбор информации о браузере пользователя',
    items: {
      browserName: { name: 'Название браузера', description: 'Идентификатор браузера', isActive: true },
      browserMajorVersion: { name: 'Основная версия браузера', description: 'Крупная версия браузера', isActive: true },
      browserFullVersion: { name: 'Полная версия браузера', description: 'Полный номер версии', isActive: true },
      os: { name: 'Операционная система', description: 'Тип операционной системы', isActive: true },
      osVersion: { name: 'Версия ОС', description: 'Версия операционной системы', isActive: true },
      device: { name: 'Устройство', description: 'Тип устройства', isActive: true },
      userAgent: { name: 'User-Agent', description: 'Строка User-Agent', isActive: true },
    },
  },
]
