// comprendre
// pipe(
//   '{"name": "Joe"}',
//   F.tryCatch<string, User>(JSON.parse),
//   R.map(user => user.name),
//   R.getWithDefault('oops'),
// ) // → 'Joe'
