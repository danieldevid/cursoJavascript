const triangulo = (a, b, c) => { 
    if (a <( b + c) && b < (a + c) && c < (a + b) ) {
        if (a == b &&  b == c ){
            console.log('triangulo equilátero')
        }
        else if (a == b || a == c || c == b) {
            console.log('Triângulo isóceles')
        }
        else {
            console.log('Triângulo Escaleno')
        }
    }
    else {
        console.log('As medidas não formam um triângulo')
    }
}

triangulo(6,7,10)
triangulo(8,9,16)
triangulo(8,8,18)
triangulo(8,8,8)
triangulo(5,10,9)
triangulo(10,10,9)