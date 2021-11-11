var a = 3
let b = 4

console.log(a, b) // 3 4

var a = 30
let b = 40

console.log(a, b) // Erro let não pode ser reedeclarada usando let.

var a = 30
b = 40 

console.log(a, b) // 30 40

const c = 5
c = 50

console.log(c) // Erro const não pode ser reedclarada