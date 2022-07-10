//closures é o escopo criado quando uma funcção é declarada
//Esse escopo permite a uma função acessar e manipular varia]áveis externas á função 

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro () {
        return x
    }
    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao())