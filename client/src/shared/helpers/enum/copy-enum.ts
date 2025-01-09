export const copyEnum = <T extends Record<string, string>>(enumeration: T): T => {
  return JSON.parse(JSON.stringify(enumeration))
}
