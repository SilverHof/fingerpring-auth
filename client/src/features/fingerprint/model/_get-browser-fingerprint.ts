import { Browser } from './_types'

export const _getBrowserFingerprint = (): Browser => {
  const userAgent = navigator.userAgent

  // Определение браузера и его версии
  const browserName = getBrowserName(userAgent)
  const browserFullVersion = getBrowserFullVersion(userAgent)
  const browserMajorVersion = getBrowserMajorVersion(browserFullVersion)

  // Определение операционной системы
  const os = getOS(userAgent)
  const osVersion = getOSVersion(userAgent, os)

  // Определение устройства
  const device = getDevice(userAgent)

  return {
    browserName,
    browserMajorVersion,
    browserFullVersion,
    os,
    osVersion,
    device,
    userAgent,
  }
}

function getBrowserName(userAgent: string): string {
  const browserRegexes = [
    { name: 'Chrome', regex: /Chrome\/([0-9]+)\./ },
    { name: 'Firefox', regex: /Firefox\/([0-9]+)\./ },
    { name: 'Safari', regex: /Safari\/([0-9]+)\./ },
    { name: 'Edge', regex: /Edge\/([0-9]+)\./ },
    { name: 'Internet Explorer', regex: /MSIE ([0-9]+)\./ },
  ]

  for (const { name, regex } of browserRegexes) {
    if (regex.test(userAgent)) {
      return name
    }
  }

  return 'Unknown'
}

function getBrowserFullVersion(userAgent: string): string {
  const versionRegex = /(?:Chrome|Firefox|Safari|Edge|MSIE)[\/\s](\d+\.\d+)/
  const match = userAgent.match(versionRegex)
  return match ? match[1] : 'Unknown'
}

function getBrowserMajorVersion(fullVersion: string): string {
  return fullVersion.split('.')[0]
}

function getOS(userAgent: string): string {
  const osRegexes = [
    { name: 'Windows', regex: /Windows NT/ },
    { name: 'Mac OS', regex: /Mac OS X/ },
    { name: 'Linux', regex: /Linux/ },
    { name: 'Android', regex: /Android/ },
    { name: 'iOS', regex: /iPhone|iPad/ },
  ]

  for (const { name, regex } of osRegexes) {
    if (regex.test(userAgent)) {
      return name
    }
  }

  return 'Unknown'
}

function getOSVersion(userAgent: string, os: string): string {
  if (os === 'Windows') {
    const match = userAgent.match(/Windows NT (\d+\.\d+)/)
    return match ? match[1] : 'Unknown'
  }
  if (os === 'Mac OS') {
    const match = userAgent.match(/Mac OS X (\d+_\d+)/)
    return match ? match[1].replace('_', '.') : 'Unknown'
  }
  if (os === 'Android') {
    const match = userAgent.match(/Android (\d+\.\d+)/)
    return match ? match[1] : 'Unknown'
  }
  if (os === 'iOS') {
    const match = userAgent.match(/OS (\d+_\d+)_/)
    return match ? match[1].replace('_', '.') : 'Unknown'
  }

  return 'Unknown'
}

function getDevice(userAgent: string): string {
  const deviceRegexes = [
    { name: 'Mobile', regex: /Mobile/ },
    { name: 'Tablet', regex: /Tablet/ },
    { name: 'Desktop', regex: /Mozilla/ },
  ]

  for (const { name, regex } of deviceRegexes) {
    if (regex.test(userAgent)) {
      return name
    }
  }

  return 'Unknown'
}
