import { describe, expect, it, test } from 'vitest'
import { decipherMessage } from '../challenge1'

describe('Challenge 1', () => {
  it('should be a function', () => {
    expect(typeof decipherMessage).toBe('function')
  })

  it('should return an error if no message is passed by params', () => {
    expect(() => decipherMessage()).toThrow()
  })

  it('should return an empty message if the message passed is empty', () => {
    expect(decipherMessage('')).toBe('')
  })

  test('message with only one word', () => {
    expect(decipherMessage('house')).toBe('house1')
    expect(decipherMessage('car')).toBe('car1')
  })

  test('message with two same words', () => {
    expect(decipherMessage('house house')).toBe('house2')
    expect(decipherMessage('car car')).toBe('car2')
  })

  test('message with three same words', () => {
    expect(decipherMessage('house house house')).toBe('house3')
    expect(decipherMessage('car car car')).toBe('car3')
  })

  test('message with two different words', () => {
    expect(decipherMessage('house car')).toBe('house1car1')
    expect(decipherMessage('bike mouse')).toBe('bike1mouse1')
  })

  test('message with two different words repeated', () => {
    expect(decipherMessage('house car house')).toBe('house2car1')
    expect(decipherMessage('bike mouse bike')).toBe('bike2mouse1')
    expect(decipherMessage('car car car dog')).toBe('car3dog1')
  })

  test('message with the same word with uppercase and lowercase letters', () => {
    expect(decipherMessage('car Car cAr CAR')).toBe('car4')
    expect(decipherMessage('bIkE BIke BIKE bike BikE')).toBe('bike5')
  })

  test('message with several words with uppercase and lowercase letters', () => {
    expect(decipherMessage('cAr hoUse house dog')).toBe('car1house2dog1')
    expect(decipherMessage('MOUSE DOG CAR bIkE car MOUsE')).toBe('mouse2dog1car2bike1')
  })
})
