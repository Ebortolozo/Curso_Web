function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo Privado
    let velocidadeAtual = 0

    // Metodo Público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Metodo Publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(300, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(`A velocidade do Ferrari é de ${ferrari.getVelocidadeAtual()} Km/H`)

console.log(typeof Carro)
console.log(typeof ferrari)
