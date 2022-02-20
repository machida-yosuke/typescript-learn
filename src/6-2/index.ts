// conditional types
// 型で条件分岐させる
// 三項演算と同じ

type isString<T> = T extends string ? true : false
type X = isString<'test'>
type Y = isString<0>

const x: X = true

interface Properties {
  name: string
  age: number
  flag: boolean
}

type IsType<T, U> = {
  // T　のキーを取得しオブジェクトにする
  // Tの中のkeyのvalueを見て型を取得
  // 取得した型がgenericsでしていた型Uとおなじならtureにする
  [K in keyof T]: T[K] extends U ? true : false
}

type isString2 = IsType<Properties, string>
// type isString2 = {
//   name: true;
//   age: false;
//   flag: false;
// }

type isnNumber = IsType<Properties, number>
// type isnNumber = {
//   name: false;
//   age: true;
//   flag: false;
// }

type isBoolean = IsType<Properties, boolean>
// type isBoolean = {
//   name: false;
//   age: false;
//   flag: true;
// }

// 条件に適合した方を取得する
interface Properties2 {
  name: string
  age: number
  waik: () => void
  jump: () => Promise<void>
}

type Filter<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never
}[keyof T]

type StringKeys = Filter<Properties2, string> // type NumberKeys = "age"
type NumberKeys = Filter<Properties2, number> //type NumberKeys = "age"
type FunctionKeys = Filter<Properties2, Function> // type FunctionKeys = "waik" | "jump"
type PromiseKeys = Filter<Properties2, () => Promise<any>> //type PromiseKeys = "jump"
const stringkey: StringKeys = 'name'

// 一致するプロパティ名称から型を生成
// 組み込みUtilty typeのpickを使う

type StringKeys2<T> = Filter<T, string>
type NumberKeys2<T> = Filter<T, number>
type FunctionKeys2<T> = Filter<T, Function>
type PromiseKeys2<T> = Filter<T, () => Promise<any>>

type Strings = Pick<Properties2, StringKeys2<Properties2>>
// type strings = {
//   name: string;
// }
const string: Strings = { name: '' }

type Numbers = Pick<Properties2, NumberKeys2<Properties2>>
// type numbers = {
//   age: number;
// }

type Functions = Pick<Properties2, FunctionKeys2<Properties2>>
// type functions = {
//   waik: () => void;
//   jump: () => Promise<void>;
// }

// 条件分岐で得る確約
interface DeepNest {
  deep: {
    nest: {
      value: string
    }
  }
}

const deepNest: DeepNest = {
  deep: {
    nest: {
      value: '1',
    },
  },
}

interface shallowNest {
  shallow: { value: string }
}

interface Properties3 {
  deep: DeepNest
  shallow: shallowNest
}

type Salvage<T extends DeepNest> = T['deep']['nest']['value']
type DeepDiver<T> = {
  [K in keyof T]: T[K] extends DeepNest ? Salvage<T[K]> : never
}[keyof T]

const salvage: Salvage<DeepNest> = '1'

type X1 = DeepDiver<Properties3>

// infer
// 関数の戻り値から型を抽出する

// (...args: any[]) => infer R
// // ↓
// (num: number) => string

function greet() {
  return 'hello'
}

type Return<T> = T extends (...arg: any[]) => infer U ? U : never
type R = Return<typeof greet>

// 引数の型抽出
function greet2(name: string, age: number) {
  return `hello ${name} ${age}`
}

type A1<T> = T extends (...arg: [infer U, ...any[]]) => any ? U : never
type A2<T> = T extends (...arg: [any, infer U, ...any[]]) => any ? U : never
type AA<T> = T extends (...arg: infer U) => any ? U : never

type B = typeof greet2 // type B = (name: string, age: number) => string
type B2 = typeof greet // type B2 = () => string
type X2 = A1<typeof greet2>
type X3 = A2<typeof greet2>
type X4 = AA<typeof greet2>

async function async_greet() {
  return 'hello'
}

type ResolveArg<T> = T extends () => Promise<infer U> ? U : never
type X5  = typeof async_greet // type X5 = () => Promise<string>
type X6 = ResolveArg<typeof async_greet> // type X6 = string