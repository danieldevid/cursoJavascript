const imprimirResultado = function ( nota ) {
    if ( nota >= 7 ) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado( 4.5)
imprimirResultado (8.9)
imprimirResultado ('Epaa') //cuidado com as strings !!!

