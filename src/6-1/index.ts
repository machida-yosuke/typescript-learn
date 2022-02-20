// generics
// 型の定義を遅延させる。型が可変になる

interface Box<T> {
  value: T
}

const box = { value: '1' }
const box1: Box<number> = { value: 1 }

// error
// const box2: Box<string> = { value: 1 }

// 型の初期値
interface Box1<T = number> {
  value: T
}
const box1_1: Box1 = { value: 1 }
const box1_2: Box1<string> = { value: '1' }

// extendsで制約をかける
interface Box2<T extends string | number> {
  value: T
}

const box2_1: Box2<number> = { value: 1 }
const box2_2 = { value: '1' }
// error
// const box2_3: Box2<boolean> = { value: true }

//関数generics
function boxed<T>(props: T) {
  return { value: props }
}
const boxed1 = boxed('1')
const boxed2 = boxed(1)
const boxed3 = boxed(false)
const boxed4 = boxed(null)

const boxed5 = boxed(false as boolean | null)
const boxed6 = boxed<string | null>(null)
//error
// boxed6.value.toUpperCase()

// 変数に格納した関数の場合
const fun_boxed1 = <T>(props: T) => ({
  value: props,
})

const fun_boxed = fun_boxed1<string>('1')

// extendsによる制約
function boxed_2<T extends string>(props: T) {
  return { value: props }
}

const boxed2_1 = boxed_2('1')

//error
// const boxed2_2 = boxed_2(0)
// const boxed2_2 = boxed_2<number>(1)

interface Props {
  amount: number
}

function boxed_3<T extends Props>(props: T) {
  return { value: props.amount.toFixed(1) }
}

const boxed3_1 = boxed_3({ amount: 1 })
// error
// const boxed3_2 = boxed_3({value:1})
// const boxed3_3 = boxed_3({ amount: '1' })

// 複数のgenerics
// keyof lookup

function pick<T, K extends keyof T>(props: T, key: K) {
  return props[key]
}
const obj = {
  name: 'taro',
  amount: 0,
  flag: false,
}

const value1 = pick(obj, 'name')
const value2 = pick(obj, 'amount')
// error
// const value3 = pick(obj, 'test')

// class generics
class Person<T extends string> {
  name: T
  constructor(name: T) {
    this.name = name
  }
}

const person1 = new Person('1')
// error
// const person2 = new Person<number>(1)

interface PersonProps {
  name: string
  age: number
  gender: 'male' | 'female' | 'other'
}

class Person1<T extends PersonProps> {
  name: T['name']
  age: T['age']
  gender: T['gender']
  constructor(props: T) {
    this.name = props.name
    this.age = props.age
    this.gender = props.gender
  }
}

const person1_1 = new Person1({
  name: '',
  age: 1,
  gender: 'female',
})
