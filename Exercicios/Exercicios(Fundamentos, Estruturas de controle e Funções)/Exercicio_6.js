/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capitalInicial, taxaDeJuros, TempoAplicado){
    return `O juros Simples ficará igual a: R$ ${capitalInicial + (capitalInicial * taxaDeJuros * TempoAplicado)}`
}

function jurosComposto(capitalInicial, taxaDeJuros, TempoAplicado) {
    return `O juros Composto ficará igual a: R$ ${capitalInicial * (1 + taxaDeJuros) ** TempoAplicado}`
}


console.log(jurosSimples(1000, 2.5/100, 2))
console.log(jurosComposto(1000, 2.5/100, 2))


console.log(jurosSimples(100, 10/100, 2));
console.log(jurosComposto(100, 10/100, 2));
