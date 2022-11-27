const MIN_LOWERCASE_LETTER_CODE = 97
const MAX_LOWERCASE_LETTER_CODE = 122

const hasInvalidCharacters = (characters) =>
  characters.some((character) =>
    isNaN(character) || character < MIN_LOWERCASE_LETTER_CODE || character > MAX_LOWERCASE_LETTER_CODE)

const decipherWord = (word) => {
  const codedChars = []
  let currentChar = ''

  for (let i = 0; i < word.length; i++) {
    currentChar = word[i]
    if (currentChar === '9') codedChars.push(Number(`${currentChar}${word[++i]}`))
    else codedChars.push(Number(`${currentChar}${word[++i]}${word[++i]}`))
  }

  if (hasInvalidCharacters(codedChars)) return 'The code has strange characters'

  return codedChars.map(char => String.fromCharCode(char)).join('')
}

export const decipherMessage = (message) => {
  if (typeof message !== 'string') throw new Error('parameter provided must be a string')

  const words = message.split(' ')

  return words.map(word => decipherWord(word)).join(' ')
}
