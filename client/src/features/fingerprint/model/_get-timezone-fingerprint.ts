import { Timezone } from './_types'

export const _getTimezoneFingerprint = (): Timezone => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone // Получаем часовой пояс (IANA)
  const timezoneOffset = new Date().getTimezoneOffset() // Смещение от UTC в минутах
  const utcOffset = -(timezoneOffset / 60) // Смещение от UTC в часах

  // Форматированное смещение UTC, например, "+03:00"
  const utcOffsetFormatted = `${utcOffset >= 0 ? '+' : '-'}${Math.abs(utcOffset).toString().padStart(2, '0')}:00`

  // Проверка на летнее время (DST)
  const january = new Date(new Date().getFullYear(), 0, 1)
  const july = new Date(new Date().getFullYear(), 6, 1)
  const standardTimezoneOffset = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset())
  const isDST = timezoneOffset < standardTimezoneOffset

  // Пример локального формата даты
  const localeDateFormat = new Intl.DateTimeFormat().resolvedOptions().locale

  return {
    timezone,
    utcOffset,
    utcOffsetFormatted,
    isDST,
    localeDateFormat,
  }
}
