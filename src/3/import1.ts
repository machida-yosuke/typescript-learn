import { value, retrunFalse, label } from './import'
console.log(value, retrunFalse, label)

import('./import').then((module) => {
  const amount = module.value
})

async function main() {
  const { value } = await import('./import')
  const amount = value
}
