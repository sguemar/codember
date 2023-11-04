import { describe, expect, it } from 'vitest'
import { decipherMessage } from './challenge2'

describe('Catch those cybercriminals!', () => {
  const strangeCharsMessage = 'The code has strange characters'

  it('should be a function', () => {
    expect(typeof decipherMessage).toBe('function')
  })

  it('should throw an error if no parameter is provided', () => {
    expect(() => decipherMessage()).toThrow()
  })

  it('should throw an specific error message if not string parameter is provided', () => {
    const errorMessage = 'parameter provided must be a string'
    expect(() => decipherMessage({})).toThrow(errorMessage)
    expect(() => decipherMessage(26)).toThrow(errorMessage)
    expect(() => decipherMessage(false)).toThrow(errorMessage)
  })

  it('should return the character equivalent to the ASCII code provided by parameter', () => {
    expect(decipherMessage('97')).toBe('a')
    expect(decipherMessage('99')).toBe('c')
    expect(decipherMessage('104')).toBe('h')
    expect(decipherMessage('112')).toBe('p')
    expect(decipherMessage('122')).toBe('z')
  })

  it(`should return "${strangeCharsMessage}" if the message provided by parameter has some character other than lowercase letter`, () => {
    expect(decipherMessage('32')).toBe(strangeCharsMessage)
    expect(decipherMessage('11')).toBe(strangeCharsMessage)
    expect(decipherMessage('77')).toBe(strangeCharsMessage)
    expect(decipherMessage('96')).toBe(strangeCharsMessage)
    expect(decipherMessage('123')).toBe(strangeCharsMessage)
    expect(decipherMessage('127')).toBe(strangeCharsMessage)
    expect(decipherMessage('10923105100117')).toBe(strangeCharsMessage)
    expect(decipherMessage('9897123155')).toBe(strangeCharsMessage)
    expect(decipherMessage('111981000')).toBe(strangeCharsMessage)
  })

  it('should return the sequence of characters equivalents to the ASCII code word provided by parameter', () => {
    expect(decipherMessage('109105100117')).toBe('midu')
    expect(decipherMessage('9911110010110998101114')).toBe('codember')
    expect(decipherMessage('11210897121')).toBe('play')
    expect(decipherMessage('116101116114105115')).toBe('tetris')
  })

  it('should return the sequence of characters equivalents to the ASCII code sentence provided by parameter', () => {
    expect(decipherMessage('109105100117 100101118')).toBe('midu dev')
    expect(decipherMessage('105 11210897121 9911110010110998101114')).toBe('i play codember')
    expect(decipherMessage('105 11210897121 116101116114105115')).toBe('i play tetris')
    expect(decipherMessage('9911110010110998101114 105115 97 103111111100 10397109101')).toBe('codember is a good game')
  })
})
