const soma  = function (a, b ) { // Função Anonima 
    return a + b 
}
const imprimirResultado = function (a, b, opreracao = soma) {
    console.log(opreracao(a, b))

}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4,function (a, b ) { // função direta
    return a - b 
} )

imprimirResultado( 3, 4, (a, b) => a * b) // arrow function , note que os parametros  , 
//e é Obrigatorio ser anonima

const pessoa = {
    falar: function() {  
        console.log( 'Ola ')
    }
}

pessoa.falar()