export const getLongestZebra = (lights) => {
  if (!Array.isArray(lights)) throw new Error('Parameter provided must be an array')
  if (lights.length < 2) return 'No zebra lights possible!'

  let maxZebraLength = 0
  let lastColor = null
  let currentZebraLength = 0
  let currentColor = null
  let previousColor = null
  const zebraColors = [lights[0], lights[1]]

  for (let i = 1; i < lights.length; i++) {
    currentColor = lights[i]
    previousColor = lights[i - 1]
    if (currentZebraLength > 0) {
      if (currentColor === zebraColors[currentZebraLength % 2]) {
        // Zebra continues one more color
        currentZebraLength += 1
        if (currentZebraLength >= maxZebraLength) lastColor = currentColor
      } else {
        // Current zebra ends
        if (maxZebraLength < currentZebraLength) maxZebraLength = currentZebraLength
        zebraColors[0] = previousColor
        zebraColors[1] = currentColor
        zebraColors[0] !== zebraColors[1]
          ? currentZebraLength = 2
          : currentZebraLength = 0
      }
    } else if (currentColor !== previousColor) {
      zebraColors[0] = previousColor
      zebraColors[1] = currentColor
      currentZebraLength = 2
    }
  }

  if (maxZebraLength < currentZebraLength) maxZebraLength = currentZebraLength
  if (currentZebraLength >= maxZebraLength && currentColor) lastColor = currentColor

  return maxZebraLength > 0 ? `${maxZebraLength}@${lastColor}` : 'No zebra lights possible!'
}
