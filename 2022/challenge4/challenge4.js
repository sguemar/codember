const FIVE_REPEATED = /5{2,}/
const MIN_POSSIBLE_PASSWORD = 11155
const MAX_POSSIBLE_PASSWORD = 98055

const areAscendingNumbers = (password) => {
  for (let i = 0; i < password.length - 1; i++) {
    if (Number(password[i]) > Number(password[i + 1])) return false
  }
  return true
}

export const recoverPassword = () => {
  const possiblePasswords = []
  for (let i = MIN_POSSIBLE_PASSWORD; i < MAX_POSSIBLE_PASSWORD; i++) {
    const password = String(i)
    if (password.match(FIVE_REPEATED) && areAscendingNumbers(password)) {
      possiblePasswords.push(i)
    }
  }
  return `${possiblePasswords.length}-${possiblePasswords[55]}`
}
