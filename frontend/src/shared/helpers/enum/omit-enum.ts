export const omitEnum = <T extends Record<string, string>>(enumeration: T, excludeKeys: (keyof T)[]): Partial<T> => {
  const omittedEnum: Partial<T> = {}

  for (const key in enumeration) {
    if (!excludeKeys.includes(key as keyof T)) {
      omittedEnum[key] = enumeration[key]
    }
  }

  return omittedEnum
}
