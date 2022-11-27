const MIN_LOWERCASE_LETTER_CODE = 97
const MAX_LOWERCASE_LETTER_CODE = 122
const INITIAL_TWO_DIGIT_CODE_NUMBER = '9'

const hasInvalidCharacters = (characters) =>
  characters.some((character) =>
    isNaN(character) || character < MIN_LOWERCASE_LETTER_CODE || character > MAX_LOWERCASE_LETTER_CODE)

const decipherWord = (word) => {
  const codedChars = []
  let currentChar = ''

  for (let i = 0; i < word.length; i++) {
    currentChar = word[i]
    currentChar === INITIAL_TWO_DIGIT_CODE_NUMBER
      ? codedChars.push(Number(`${currentChar}${word[++i]}`))
      : codedChars.push(Number(`${currentChar}${word[++i]}${word[++i]}`))
  }

  if (hasInvalidCharacters(codedChars)) return 'The code has strange characters'

  return codedChars.map(char => String.fromCharCode(char)).join('')
}

export const decipherMessage = (message) => {
  if (typeof message !== 'string') throw new Error('parameter provided must be a string')

  const words = message.split(' ')

  return words.map(word => decipherWord(word)).join(' ')
}
