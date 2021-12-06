import readlineSync from 'readline-sync'

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hi, ${userName}!`)
  return userName
}

export default greeting
