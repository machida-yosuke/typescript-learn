//function wait(d: number): Promise<unknown>
// function wait(d: number) {
//   return new Promise((resolve) => setTimeout(() => resolve('test'), d))
// }
// wait(1000).then((res) => console.log(res))

//unction wait(d: number): Promise<string>
// function wait(d: number): Promise<string> {
//   return new Promise((resolve) => setTimeout(() => resolve('test'), d))
// }

// wait(1000).then((res) => console.log(res))

//unction wait(d: number): Promise<string>
function wait(d: number) {
  return new Promise<string>((resolve) => setTimeout(() => resolve('test'), d))
}

wait(1000).then((res) => console.log(res))

// function queue(): Promise<string>
async function queue() {
  const m = await wait(100)
  return m
}

function waitThenString(d: number) {
  return new Promise<string>((resolve) =>
    setTimeout(() => resolve(d.toString()), d)
  )
}

function waitThenNumnber(d: number) {
  return new Promise<number>((resolve) => setTimeout(() => resolve(d), d))
}

// function waitAll(): Promise<[string, string, number]>
function waitAll() {
  return Promise.all([
    waitThenString(1000),
    waitThenString(1000),
    waitThenNumnber(1000),
  ])
}

// function waitRace(): Promise<string | number>
function waitRace() {
  return Promise.race([
    waitThenString(1000),
    waitThenString(1000),
    waitThenNumnber(1000),
  ])
}

async function all() {
  const a = await waitAll()
  const b = await waitRace()

  console.log(a)
  console.log(b)
}

all()
