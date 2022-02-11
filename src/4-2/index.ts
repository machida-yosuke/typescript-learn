// ダウンキャスト　tsの型推論より実装側の方が型に詳しいという前提にできる
// だだし型のエラーを検知できなくなる
const defaultTheme = {
  back: 'orange' as 'orange',
  border: 'red' as 'red',
}

// error
// const defaultTheme = {
//     back:'orange' as false,
//     border:'red' as 1
// }

const empty = {} as { value: 'value' }
const fiction = empty.value //error

function toNumber(value: string): any {
  return value
}

const aa: number = toNumber('1,1000')
aa.toFixed(1) // error

type User1 = {
  name: string
  [k: string]: any //インデックスシグネチャ プロパティを自由に追加したい場合
}

// error
// type User2 = {
//     name:string
//     [k:string]:number
// }
type User2 = {
  name: string
  [k: string]: number | string
}

const userA: User1 = {
  name: 'Taro',
  age: 26,
}

userA.test = 1

type Question = 'a' | 'b' | 'c'
type Answer = '1' | '2' | '3'
type User3 = {
  name: string
  enquete: { [k: string]: Answer | undefined }
}

const UserB: User3 = {
  name: '',
  enquete: {
    a: '1',
    b: '2',
    //   error
    //   'c':1
  },
}

const x = UserB.enquete['a']
const y = UserB.enquete['c']

type User4 = {
  name: string
  enquete: { [K in Question]?: Answer }
}

const UserC: User4 = {
  name: '',
  enquete: {
    a: '1',
    b: '2',
  },
}
// error
const z = UserC.enquete['e']

interface User5 {
  [k: string]: any
}

const userC: User5 = {
  name: '',
  a: () => {},
}

interface Functions {
  [k: string]: Function
}

const functions: Functions = {
  // error
  // nama:''
  a: () => {},
}

interface RetrunPromise {
  [k: string]: () => Promise<any>
}

const retrunPromise: RetrunPromise = {
  // name:''
  a: async () => {},
}

import constants from './constants'

const n = constants
console.log(n)

function greet(): any {
  console.log('hello')
}
const m = greet()
// runtime error
console.log(m.toUpperCase())

function greet1() {
  console.log('hello')
}

const m1 = greet1()
// error
// console.log(m1.toUpperCase());


