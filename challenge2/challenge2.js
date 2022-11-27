const MIN_LOWERCASE_LETTER_CODE = 97
const MAX_LOWERCASE_LETTER_CODE = 122

export const decipherMessage = (message) => {
  if (typeof message !== 'string') throw new Error('parameter provided must be a string')

  const separatedChars = []
  let currentChar = ''
  for (let i = 0; i < message.length; i++) {
    currentChar = message[i]
    if (currentChar === '9') separatedChars.push(Number(`${currentChar}${message[++i]}`))
    else separatedChars.push(Number(`${currentChar}${message[++i]}${message[++i]}`))
  }

  const invalidCharacters = separatedChars.some((character) =>
    isNaN(character) || character < MIN_LOWERCASE_LETTER_CODE || character > MAX_LOWERCASE_LETTER_CODE)
  if (invalidCharacters) return 'The code has strange characters'

  return separatedChars.map(char => String.fromCharCode(char)).join('')
}
