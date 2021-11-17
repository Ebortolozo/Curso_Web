// Factory com parametros

function criarProduto(nome, preco, desconto = 0.1) {
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto("PS3", 900))
console.log(criarProduto("iPad", 1199.32))