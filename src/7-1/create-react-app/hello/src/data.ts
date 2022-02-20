export const rows: Rows = [
  {
    id: 'up20-un30',
    age: '20-30',
    ansewers: [0.16, 0.22, 0.37, 0.23],
  },

  {
    id: 'up30-un40',
    age: '30-40',
    ansewers: [0.16, 0.22, 0.37, 0.23],
  },

  {
    id: 'up50-un60',
    age: '50-60',
    ansewers: [null, null, null, null],
  },
]

export type Row = {
  id: string
  age:string,
  ansewers: number[]
}

export type Rows = Row[]
