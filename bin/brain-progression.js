#!/usr/bin/env node
import greeting from '../src/cli.js'
import progressionGame from '../src/games/progression.js'
import game from '../src/index.js'

console.log('Welcome to the Brain Games!')
const userName = greeting()
setTimeout(() => console.log('What number is missing in the progression?'), 500)
setTimeout(game, 1000, progressionGame, userName)
