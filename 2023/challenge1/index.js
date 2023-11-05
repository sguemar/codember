import { readFileSync } from 'node:fs'
import { decipherMessage } from './challenge1.js'

const message = readFileSync('2023/challenge1/message.txt', 'utf-8')

console.log(decipherMessage(message))
