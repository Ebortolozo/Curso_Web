//Crie uma função que irá receber dois valores, o dividendo e o divisor.
// A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.

function divisao(dividendo, divisor) {
    const quociente = Math.floor(dividendo / divisor)
    const resto = dividendo % divisor
    return `Resultado: ${quociente}, resto: ${resto}`
}

console.log(divisao(4, 2))
console.log(divisao(5, 2))
console.log(divisao(15, 2))