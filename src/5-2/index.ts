//declaraton space
//宣言空間

const test = {}
interface Test {}
namespace Test {}

const value1 = 'test'
let value2 = 'test'

// function greet() {} // error
// const greet = 'hell' // error

// type宣言空間
// interface or type

// interfaceは型の拡張が可能
interface IUser {
  name: string
}

interface IUser {
  age: number
}

//結合されて以下になる　同じ型の名前でも問題ない
// interface IUser {
//     name: string
//     age: number
// }

const user: IUser = { name: '', age: 0 }

//error
// type User = {
//   name: string
// }
// type User = {
//   age: number
// }

// Namespaceの空間宣言
// ドットで繋ぐ型の参照
interface ITest {
  value: string
}

namespace ITest {
  export interface Properties {
    name: string
  }
}

const nameTest: ITest = {
  value: 'value',
}

const properties: ITest.Properties = {
  name: 'taro',
}

// declaration type

// interfacの結合
//メンバーの型を書き換えるとエラー　ただし関数は型がオーバーライド
//open-ended とは同じ装飾名の宣言があった時、自動的にマージされる性質のことです。
interface Bounds {
  width: number
  height: number
  move(amount: string): string
}

// interface Bounds {
//   width: string
//   height: number
// }

interface Bounds {
  left: number
  top: number
  move(amount: number): string
}

const bounds: Bounds = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  move: (amount: string | number) => `${amount}`,
}

// namespaceの結合
namespace Publisher {
  export const name = ''
  interface Appearance {
    color: '1' | '2' | '3'
  }
  export interface Book {
    title: string
    appearance: Appearance
  }
}

namespace Publisher {
  export interface CookingBook extends Book {
    category: 'cooking'
    // appearance: Appearance // error
  }
}

namespace Publisher {
  export interface Book {
    lang: 'jp'
  }

  export interface TravelBook extends Book {
    category: 'travel'
  }
}

const cookingBook :Publisher.CookingBook = {} as Publisher.CookingBook
const travelBook :Publisher.TravelBook = {} as Publisher.TravelBook


