import { Application } from './_types'

export const _getApplicationFingerprint = (): Application => {
  const plugins: string[] = []

  const localStorageEnabled = (() => {
    try {
      localStorage.setItem('test', 'test')
      localStorage.removeItem('test')
      return true
    } catch {
      return false
    }
  })()

  const sessionStorageEnabled = (() => {
    try {
      sessionStorage.setItem('test', 'test')
      sessionStorage.removeItem('test')
      return true
    } catch {
      return false
    }
  })()

  const indexedDBEnabled = (() => {
    try {
      return !!window.indexedDB
    } catch {
      return false
    }
  })()

  const cookiesEnabled = navigator.cookieEnabled

  const mediaDevices = navigator.mediaDevices
    ? Object.keys(navigator.mediaDevices).filter(
        (key) => typeof navigator.mediaDevices[key as keyof MediaDevices] === 'function'
      )
    : []

  const serviceWorkerEnabled = 'serviceWorker' in navigator
  const languages = navigator.languages || [navigator.language]

  // Проверка на Do Not Track
  const doNotTrack = navigator.doNotTrack || null

  const colorDepth = screen.colorDepth
  const pixelDepth = screen.pixelDepth
  const hardwareConcurrency = navigator.hardwareConcurrency || 0
  const maxTouchPoints = navigator.maxTouchPoints || 0

  return {
    plugins,
    localStorageEnabled,
    sessionStorageEnabled,
    indexedDBEnabled,
    cookiesEnabled,
    mediaDevices,
    serviceWorkerEnabled,
    languages,
    doNotTrack,
    colorDepth,
    pixelDepth,
    hardwareConcurrency,
    maxTouchPoints,
    localStorage: localStorageEnabled ? localStorage : undefined,
    sessionStorage: sessionStorageEnabled ? sessionStorage : undefined,
  }
}
