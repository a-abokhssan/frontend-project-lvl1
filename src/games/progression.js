import readlineSync from 'readline-sync'
import { randomNumber, generateProgression } from '../util.js'

const progressionGame = (name) => {
  const progression = generateProgression(randomNumber(0, 100))
  const correctAnswer = progression[randomNumber(0, progression.length - 1)]
  const question = progression.map((item) => (item === correctAnswer ? '..' : item)).join(', ')

  console.log(`Question: ${question}`)
  const usersAnswer = readlineSync.question('Your answer: ')
  if (Number(usersAnswer) === correctAnswer) {
    return true
  }
  console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`)
  return false
}

export default progressionGame
