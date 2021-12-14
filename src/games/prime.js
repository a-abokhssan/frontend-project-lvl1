import readlineSync from 'readline-sync'
import { randomNumber, isPrime } from '../util.js'

const primeGame = (name) => {
  const questionNumber = randomNumber(1, 100)
  const correctAnswer = isPrime(questionNumber) ? 'yes' : 'no'

  console.log(`Question: ${questionNumber}?`)
  const usersAnswer = readlineSync.question('Your answer: ')
  if (usersAnswer.toLowerCase() === correctAnswer) {
    return true
  }
  console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`)
  return false
}

export default primeGame
