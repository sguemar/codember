import { describe, expect, it } from 'vitest'
import { getLongestZebra } from './challenge3.js'

describe('Zebra of colors', () => {
  const noZebraMessage = 'No zebra lights possible!'

  it('should be a function', () => {
    expect(typeof getLongestZebra).toBe('function')
  })

  it('should throw an error if no parameter is provided', () => {
    expect(() => getLongestZebra()).toThrow()
  })

  it('should throw an specific error if the parameter provided is not an array', () => {
    const errorMessage = 'Parameter provided must be an array'
    expect(() => getLongestZebra({})).toThrow(errorMessage)
    expect(() => getLongestZebra(true)).toThrow(errorMessage)
    expect(() => getLongestZebra(23)).toThrow(errorMessage)
    expect(() => getLongestZebra('lights')).toThrow(errorMessage)
  })

  it(`should return "${noZebraMessage}" if the array provided has only one element`, () => {
    expect(getLongestZebra(['red'])).toBe(noZebraMessage)
    expect(getLongestZebra(['green'])).toBe(noZebraMessage)
    expect(getLongestZebra(['yellow'])).toBe(noZebraMessage)
  })

  it(`should return "${noZebraMessage}" if the array provided has only the same element repeated`, () => {
    expect(getLongestZebra(['red', 'red'])).toBe(noZebraMessage)
    expect(getLongestZebra(['green', 'green'])).toBe(noZebraMessage)
    expect(getLongestZebra(['yellow', 'yellow', 'yellow'])).toBe(noZebraMessage)
    expect(getLongestZebra(['blue', 'blue', 'blue', 'blue'])).toBe(noZebraMessage)
  })

  it('should return 2@lastColor if the array provided has a 2 length zebra', () => {
    expect(getLongestZebra(['red', 'blue'])).toBe('2@blue')
    expect(getLongestZebra(['green', 'brown'])).toBe('2@brown')
    expect(getLongestZebra(['yellow', 'orange'])).toBe('2@orange')
  })

  it('should return the last chain length and the last chain color for chains of the same length', () => {
    expect(getLongestZebra(['green', 'yellow', 'orange'])).toBe('2@orange')
    expect(getLongestZebra(['green', 'yellow', 'orange', 'red'])).toBe('2@red')
    expect(getLongestZebra(['green', 'yellow', 'green', 'blue', 'orange', 'red', 'orange'])).toBe('3@orange')
  })

  it('should return 3@lastColor if the array provided has a 3 length zebra', () => {
    expect(getLongestZebra(['red', 'blue', 'red'])).toBe('3@red')
    expect(getLongestZebra(['brown', 'red', 'brown'])).toBe('3@brown')
    expect(getLongestZebra(['green', 'yellow', 'green', 'red'])).toBe('3@green')
    expect(getLongestZebra(['black', 'red', 'blue', 'red', 'white'])).toBe('3@red')
    expect(getLongestZebra(['red', 'red', 'blue', 'red', 'red', 'red', 'green'])).toBe('3@red')
  })

  it('should return 4@lastColor if the array provided has a 4 length zebra', () => {
    expect(getLongestZebra(['red', 'blue', 'red', 'blue'])).toBe('4@blue')
    expect(getLongestZebra(['red', 'blue', 'red', 'blue', 'green'])).toBe('4@blue')
    expect(getLongestZebra(['red', 'red', 'blue', 'red', 'blue', 'green'])).toBe('4@blue')
    expect(getLongestZebra(['red', 'orange', 'red', 'orange', 'green'])).toBe('4@orange')
    expect(getLongestZebra(['blue', 'red', 'yellow', 'red', 'yellow', 'blue', 'orange', 'blue', 'orange', 'red', 'red'])).toBe('4@orange')
  })

  it('should return 6@lastColor if the array provided has a 6 length zebra', () => {
    expect(getLongestZebra(['red', 'green', 'red', 'green', 'red', 'green'])).toBe('6@green')
  })
})
