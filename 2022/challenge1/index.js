import { readFileSync } from 'node:fs'
import { removeBots } from './challenge1.js'

const users = readFileSync('challenge1/database.txt', 'utf-8')

console.log(removeBots(users))
