#!/usr/bin/env node
import greeting from '../src/cli.js'
import gcdGame from '../src/games/gcd.js'
import game from '../src/index.js'

console.log('Welcome to the Brain Games!')
const userName = greeting()
setTimeout(() => console.log('Find the greatest common divisor of given numbers.'), 500)
setTimeout(game, 1000, gcdGame, userName)
