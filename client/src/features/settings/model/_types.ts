import { Fingerprint } from '../../fingerprint/model/_types'

// export interface Settings {
//   fingerprint: Fingerprint
// }

export interface SettingsFingerprint {
  id: 'global-settings'
  browserName: boolean
  browserMajorVersion: boolean
  browserFullVersion: boolean
  os: boolean
  osVersion: boolean
  device: boolean
  userAgent: boolean
  screenWidth: boolean
  screenHeight: boolean
  pixelRatio: boolean
  colorDepth: boolean
  orientation: boolean
  availWidth: boolean
  availHeight: boolean
  innerWidth: boolean
  innerHeight: boolean
  deviceXDPI: boolean
  deviceYDPI: boolean
  isLandscape: boolean
  isTouchDevice: boolean
  maxTouchPoints: boolean
  deviceMemory: boolean
  hardwareConcurrency: boolean
  isMobile: boolean
  isDesktop: boolean
  isTablet: boolean
  isVirtualMachine: boolean
  isOnline: boolean
  platform: boolean
  language: boolean
  screenReader: boolean
  cpu: boolean
  isHeadless: boolean
  batteryStatus: boolean
  vendor: boolean
  timezone: boolean
  utcOffset: boolean
  utcOffsetFormatted: boolean
  currentTime: boolean
  localeTime: boolean
  isDST: boolean
  localeDateFormat: boolean
  ip: boolean
  type: boolean
  continent_code: boolean
  continent_name: boolean
  country_code: boolean
  country_name: boolean
  region_code: boolean
  region_name: boolean
  city: boolean
  zip: boolean
  latitude: boolean
  longitude: boolean
  location: boolean
  connection_type: boolean
  ip_routing_type: boolean
  msa: boolean
  dma: boolean
  radius: boolean
  plugins: boolean
  localStorageEnabled: boolean
  sessionStorageEnabled: boolean
  indexedDBEnabled: boolean
  cookiesEnabled: boolean
  mediaDevices: boolean
  serviceWorkerEnabled: boolean
  languages: boolean
  doNotTrack: boolean
  pixelDepth: boolean
  canvas: boolean
  webgl: boolean
}
