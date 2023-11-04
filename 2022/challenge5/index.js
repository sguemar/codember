import { readFileSync } from 'node:fs'
import { battleRoyale } from './challenge5.js'

const patrons = JSON.parse(readFileSync('2022/challenge5/patrons.json', 'utf-8'))

const survivor = battleRoyale(patrons)

console.log(survivor)
