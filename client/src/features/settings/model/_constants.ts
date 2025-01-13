import { Fingerprint } from '../../fingerprint'

export const SETTINGS_REQUEST_TARGET = '/api/settings-fingerprint'
export const GET_SETTINGS_PRIMARY_KEY = [SETTINGS_REQUEST_TARGET, 'get-settings-collection']
export const UPDATE_SETTINGS_PRIMARY_KEY = [SETTINGS_REQUEST_TARGET, 'update-settings']

// Генерация настроек на основе интерфейса Fingerprint
type FingerprintKeys =
  | keyof Fingerprint
  | keyof Fingerprint['browser']
  | keyof Fingerprint['screen']
  | keyof Fingerprint['device']
  | keyof Fingerprint['timezone']
  | keyof Fingerprint['network']
  | keyof Fingerprint['application']

export interface Settings {
  title: string
  description: string
  items: Partial<Record<FingerprintKeys, SettingsItem>>
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
      browserName: {
        name: 'browserName',
        description: 'Название браузера',
        isActive: true,
      },
      browserMajorVersion: {
        name: 'browserMajorVersion',
        description: 'Основная версия браузера',
        isActive: true,
      },
      browserFullVersion: {
        name: 'browserFullVersion',
        description: 'Полная версия браузера',
        isActive: true,
      },
      os: {
        name: 'os',
        description: 'Операционная система',
        isActive: true,
      },
      osVersion: {
        name: 'osVersion',
        description: 'Версия операционной системы',
        isActive: true,
      },
      device: {
        name: 'device',
        description: 'Тип устройства',
        isActive: true,
      },
      userAgent: {
        name: 'userAgent',
        description: 'Строка User-Agent',
        isActive: true,
      },
    },
  },
  {
    title: 'Настройки устройства',
    description: 'Сбор информации об устройстве пользователя',
    items: {
      isTouchDevice: {
        name: 'isTouchDevice',
        description: 'Поддержка сенсорного экрана',
        isActive: true,
      },
      maxTouchPoints: {
        name: 'maxTouchPoints',
        description: 'Максимальное количество точек касания',
        isActive: true,
      },
      deviceMemory: {
        name: 'deviceMemory',
        description: 'Объём памяти устройства',
        isActive: true,
      },
      hardwareConcurrency: {
        name: 'hardwareConcurrency',
        description: 'Количество потоков процессора',
        isActive: true,
      },
      isMobile: {
        name: 'isMobile',
        description: 'Является ли устройство мобильным',
        isActive: true,
      },
      isDesktop: {
        name: 'isDesktop',
        description: 'Является ли устройство настольным',
        isActive: true,
      },
      isTablet: {
        name: 'isTablet',
        description: 'Является ли устройство планшетом',
        isActive: true,
      },
      isVirtualMachine: {
        name: 'isVirtualMachine',
        description: 'Является ли устройство виртуальной машиной',
        isActive: true,
      },
      isOnline: {
        name: 'isOnline',
        description: 'Состояние онлайн/оффлайн',
        isActive: true,
      },
      platform: {
        name: 'platform',
        description: 'Платформа устройства (например, Android, iOS, Windows)',
        isActive: true,
      },
      language: {
        name: 'language',
        description: 'Язык устройства',
        isActive: true,
      },
      screenReader: {
        name: 'screenReader',
        description: 'Используется ли экранный диктор',
        isActive: true,
      },
      cpu: {
        name: 'cpu',
        description: 'Информация о процессоре устройства',
        isActive: true,
      },
      isHeadless: {
        name: 'isHeadless',
        description: 'Является ли устройство без экрана (например, сервер или headless browser)',
        isActive: true,
      },
      batteryStatus: {
        name: 'batteryStatus',
        description: 'Статус батареи устройства (если доступно)',
        isActive: true,
      },
      vendor: {
        name: 'vendor',
        description: 'Производитель устройства',
        isActive: true,
      },
    },
  },
  {
    title: 'Настройки экрана',
    description: 'Сбор информации о параметрах экрана пользователя',
    items: {
      screenWidth: {
        name: 'screenWidth',
        description: 'Ширина экрана',
        isActive: true,
      },
      screenHeight: {
        name: 'screenHeight',
        description: 'Высота экрана',
        isActive: true,
      },
      pixelRatio: {
        name: 'pixelRatio',
        description: 'Соотношение пикселей экрана',
        isActive: true,
      },
      colorDepth: {
        name: 'colorDepth',
        description: 'Глубина цвета экрана',
        isActive: true,
      },
      orientation: {
        name: 'orientation',
        description: 'Ориентация экрана',
        isActive: true,
      },
      availWidth: {
        name: 'availWidth',
        description: 'Доступная ширина экрана (без панели задач и т.д.)',
        isActive: true,
      },
      availHeight: {
        name: 'availHeight',
        description: 'Доступная высота экрана (без панели задач и т.д.)',
        isActive: true,
      },
      innerWidth: {
        name: 'innerWidth',
        description: 'Внутренняя ширина окна браузера',
        isActive: true,
      },
      innerHeight: {
        name: 'innerHeight',
        description: 'Внутренняя высота окна браузера',
        isActive: true,
      },
      deviceXDPI: {
        name: 'deviceXDPI',
        description: 'Плотность пикселей устройства по оси X',
        isActive: true,
      },
      deviceYDPI: {
        name: 'deviceYDPI',
        description: 'Плотность пикселей устройства по оси Y',
        isActive: true,
      },
      isLandscape: {
        name: 'isLandscape',
        description: 'Ориентация экрана: альбомная или портретная',
        isActive: true,
      },
    },
  },
  {
    title: 'Настройки часового пояса',
    description: 'Сбор информации о временной зоне',
    items: {
      timezone: {
        name: 'timezone',
        description: 'Часовой пояс устройства',
        isActive: true,
      },
      utcOffset: {
        name: 'utcOffset',
        description: 'Смещение UTC',
        isActive: true,
      },
      utcOffsetFormatted: {
        name: 'utcOffsetFormatted',
        description: 'Сформатированное смещение UTC',
        isActive: true,
      },
      isDST: {
        name: 'isDST',
        description: 'Используется ли переход на летнее время',
        isActive: true,
      },
      localeDateFormat: {
        name: 'localeDateFormat',
        description: 'Локальный формат даты',
        isActive: true,
      },
    },
  },
  {
    title: 'Настройки сети',
    description: 'Сбор информации о сети пользователя',
    items: {
      ip: {
        name: 'ip',
        description: 'IP-адрес пользователя',
        isActive: true,
      },
      type: {
        name: 'type',
        description: 'Тип сети',
        isActive: true,
      },
      continent_code: {
        name: 'continent_code',
        description: 'Код континента',
        isActive: true,
      },
      continent_name: {
        name: 'continent_name',
        description: 'Название континента',
        isActive: true,
      },
      country_code: {
        name: 'country_code',
        description: 'Код страны',
        isActive: true,
      },
      country_name: {
        name: 'country_name',
        description: 'Название страны',
        isActive: true,
      },
      region_code: {
        name: 'region_code',
        description: 'Код региона',
        isActive: true,
      },
      region_name: {
        name: 'region_name',
        description: 'Название региона',
        isActive: true,
      },
      city: {
        name: 'city',
        description: 'Город пользователя',
        isActive: true,
      },
      zip: {
        name: 'zip',
        description: 'Почтовый индекс',
        isActive: true,
      },
      latitude: {
        name: 'latitude',
        description: 'Широта местоположения',
        isActive: true,
      },
      longitude: {
        name: 'longitude',
        description: 'Долгота местоположения',
        isActive: true,
      },
      location: {
        name: 'location',
        description: 'Информация о местоположении',
        isActive: true,
      },
      connection_type: {
        name: 'connection_type',
        description: 'Тип соединения',
        isActive: true,
      },
      ip_routing_type: {
        name: 'ip_routing_type',
        description: 'Тип маршрутизации IP',
        isActive: true,
      },
      msa: {
        name: 'msa',
        description: 'Код Metropolitan Statistical Area',
        isActive: true,
      },
      dma: {
        name: 'dma',
        description: 'Код Designated Market Area',
        isActive: true,
      },
      radius: {
        name: 'radius',
        description: 'Радиус покрытия сети',
        isActive: true,
      },
    },
  },
  {
    title: 'Настройки приложения',
    description: 'Сбор информации о приложении',
    items: {
      localStorageEnabled: {
        name: 'localStorageEnabled',
        description: 'Включён ли localStorage',
        isActive: true,
      },
      sessionStorageEnabled: {
        name: 'sessionStorageEnabled',
        description: 'Включён ли sessionStorage',
        isActive: true,
      },
      indexedDBEnabled: {
        name: 'indexedDBEnabled',
        description: 'Включён ли IndexedDB',
        isActive: true,
      },
      cookiesEnabled: {
        name: 'cookiesEnabled',
        description: 'Включены ли cookies',
        isActive: true,
      },
      serviceWorkerEnabled: {
        name: 'serviceWorkerEnabled',
        description: 'Поддерживаются ли service workers',
        isActive: true,
      },
      languages: {
        name: 'languages',
        description: 'Доступные языки пользователя',
        isActive: true,
      },
      doNotTrack: {
        name: 'doNotTrack',
        description: 'Флаг Do Not Track',
        isActive: true,
      },
    },
  },
  {
    title: 'Особые настройки',
    description: 'Сбор особой информации',
    items: {
      canvas: {
        name: 'canvas',
        description: 'Создание через Canvas API',
        isActive: true,
      },
      webgl: {
        name: 'webgl',
        description: 'Создание через Webgl API',
        isActive: true,
      },
    },
  },
]
