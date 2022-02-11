type User = {
  gender: string
  [k: string]: any
}

type UserA = User & { name: string }

type UserB = User & { age: number }

function isUserA(user: UserA | UserB): user is UserA {
  return user.name != undefined
}

function isUserB(user: UserA | UserB): user is UserB {
  return user.age != undefined
}

console.log(isUserA({ gender: '', age: 0 })) // false
console.log(isUserB({ gender: '', age: 0 })) // true

function getUserType(user: any) {
  if (isUserA(user)) {
    return 'A'
  }
  if (isUserB(user)) {
    return 'B'
  }

  return 'unknow'
}
const x = getUserType({name:''})
console.log(x);

