type User = { name: string }
type UserA = User & { gender: '1' | '2' | '3' }
type UserB = User & { graduate: string }

const user: (UserA | UserB)[] = [
  { name: '', gender: '1' },
  { name: '1', graduate: '' },
]

const fileter = user.filter(
  (user: UserA | UserB): user is UserB => 'graduate' in user
)

console.log(fileter) // type UserB only

