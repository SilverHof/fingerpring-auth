import { Screen } from './_types'

export const _getScreenFingerprint = (): Screen => {
  const orientation = window.screen.orientation || {}

  // Получение данных экрана
  const screenData: Screen = {
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    pixelRatio: window.devicePixelRatio || 1,
    colorDepth: window.screen.colorDepth || 24,
    orientation: orientation.type || (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'),
    availWidth: window.screen.availWidth || 0,
    availHeight: window.screen.availHeight || 0,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    deviceXDPI: (window.screen as any).deviceXDPI || 0,
    deviceYDPI: (window.screen as any).deviceYDPI || 0,
    isLandscape: window.innerWidth > window.innerHeight,
  }

  return screenData
}
