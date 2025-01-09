import { createProgram, hashSHA256 } from '../lib'

export const _getWebGLFingerprint = async (): Promise<string> => {
  // Создаем WebGL-контекст
  const canvas = document.createElement('canvas')
  const webgl = canvas.getContext('webgl') || (canvas.getContext('experimental-webgl') as WebGLRenderingContext)
  if (!webgl) {
    return 'Unable to get WebGL context'
  }

  // Получаем данные WebGL
  const debugInfo = webgl.getExtension('WEBGL_debug_renderer_info')
  const renderer = debugInfo ? webgl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'Unknown Renderer'

  const vendor = debugInfo ? webgl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : 'Unknown Vendor'

  // Рендерим кадр с уникальными настройками
  const vertexShader = `
    attribute vec4 position;
    void main() {
      gl_Position = position;
    }
  `

  const fragmentShader = `
    void main() {
      gl_FragColor = vec4(0.2, 0.4, 0.6, 1.0);
    }
  `

  const program = createProgram(webgl, vertexShader, fragmentShader)
  if (!program) {
    return 'Unable to create WebGL program'
  }

  webgl.useProgram(program)

  // Определяем вершины для рендера
  const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1])

  const buffer = webgl.createBuffer()
  webgl.bindBuffer(webgl.ARRAY_BUFFER, buffer)
  webgl.bufferData(webgl.ARRAY_BUFFER, vertices, webgl.STATIC_DRAW)

  const positionLocation = webgl.getAttribLocation(program, 'position')
  webgl.enableVertexAttribArray(positionLocation)
  webgl.vertexAttribPointer(positionLocation, 2, webgl.FLOAT, false, 0, 0)

  // Рендерим в текстуру
  webgl.clear(webgl.COLOR_BUFFER_BIT)
  webgl.drawArrays(webgl.TRIANGLE_STRIP, 0, 4)

  // Получаем пиксели из WebGL-буфера
  const pixels = new Uint8Array(canvas.width * canvas.height * 4)
  webgl.readPixels(0, 0, canvas.width, canvas.height, webgl.RGBA, webgl.UNSIGNED_BYTE, pixels)

  // Генерируем отпечаток
  const fingerprintSource = `${renderer}_${vendor}_${pixels.join(',')}`

  const fingerprint = await hashSHA256(fingerprintSource)

  return fingerprint
}
