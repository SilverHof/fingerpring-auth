import { Device } from './_types'

export const _getDeviceFingerprint = (): Device => {
  const getBatteryStatus = (): string => {
    if ('getBattery' in navigator) {
      // @ts-ignore
      navigator.getBattery().then((battery) => {
        return battery.level * 100
      })
    }
    return 'Unknown'
  }

  return {
    isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    maxTouchPoints: navigator.maxTouchPoints || 0,
    deviceMemory: (navigator as any).deviceMemory || 'Unknown',
    hardwareConcurrency: navigator.hardwareConcurrency || 1,
    isMobile: /Mobi|Android/i.test(navigator.userAgent),
    isDesktop: !/Mobi|Android|iPad|Tablet/i.test(navigator.userAgent),
    isTablet: /iPad|Tablet/i.test(navigator.userAgent),
    isVirtualMachine: /virtualbox|vbox/i.test(navigator.userAgent),
    isOnline: navigator.onLine,
    platform: navigator.platform,
    language: navigator.language || 'Unknown',
    screenReader: 'ontouchstart' in window || /screen reader/i.test(navigator.userAgent),
    cpu: 'Unknown CPU Info',
    isHeadless: /HeadlessChrome/i.test(navigator.userAgent),
    batteryStatus: getBatteryStatus(),
    vendor: navigator.vendor || 'Unknown',
  }
}
