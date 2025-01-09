import { hashSHA256 } from '../lib'

export const _getCanvasFingerprint = async (): Promise<string> => {
  // Создаем канвас
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    return 'Unable to get canvas context'
  }

  // Настройки канваса (размер, цвет фона и т.д.)
  canvas.width = 200
  canvas.height = 50
  ctx.fillStyle = '#f0f0f0' // Светлый фон
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Настройки текста
  ctx.font = '16px Arial' // Шрифт и размер
  ctx.fillStyle = '#000000' // Цвет текста
  ctx.fillText('test', 50, 30) // Рисуем текст на канвасе

  // Получаем изображение в формате base64
  const dataUrl = canvas.toDataURL()

  // Преобразуем данные канваса в строку и используем хеш-функцию для генерации отпечатка
  const fingerprint = await hashSHA256(dataUrl)

  return fingerprint
}
