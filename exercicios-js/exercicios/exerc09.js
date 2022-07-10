const avaliacao =(nota) => {
    let notaCorrigida = arredondamento(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`)
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`)
    }
}

const arredondamento = (nota) => {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota 
    }
}

avaliacao(38)
avaliacao(100)
avaliacao(28)
avaliacao(18)