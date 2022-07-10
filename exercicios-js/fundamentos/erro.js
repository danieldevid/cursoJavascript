function tratarErroELancar(error) {
    //throw new Error('Erro de processamento')
    //throw 10
    //throw true
    //throw 'menssagem'
    throw {
        nome: error.name,
        msg: error.message,
        date: new date
    }
}

function imprimirNomeGritado(obj) {
    try {
        
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }finally {
        console.log('Final') // mesmo que de erro vai acionar 
    }
}


const obj = { name: 'Roberto'}
imprimirNomeGritado(obj)
