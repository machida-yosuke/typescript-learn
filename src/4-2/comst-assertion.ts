const tuple1 = [false, 1, 2] as [false, 1, 2] //const tuple1: [false, 1, 2]
const tuple2 = [false, 1, 2] as const //const tuple2: readonly [false, 1, 2]

const a = 'a' // const a: "a"
let b = a //let b: string

const A = 'A' as const // const A: "A"
let B = A // let B: "A"

function increment() {
  return { type: 'INCREMENT' }
}

function decrement() {
  return { type: 'DECREMENT' } as const
}

const x1 = increment()
x1.type = '1'

const y1 = decrement()
// error
// y1.type ='1'

