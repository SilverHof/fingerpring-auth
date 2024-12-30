import { StringSchema } from 'yup'

interface BatteryManager {
  charging: boolean
  chargingTime: number
  dischargingTime: number
  level: number // от 0 до 1
}

declare module 'webApi' {
  interface Navigator {
    getBattery?: () => Promise<BatteryManager>
  }
}
