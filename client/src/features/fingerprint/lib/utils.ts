export const hashSHA256 = async (data: string): Promise<string> => {
  const buffer = new TextEncoder().encode(data) // Преобразуем строку в ArrayBuffer
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer) // Хешируем с использованием SHA-256
  const hashArray = Array.from(new Uint8Array(hashBuffer)) // Преобразуем результат в массив
  const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('') // Преобразуем в строку в формате HEX
  return hashHex
}

// Вспомогательная функция для создания WebGL программы
export const createProgram = (
  webgl: WebGLRenderingContext,
  vertexSource: string,
  fragmentSource: string
): WebGLProgram | null => {
  const vertexShader = createShader(webgl, webgl.VERTEX_SHADER, vertexSource)
  const fragmentShader = createShader(webgl, webgl.FRAGMENT_SHADER, fragmentSource)
  if (!vertexShader || !fragmentShader) return null

  const program = webgl.createProgram()
  if (!program) return null

  webgl.attachShader(program, vertexShader)
  webgl.attachShader(program, fragmentShader)
  webgl.linkProgram(program)

  if (!webgl.getProgramParameter(program, webgl.LINK_STATUS)) {
    console.error('Unable to link program:', webgl.getProgramInfoLog(program))
    webgl.deleteProgram(program)
    return null
  }

  return program
}

// Вспомогательная функция для создания WebGL шейдера
export const createShader = (webgl: WebGLRenderingContext, type: number, source: string): WebGLShader | null => {
  const shader = webgl.createShader(type)
  if (!shader) return null

  webgl.shaderSource(shader, source)
  webgl.compileShader(shader)

  if (!webgl.getShaderParameter(shader, webgl.COMPILE_STATUS)) {
    console.error('Unable to compile shader:', webgl.getShaderInfoLog(shader))
    webgl.deleteShader(shader)
    return null
  }

  return shader
}
