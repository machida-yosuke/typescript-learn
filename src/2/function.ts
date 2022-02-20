function getPriceLabel(amount: number, tax: number) {
  return `${amount * tax}`
}

function log(message: string) {
  console.log(message)
}

// function getStringValue(value: number, prefix?: string): string {
//   if (prefix === undefined) return value
//   return `${value}${prefix}`
// }

function getScore(score: number) {
  if (score > 0) return null
  return score
}

function getScoreAmount(score: 'A' | 'B') {
  switch (score) {
    case 'A':
      return 100
    case 'B':
      return 60
  }
}
