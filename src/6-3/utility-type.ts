// 組み込みutilty type
interface User {
  name: string
  age: number | null
  gender: '1' | '2'
  birthplace?: string
}

// readonly type
type ReadonlyWrapUser = Readonly<User>

// type ReadonlyWrapUser = {
//   readonly name: string;
//   readonly age: number | null;
//   readonly gender: '1' | '2';
//   readonly birthplace?: string;
// }

// partial
// 全てoptial型に変更する
type PartialWrapUser = Partial<User>
// type PartialWrapUser = {
//   name?: string;
//   age?: number | null;
//   gender?: '1' | '2';
//   birthplace?: string;
// }

// Require型
//全てoptial型を外す
type RequireWrapUser = Required<User>

// type RequireWrapUser = {
//   name: string;
//   age: number | null;
//   gender: '1' | '2';
//   birthplace: string;
// }

// Record
// 第2Ggenericsで指定した名称でプロパティ型で第１Genericsの要素からあたらしいオブジェクトを生成
type UserRecord = Record<'user', User>
// type UserRecord = {
//   user: User;
// }

// Pick型
// 第二引数Genericsの名称のプロパティを使ったて第二Genericsのオブジェクトから抽出する
type UserGender = Pick<User, 'gender'>
// type UserGender = {
//   gender: '1' | '2';
// }

// Omit
// 第二引数Genericsの名称のプロパティを使ったて第二Genericsのオブジェクトから除外する
type withoutBirthPlace = Omit<User, 'birthplace'>
// type withoutBirthPlace = {
//   name: string;
//   age: number | null;
//   gender: '1' | '2';
// }

// Exclude
// 二つの型の共通部分を消す
type Dog = {
  name: String
  gender: '1' | '2'
}

type ExcludeDogUser = Exclude<Dog, User>
// type ExcludeDogUser = {
//   name: String;
//   gender: '1' | '2';
// }

type FunctionExclude = Exclude<'a' | (() => void), Function>
//type FunctionExclude = "a"

// NonNulltable
// nullとundefaindを除く
type NonNulltableTest = NonNullable<string | null | undefined>
//type NonNulltableTest = string

// RetrunType
// 関数の戻り値の方を抽出
type RetrunTypeFuncString = ReturnType<() => string>
//type RetrunTypeFuncString = string

// error
// type RetrunTypeString = ReturnType<string>

// instanceType
// コンストラクター関数型のインスタンス型を取得
class C {
  x = 0
  y = 0
}
type TypeC = InstanceType<typeof C>
const n = { x: 1, y: 1 } as TypeC

// TypeName
// genericsに互換性のある型が適用された場合ストリングリテラルを返す

type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'Function'
  : 'object'

type TypeNameString = TypeName<string>
type TypeNameBoolean = TypeName<true>

// FunctionProperties
// object型から関数のみのプロパティをだして、その名所をもとに新しい方を作る
interface Part {
  id: number
  name: string
  subparts: Part[]
  updatePart(newName): void
}

type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>

type FunctionPart = FunctionProperties<Part>
// type FunctionPart = {
//   updatePart: (newName: any) => void;
// }

// NonFunctionProperties
//関数以外を抽出する

type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T]

type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>
type NonFuntionName = NonFunctionProperties<Part>
// type NonFuntionName = {
//   id: number;
//   name: string;
//   subparts: Part[];
// }

// Unpacked
// 配列要素　関数戻り値　promise.resole引数型を取得する

type Unpack<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T

type Unpack0 = Unpack<string> //type Unpack0 = string
type Unpack1 = Unpack<() => string> //type Unpack1 = string
type Unpack2 = Unpack<Promise<string>> //type Unpack2 = string
type Unpack3 = Unpack<number[]> //type Unpack3 = number

class Book {
  constructor(public code: number, public name: string) {}
}

const orderedBook = [
  new Book(1, 'ゴミでも分かるTypeScript'),
  new Book(2, 'TypeScriptマガジン 2019春号'),
  new Book(2, 'TypeScriptマガジン 2019冬号'),
]

class Ticket {
  constructor(public code: string, public name: string) {}
}

const orderedTicket = [
  new Ticket('23100-mokumoku', 'TS Nagoyaもくもく会 第1回'),
  new Ticket('23100-mokumoku', 'TS Nagoyaもくもく会 第2回'),
  new Ticket('13101-tsconf', 'TS Conf Tokyo'),
]

type Code<T> = T extends { code: infer U } ? U : never
type BookCode = Code<Book>
type TicketCode = Code<Ticket>
