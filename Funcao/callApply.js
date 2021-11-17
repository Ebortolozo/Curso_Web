function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${imposto} ${this.preco} ${this.desc}`
}

const produto = {
    nome: "Notebook",
    preco: 4300,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49.999, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, "$"))
console.log(getPreco.apply(carro, [0.17, "$"]))