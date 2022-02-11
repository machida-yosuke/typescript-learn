//const let 型推論
let l_user = 'Taro'
let l_value = 0
let l_flag = false

//error
// user = 1

const c_user = 'Taro'
const c_value = 0
const c_flag = false

const windeningZero = 0 // const windeningZero: 0
const nonWindeningZero: 0 = 0 //const nonWindeningZero: 0
const asNowWindeningZero = 0 as 0 //const asNowWindeningZero: 0

let zeroA = 0
let zeroB = windeningZero
let zeroC = nonWindeningZero
let zeroD = asNowWindeningZero

const zeros = {
  zeroA,
  zeroB,
  zeroC,
  zeroD,
}

const wideningValue = 'value'
const nonWideningValue: 'value' = 'value'
const asNonWideningValue = 'value' as string

let valueA = 'value'
let valueB = wideningValue
let valueC = nonWideningValue
let valueD = asNonWideningValue
