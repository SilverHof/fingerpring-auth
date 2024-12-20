export const enumToObject = <T extends Record<string, string>>(enumeration: T): { [key in keyof T]: string } => {
  const obj: { [key: string]: string } = {}

  Object.keys(enumeration).forEach((key) => {
    obj[key] = enumeration[key]
  })

  return obj as { [key in keyof T]: string }
}
