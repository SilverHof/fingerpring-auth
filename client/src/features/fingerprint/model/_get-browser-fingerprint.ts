import { UAParser } from 'ua-parser-js'

import { Browser } from './_types'

export const _getBrowserFingerprint = (): Browser => {
  const userAgent = navigator.userAgent

  // Создаем экземпляр UAParser
  const parser = new UAParser(userAgent)

  // Получаем данные о браузере
  const browser = parser.getBrowser()
  const browserName = browser.name || 'Unknown'
  const browserFullVersion = browser.version || 'Unknown'
  const browserMajorVersion = browserFullVersion.split('.')[0]

  // Получаем данные об операционной системе
  const os = parser.getOS()
  const osName = os.name || 'Unknown'
  const osVersion = os.version || 'Unknown'

  // Получаем данные об устройстве
  const device = parser.getDevice()
  const deviceType = device.type || 'Unknown'

  const browserFingerprint = {
    browserName,
    browserMajorVersion,
    browserFullVersion,
    os: osName,
    osVersion,
    device: deviceType,
    userAgent,
  }

  console.log('browserFingerprint', browserFingerprint)

  return {
    browserName,
    browserMajorVersion,
    browserFullVersion,
    os: osName,
    osVersion,
    device: deviceType,
    userAgent,
  }
}
