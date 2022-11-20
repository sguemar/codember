const REQUIRED_USERS_FIELDS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']

const getUsersData = (input) => {
  const inputLines = input.split('\n')
  const users = []
  let nextUser = ''
  inputLines.forEach(line => {
    if (line !== '') nextUser = `${nextUser} ${line}`
    else {
      users.push(nextUser)
      nextUser = ''
    }
  })
  if (nextUser !== '') users.push(nextUser)
  return users.map(user => user.split(' '))
}

const isUserValid = (userFields) =>
  REQUIRED_USERS_FIELDS.every(requiredField =>
    userFields.some(userField => userField === requiredField))

export const removeBots = (input) => {
  if (typeof input !== 'string') throw new Error('parameter provided must be a string')

  const usersData = getUsersData(input)

  let validUsersCount = 0
  let lastValidUsername = ''
  let lastUser = {}

  usersData.forEach(user => {
    user.forEach(field => {
      const [key, value] = field.split(':')
      lastUser = {
        ...lastUser,
        [key]: value
      }
    })
    const userFields = Object.keys(lastUser)
    if (isUserValid(userFields)) {
      validUsersCount++
      lastValidUsername = lastUser.usr
    }
    lastUser = {}
  })
  return validUsersCount > 0 ? `${validUsersCount}${lastValidUsername}` : 'No users found'
}
