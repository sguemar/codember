export const decipherMessage = (message) => {
  if (message === undefined) throw new Error()
  if (message.length === 0) return ''

  const messageWords = message.split(' ').map(word => word.toLowerCase())
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

  let result = ''
  words.forEach(word => {
    result = result.concat(word, wordsCount[word])
  })

  return result
}
