const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1, peso2) // 1 2
console.log(Number.isInteger(peso1)) //True
console.log(Number.isInteger(peso2)) //True

const avaliacao1 = 9.324
const avaliacao2 = 6.436

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // 7.40
console.log(media.toString(2)) // em Binário
console.log(typeof media) // number
console.log(typeof Number) // function