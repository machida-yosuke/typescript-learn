//  独自
// Unbox
// オブジェクトの子ノードをUnionTypeで取得

type UnBox<T> = T extends { [K in keyof T]: infer U } ? U : never
type T = UnBox<{ a: 'a'; b: 2 }> //type T = "a" | 2

// UnionTolntersecdtion
// union typeをintersection typeにする

type UTI<T> = T extends any ? (args: T) => void : never
type UnionTolntersecdtion<T> = UTI<T> extends (args: infer I) => void
  ? I
  : never

type A_or_B = { a: 'a' } | { b: 'b' }
type A_and_B = UnionTolntersecdtion<A_or_B>

// NonEmptyList
// genericsに指定した型に該当する要素を最低でも一つかえす

type NonEmptyList<T> = [T, ...T[]]

const list1: NonEmptyList<string> = ['a', 'aa']

//error
// const list2:NonEmptyList<string> = []

//PickSet
// setの値型を取得

type PickSet<T> = T extends Set<infer I> ? I : never
const set = new Set([1, 2] as const)
type SetValue = PickSet<typeof set> // type SetValue = 2 | 1

// PickMapKey
// Mapのキーを取得する

const map = new Map([
  [0, 'foo'],
  [1, 'bar'],
] as const)

type PickMapKeys<T> = T extends Map<infer K, any> ? K : never
type MapKeys = PickMapKeys<typeof map> // type MapKeys = 0 | 1