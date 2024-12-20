export const omitObjectProperty = <T extends object, Keys extends keyof T>(object: T, keys: Keys[]): Omit<T, Keys> => {
  const result: Partial<T> = {}

  for (const key in object) {
    if (!(keys as (keyof T)[]).includes(key as keyof T)) {
      result[key as keyof T] = object[key as keyof T]
    }
  }

  return result as Omit<T, Keys>
}
