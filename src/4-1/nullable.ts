// function getFormattedValue(value) {
//   return `${value.toFixed(1)}px`
// }

// console.log(getFormattedValue(0.1))
// console.log(getFormattedValue(0))

//Cannot read properties of null (reading 'toFixed')
// console.log(getFormattedValue(null))

function getFormattedValue(value: number | null) {
  if (value === null) return 'px'
  return `${value.toFixed(1)}px`
}

console.log(getFormattedValue(0.1))
console.log(getFormattedValue(0))
console.log(getFormattedValue(null))

function greet(name?: string) {
  if (name === undefined) return ''
  return `${name.toUpperCase()}`
}

console.log(greet('aa'))
console.log(greet())

function getFormattedValue2(value: number, unit: string | null = null) {
  if (unit === null) return `${value.toFixed(1)}}`
  return `${value.toFixed(1)}${unit.toUpperCase()}`
}

console.log(getFormattedValue2(1000))
console.log(getFormattedValue2(1000, 'kg'))

type User = {
  age?: number
  name?: string
}

function registerUser(user: User) {
  return user
}

const maybeUser = {
  age: 26,
  name: 'taro',
  gender: 'male',
}

const notUser = {
  gender: 'male',
  graduate: 'tokyo',
}

console.log(registerUser(maybeUser))
console.log(registerUser({}))

// error
// console.log(registerUser(notUser))
// console.log(registerUser())
// registerUser({ age: 26, name: 'taro', gender: 'male' })
registerUser({ ...{ age: 26, name: 'taro', gender: 'male' } })

type State = {
  readonly id: number
  name: string
}

const state: Readonly<State> = { id: 1, name: '' }
//error
// state.id = 2
// state.name = ''

const frozenState = Object.freeze(state)
// frozenState.name = '1'
