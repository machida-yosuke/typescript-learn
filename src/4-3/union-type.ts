type UserA = {
  gender: 'male'
  name: string
}

type UserB = {
  gender: 'female'
  age: number
}

type UserC = {
  gender: 'other'
  gruaduate: string
}

function judgeUserTyoe(user: UserA | UserB | UserC) {
  switch (user.gender) {
    case 'male':
      return 'userA'

    case 'female':
      return 'userB'

    case 'other':
      return 'userC'

    default:
      return 'Never'
  }
}

