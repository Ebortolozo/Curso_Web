const fabricantes = ["Mercedes", "Audi", "BMw"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir);

// Pelo o que eu entendi, Para cada elemento vai fazer a Função