const game = (gameName, name) => {
  const numberOfAttempts = 3
  let correctAttempts = 0
  let endGameResult = ''

  for (let i = 1; i <= numberOfAttempts; i += 1) {
    if (gameName(name)) {
      correctAttempts += 1
      console.log('Correct!')
      if (correctAttempts === numberOfAttempts) {
        correctAttempts = 0
        console.log(`Congratulations, ${name}!`)
        endGameResult = 'Win'
      }
    } else {
      correctAttempts = 0
      endGameResult = 'Loose'
      return endGameResult
    }
  }
  return endGameResult
}

export default game
