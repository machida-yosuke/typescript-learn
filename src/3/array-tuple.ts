const a1 = [true, false]
const a2 = [0, 1, '1']
const a3 = [false, 1, '2']

const zero: 0 = 0
const one: 1 = 1
const z_o = [zero, one]
z_o.push(1)
// z_o.push(2)

const t1 = [false] as [boolean]
const t2 = [false, 1] as [boolean, number]
const t3 = [false, 1, '2'] as [boolean, number, string]

const v3_0 = t3[0]
const v3_1 = t3[1]
const v3_2 = t3[2]
// const v3_3 = t3[3]

t1.push(false)
// t2.push(a)

let list = ['1', '2', '3']
list.push('!')
console.log(list)

list = list.map((item) => item.toUpperCase())
console.log(list)

let message = list.reduce((prev, current) => `${prev}:${current}`)
console.log(message)

const list1 = [['1'], ['2'], ['3']]
const flat = list1.flat()

const obj = {
  foo: false,
  bar: 1 as 1,
  baz: '2' as '2',
}

obj.foo = true
obj.bar = 1
// obj.bar = 2
// obj.bar = 'true'
