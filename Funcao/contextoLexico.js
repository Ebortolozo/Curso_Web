const valor = "Global"

function minhaFuncao() {
    //let valor = "Local"  Da local
    console.log(valor)
}

function exec() {
    const valor = "Local" //Da global
    minhaFuncao()
}

exec()