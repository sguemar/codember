const REQUIRED_USERS_FIELDS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']

const getUsers = (input) =>
  input
    // Separate each user
    .split('\n\n')
    // Format users removing newlines and dividing by fields
    .map(user => user.replaceAll('\n', ' ').split(' '))
    // Create an object per user with their fields and values
    .map(user => Object.fromEntries(user.map(field => field.split(':'))))

const isValidUser = (user) => REQUIRED_USERS_FIELDS.every(field => Object.hasOwn(user, field))

export const removeBots = (input) => {
  if (typeof input !== 'string') throw new Error('parameter provided must be a string')

  const users = getUsers(input)
  const validUsers = users.filter(isValidUser)

  return validUsers.length > 0 ? `${validUsers.length}${validUsers.at(-1).usr}` : 'No users found'
}
