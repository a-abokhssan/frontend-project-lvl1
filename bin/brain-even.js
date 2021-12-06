#!/usr/bin/env node
import greeting from '../src/cli.js'
import evenGame from '../src/even.js'

console.log('Welcome to the Brain Games!')
const userName = greeting()
evenGame(userName)
