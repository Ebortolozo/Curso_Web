const pessoa = {
    saudacao: "Bom dia!!!",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Pode dar conflito entre os paradigimas: funcional

const agoravaifalar = pessoa.falar.bind(pessoa) // bind = Amarrar o this para algum objeto
agoravaifalar()