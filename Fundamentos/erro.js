function tratarErroELancar(){
    throw "Deu erro Merda"
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratarErroELancar(e)
    } 
}

const obj = {
    name: "João"
}

imprimirNomeGritado(obj)