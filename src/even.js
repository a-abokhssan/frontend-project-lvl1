import readlineSync from 'readline-sync'
import randomNumber from './util.js'

const evenGame = (name) => {
  const numberOfAttempts = 3
  let correctAttempts = 0
  let endGameResult = ''

  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  for (let i = 1; i <= numberOfAttempts; i += 1) {
    const questionNumber = randomNumber()
    const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no'

    console.log(`Question: ${questionNumber}?`)
    const usersAnswer = readlineSync.question('Your answer: ')
    if (usersAnswer.toLowerCase() === correctAnswer) {
      correctAttempts += 1
      console.log('Correct!')
      if (correctAttempts === numberOfAttempts) {
        correctAttempts = 0
        console.log(`Congratulations, ${name}!`)
        endGameResult = 'Win'
      }
    } else {
      correctAttempts = 0
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`)
      endGameResult = 'Loose'
      return endGameResult
    }
  }
  return endGameResult
}

export default evenGame
