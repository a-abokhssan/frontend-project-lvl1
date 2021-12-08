export const randomNumber = (a, b) => Math.floor((Math.random() * b) + a)

export const gcd = (a, b) => {
  if (b > a) return gcd(b, a)
  if (!b) return a
  return gcd(b, a % b)
}

export const generateProgression = (num) => {
  const progressionLength = randomNumber(4, 9)
  let startNumber = num
  const addedNumber = randomNumber(1, 20)
  const progression = []
  for (let i = 1; i <= progressionLength; i += 1) {
    progression.push(startNumber)
    startNumber += addedNumber
  }
  return progression
}
