export const decipherMessage = (message) => {
  if (typeof message !== 'string') throw new Error()
  if (message.length === 0) return ''

  const messageWords = message.toLowerCase().split(' ')
  const words = []
  const wordsCount = {}

  messageWords.forEach(word => {
    if (words.includes(word)) {
      wordsCount[word] = wordsCount[word] + 1
    } else {
      words.push(word)
      wordsCount[word] = 1
    }
  })

  return words.reduce((acc, word) => acc + `${word}${wordsCount[word]}`, "")

}
