import readlineSync from 'readline-sync'
import { randomNumber, gcd } from '../util.js'

const gcdGame = (name) => {
  const firstNumber = randomNumber(1, 100)
  const secondNumber = randomNumber(1, 100)
  const correctAnswer = gcd(firstNumber, secondNumber)

  console.log(`Question: ${firstNumber} ${secondNumber}`)
  const usersAnswer = readlineSync.question('Your answer: ')
  if (Number(usersAnswer) === correctAnswer) {
    return true
  }
  console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`)
  return false
}

export default gcdGame
