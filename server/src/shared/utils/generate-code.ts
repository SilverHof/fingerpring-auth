export const generateToken = (): string => {
  const min = 100000; // Минимальное 6-значное число
  const max = 999999; // Максимальное 6-значное число
  return Math.floor(Math.random() * (max - min + 1) + min).toString();
}