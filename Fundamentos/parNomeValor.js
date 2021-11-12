// par nome/valor

const saudacao = "Opa" // Contexto léxico 1

function exec() {
    const saudacao = "Falaaa"  // contexto 2
    return saudacao
}

// Objeto são grupos alinhados de pares nome/valor

const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua xing xong",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)