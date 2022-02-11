let s1: 'test' = 'test'
let s2: string = s1
let s3: string = 'test'
// error
// let s4:'test'= s3

let n1: 0 = 0
let n2: number = n1
let n3: number = 0
// error
// let n4: 0 = s3

let a1: any = false
let a2: string = a1
let a3 = a1 as number

let un1: unknown = 'test'
// error
// let un2:string = un1
let un3: number = un1 as number
console.log(typeof un1)

const w1 = '0'
const w2 = '0' as string
// error
// const w3 = 0 as string
const s4 = '0' as {}

let o1: {} = 0
let o2: {} = '1'
let o3: {} = false
let o4: {} = {}

// error
// let o1: object = 0
// let o2: object = '1'
// let o3: object = false

// let o4: object = {}

//keyofは{}型のプロパティを抽出する
type K0 = keyof {} //type K0 = never
type K1 = keyof { k: 'k' } //type K1 = "k"
type K2 = keyof 0 //type K2 = "toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString"
type K3 = keyof '1' // type K3 = number | typeof Symbol.iterator | "toString" | "charAt" | "charCodeAt" | "concat" | "indexOf" | "lastIndexOf" | "localeCompare" | "match" | "replace" | "search" | "slice" | ... 35 more ... | "matchAll"
type K4 = keyof false // type K4 = "valueOf"f

let oo1 = { p1: 0 }
let oo2 = { p1: 'test' }

// error
// oo1 = oo2
// oo2 = oo1

let ooo1 = { p1: 'test' }
let ooo2 = { p2: 'test' }
// error
// oo1 = oo2
// oo2 = oo1

let oooo1 = { p1: 'test' }
let oooo2 = { p1: 'test', p2: 0 }
oooo1 = oooo2
// error
// oooo2 = oooo1

let ooooo1 = {}
let ooooo2 = { p1: 'test' }
ooooo1 = ooooo2
// error
// ooooo2 = ooooo1

let fn1 = (a1: number) => {}
let fn2 = (a1: string) => {}
// error
// fn1 = fn2
// fn2 = fn1

// 引数が多いほうに代入可能
let fun1 = (a: number) => {}
let fun2 = (a: number, s: string) => {}
// error
// fun1 = fun2
fun2 = fun1



// class
// インスタンスのメンバーが比較対象
type Gender = '1'|'2'
class Animal {
  feet: number = 4
  constructor(name: string, numFeet: number) {}
}

class Human{
    feet: number = 4
    hands:number = 2
    constructor(name:string, gender:Gender){}
}

let animal = new Animal('dog', 4)
let human = new Human('taro', '1')

// error
// human = animal

animal = human


