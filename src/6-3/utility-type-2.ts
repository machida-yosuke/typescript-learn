// 再帰的なutilty types

interface User {
  name: string
  age: number
  gender: 'male' | 'female' | 'other'
  birth: {
    day: Date
    place?: {
      countory?: string | null
      state?: string
    }
  }
}
// isPrimitive
// objectおよびarrayの型に該当するか否かの判断

type Unbox<T> = T extends { [k: string]: infer U }
  ? U
  : T extends (infer U)[]
  ? U
  : T
type isPrimitive<T> = T extends Unbox<T> ? T : never

// DeepReadonly
// 再帰的にReadOnlyする

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends isPrimitive<T[P]>
    ? T[P]
    : DeepReadonly<T[P]>
}
type DeepReadonlyWrapUser = DeepReadonly<User>

// DeepRequired
// 先的にRequireにする
// -? で明示的に ? を除去しています。
type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends isPrimitive<T[P]> ? T[P] : DeepRequired<T[P]>
}
type DeepRequiredWrapUser = DeepRequired<User>

// DeepNonnulltable
// 再帰的にNonNulltableにする

type DeepNonNulltable<T> = {
  [P in keyof T]-?: T[P] extends isPrimitive<T[P]>
    ? Exclude<T[P], null | undefined>
    : DeepNonNulltable<T[P]>
}

type DeepNonNulltableWrapUser = DeepNonNulltable<User>
