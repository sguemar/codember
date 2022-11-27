const MIN_LOWERCASE_LETTER_CODE = 97
const MAX_LOWERCASE_LETTER_CODE = 122

const hasInvalidCharacters = (characters) =>
  characters.some((character) =>
    isNaN(character) || character < MIN_LOWERCASE_LETTER_CODE || character > MAX_LOWERCASE_LETTER_CODE)

const decipherWord = (word) => {
  const separatedChars = []
  let currentChar = ''
  for (let i = 0; i < word.length; i++) {
    currentChar = word[i]
    if (currentChar === '9') separatedChars.push(Number(`${currentChar}${word[++i]}`))
    else separatedChars.push(Number(`${currentChar}${word[++i]}${word[++i]}`))
  }
  if (hasInvalidCharacters(separatedChars)) return 'The code has strange characters'

  return separatedChars.map(char => String.fromCharCode(char)).join('')
}

export const decipherMessage = (message) => {
  if (typeof message !== 'string') throw new Error('parameter provided must be a string')

  return decipherWord(message)
}
