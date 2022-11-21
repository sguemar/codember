const REQUIRED_USERS_FIELDS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']

const getUsersData = (input) =>
  input
    // Separate each user
    .split('\n\n')
    // Format users removing newlines and dividing by fields
    .map(user => user.replaceAll('\n', ' ').split(' '))

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
