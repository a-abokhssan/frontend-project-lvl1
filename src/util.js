export const randomNumber = (a, b) => Math.floor((Math.random() * b) + a)

export const gcd = (a, b) => {
  if (b > a) return gcd(b, a)
  if (!b) return a
  return gcd(b, a % b)
}
