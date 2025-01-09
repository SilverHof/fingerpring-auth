export const pickEnum = <T extends Record<string, string>, K extends keyof T>(
  enumeration: T,
  includeKeys: K[]
): Pick<T, K> => {
  const pickedEnum: Partial<T> = {}

  for (const key of includeKeys) {
    pickedEnum[key] = enumeration[key]
  }

  return pickedEnum as Pick<T, K>
}
