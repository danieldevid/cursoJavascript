//Armazenando uma funcao em uma variavel 

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)

// Armazenando uma funcao arrow em uma variavel
const soma =(a, b) => {
    return a +b 
}

console.log(soma(10,20))

// retorno implícito
const subtracao = (a, b) => a -b 
console.log(subtracao(2, 3))

const imprimir2 =a => console.log(a)

imprimir2("OII eae") 