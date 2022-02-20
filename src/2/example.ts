function expo2(amount: number): number {
  return amount ** 2
}

const value = expo2(1000)
const withTax = value * 1.1

console.log(expo2(1000))

// error
// console.log(expo2('1000'));
