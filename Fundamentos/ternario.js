//const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado"
//
//console.log(resultado(7.1))
//console.log(resultado(6.9))

function resultado(nota) {
    return nota >=7 ? "Aprovado" : "Reprovado"
}

const resultado2 = nota => {
    return nota >=7 ? "Aprovado" : "Reprovado"
}

console.log(resultado(2))
console.log(resultado2(8))