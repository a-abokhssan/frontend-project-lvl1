import readlineSync from 'readline-sync'
import randomNumber from '../util.js'

const calcGame = (name) => {
  const operations = ['+', '-', '*']
  const firstNumber = randomNumber(1, 100)
  const secondNumber = randomNumber(1, 100)
  const operator = operations[randomNumber(0, 2)]
  const questionExpression = `${firstNumber} ${operator} ${secondNumber}`
  let expressionAnswer
  switch (operator) {
    case operations[0]:
      expressionAnswer = firstNumber + secondNumber
      break
    case operations[1]:
      expressionAnswer = firstNumber - secondNumber
      break
    case operations[2]:
      expressionAnswer = firstNumber * secondNumber
      break
    default:
      console.log('Houston, we have a problem!')
  }

  console.log(`Question: ${questionExpression}?`)
  const usersAnswer = readlineSync.question('Your answer: ')
  if (Number(usersAnswer) === expressionAnswer) {
    return true
  }
  console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${expressionAnswer}'.\nLet's try again, ${name}!`)
  return false
}

export default calcGame
