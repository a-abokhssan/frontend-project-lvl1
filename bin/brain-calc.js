#!/usr/bin/env node
import greeting from '../src/cli.js'
import calcGame from '../src/games/calc.js'
import game from '../src/index.js'

console.log('Welcome to the Brain Games!')
const userName = greeting()
setTimeout(() => console.log('What is the result of the expression?'), 500)
setTimeout(game, 1000, calcGame, userName)
