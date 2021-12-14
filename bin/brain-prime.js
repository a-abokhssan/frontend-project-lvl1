#!/usr/bin/env node
import greeting from '../src/cli.js'
import primeGame from '../src/games/prime.js'
import game from '../src/index.js'

console.log('Welcome to the Brain Games!')
const userName = greeting()
setTimeout(() => console.log('Answer "yes" if given number is prime. Otherwise answer "no".'), 500)
setTimeout(game, 1000, primeGame, userName)
