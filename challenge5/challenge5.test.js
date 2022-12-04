import { describe, expect, it } from 'vitest'
import { battleRoyale } from './challenge5'

describe('Battle Royale of libraries and frameworks', () => {
  const noPlayersMessage = 'No players found'

  it('should be a function', () => {
    expect(battleRoyale).toBeTypeOf('function')
  })

  it('should throw an error if no players are provided as parameter', () => {
    expect(() => battleRoyale()).toThrow()
  })

  it('should throw an specific error if the parameter provided is not an array', () => {
    const errorMessage = 'Parameter provided must be an array'
    expect(() => battleRoyale(0)).toThrow(errorMessage)
    expect(() => battleRoyale({})).toThrow(errorMessage)
    expect(() => battleRoyale('React')).toThrow(errorMessage)
    expect(() => battleRoyale('JavaScript')).toThrow(errorMessage)
    expect(() => battleRoyale(null)).toThrow(errorMessage)
    expect(() => battleRoyale(undefined)).toThrow(errorMessage)
    expect(() => battleRoyale(true)).toThrow(errorMessage)
  })

  it(`should return "${noPlayersMessage}" if an empty string is provided by parameter`, () => {
    expect(battleRoyale([])).toBe(noPlayersMessage)
  })

  it('should return the first player and first position if only one player is provided by parameter', () => {
    expect(battleRoyale(['React'])).toBe('React-0')
    expect(battleRoyale(['Svelte'])).toBe('Svelte-0')
    expect(battleRoyale(['JavaScript'])).toBe('JavaScript-0')
  })

  it('should return the first player and first position if two players are provided by parameter', () => {
    expect(battleRoyale(['React', 'Svelte'])).toBe('React-0')
    expect(battleRoyale(['Svelte', 'VueJS'])).toBe('Svelte-0')
    expect(battleRoyale(['JavaScript', 'Python'])).toBe('JavaScript-0')
  })

  it('should return the third player and third position if three players are provided by parameter', () => {
    expect(battleRoyale(['React', 'Svelte', 'VueJS'])).toBe('VueJS-2')
    expect(battleRoyale(['JavaScript', 'Python', 'PHP'])).toBe('PHP-2')
    expect(battleRoyale(['Laravel', 'Spring Boot', 'Django'])).toBe('Django-2')
  })

  it('should return the last player alive and his position', () => {
    expect(battleRoyale([0, 2, 4, 6, 8])).toBe('4-2')
    expect(battleRoyale([0, 2, 4, 6, 8, 10])).toBe('8-4')
    expect(battleRoyale([1, 3, 5, 7, 9])).toBe('5-2')
    expect(battleRoyale([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe('4-4')
    expect(battleRoyale([0, 1, 2, 3, 0, 1, 2, 3, 4, 5])).toBe('0-4')
    expect(battleRoyale(['Laravel', 'Spring Boot', 'Django', 'Express', 'Flask', 'Angular', 'JQuery', 'Gatsby', 'NextJS'])).toBe('Django-2')
    expect(battleRoyale(['Django', 'Spring Boot', 'Django', 'Express', 'Flask', 'Jquery', 'JQuery', 'Django', 'NextJS'])).toBe('Django-2')
  })
})
