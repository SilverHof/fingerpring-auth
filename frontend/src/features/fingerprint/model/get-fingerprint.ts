import { Fingerprint } from './_types'
import { _getApplicationFingerprint } from './_get-application-fingerprint'
import { _getBrowserFingerprint } from './_get-browser-fingerprint'
import { _getCanvasFingerprint } from './_get-canvas-fingerprint'
import { _getDeviceFingerprint } from './_get-device-fingerprint'
import { _getNetworkData } from './_get-network'
import { _getScreenFingerprint } from './_get-screen-fingerprint'
import { _getTimezoneFingerprint } from './_get-timezone-fingerprint'

export const getFingerprint = async (): Promise<Fingerprint> => {
  return {
    browser: _getBrowserFingerprint(),
    screen: _getScreenFingerprint(),
    device: _getDeviceFingerprint(),
    timezone: _getTimezoneFingerprint(),
    application: _getApplicationFingerprint(),
    canvas: await _getCanvasFingerprint(),
    // network: await _getNetworkData().then((data) => data),
  }
}
