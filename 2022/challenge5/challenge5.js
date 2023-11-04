export const battleRoyale = (players) => {
  if (!Array.isArray(players)) throw new Error('Parameter provided must be an array')
  if (players.length === 0) return 'No players found'

  let survivors = players.map((player, i) => ({ name: player, index: i }))

  while (survivors.length > 2) {
    survivors = survivors.length % 2 === 1
      ? [...survivors.slice(2).filter((_, i) => i % 2 === 0)]
      : [...survivors.filter((_, i) => i % 2 === 0)]
  }

  const { name, index } = survivors[0]

  return `${name}-${index}`
}
