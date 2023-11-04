import { describe, expect, it } from 'vitest'
import { removeBots } from '../challenge1'
import { twoValidUsers, twoValidUsersInDifferentLines, userInDifferentLines } from './userExamples'

describe('Fix twitter!', () => {
  const noUsersMessage = 'No users found'

  it('should be a function', () => {
    expect(typeof removeBots).toBe('function')
  })

  it('should throw an error if no users are provided as parameter', () => {
    expect(() => removeBots()).toThrow()
  })

  it('should throw an specific error message if not string is provided as parameter', () => {
    const errorMessage = 'parameter provided must be a string'
    expect(() => removeBots({})).toThrow(errorMessage)
    expect(() => removeBots(1)).toThrow(errorMessage)
    expect(() => removeBots(true)).toThrow(errorMessage)
  })

  it(`should return "${noUsersMessage}" if an empty string is provided as parameter`, () => {
    expect(removeBots('')).toBe(noUsersMessage)
  })

  it(`should return "${noUsersMessage}" if only one invalid user is provided`, () => {
    let invalidUser = 'usr:@midudev psw:123456 age:22 loc:bcn fll:82'
    expect(removeBots(invalidUser)).toBe(noUsersMessage)
    invalidUser = 'eme:mi@gmail.com psw:123456 age:22 loc:bcn fll:82'
    expect(removeBots(invalidUser)).toBe(noUsersMessage)
    invalidUser = 'psw:abcd123 aaa:435'
    expect(removeBots(invalidUser)).toBe(noUsersMessage)
    invalidUser = 'fll:45'
    expect(removeBots(invalidUser)).toBe(noUsersMessage)
  })

  it('should return 1 + user name if only one valid user (a user with usr, eme, psw, age, loc and fll fields) is provided', () => {
    let validUser = 'usr:@midudev eme:mi@gmail.com psw:123456 age:22 loc:canada fll:82'
    expect(removeBots(validUser)).toBe('1@midudev')
    validUser = 'psw:123dfr eme:mi@gmail.com age:45 usr:@midudev loc:spn fll:652'
    expect(removeBots(validUser)).toBe('1@midudev')
    validUser = 'psw:1345 age:34 usr:@pheralb loc:spn fll:82 eme:other@gmail.com'
    expect(removeBots(validUser)).toBe('1@pheralb')
    validUser = 'usr:@midudev eme:mi@gmail.com psw:adbsje4 age:22 loc:eeuu fll:82 test:123'
    expect(removeBots(validUser)).toBe('1@midudev')
    validUser = 'usr:@testName other:123abc eme:my@gmail.com psw:123456 age:22 loc:world fll:82 test:123'
    expect(removeBots(validUser)).toBe('1@testName')
    expect(removeBots(userInDifferentLines)).toBe('1@pheralb')
  })

  it('should return 2 + last valid user name if two valid user is provided', () => {
    expect(removeBots(twoValidUsers)).toBe('2@midudev')
    expect(removeBots(twoValidUsersInDifferentLines)).toBe('2@testUser')
  })
})
