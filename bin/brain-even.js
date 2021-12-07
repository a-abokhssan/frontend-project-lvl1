#!/usr/bin/env node
import greeting from '../src/cli.js'
import evenGame from '../src/games/even.js'
import game from '../src/index.js'

console.log('Welcome to the Brain Games!')
const userName = greeting()
setTimeout(() => console.log('Answer "yes" if the number is even, otherwise answer "no".'), 500)
setTimeout(game, 1000, evenGame, userName)
