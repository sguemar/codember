import { readFileSync } from 'node:fs'
import { getLongestZebra } from './challenge3.js'

const colors = JSON.parse(readFileSync('challenge3/colors.txt', 'utf-8'))

const longestZebra = getLongestZebra(colors)

console.log(longestZebra)
