let stringPontuacao ="30, 40, 20, 4, 51, 25, 42, 38, 56, 0"


const avaliaPontuacao = (stringPontuacao) => {
    let pontuacao = stringPontuacao.split(', ')
    let qtdQuebraRecordes = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacao[0]
    let menorPontuacao = pontuacao[0]
    
    for (let i = 1; i < pontuacao.length; i++) {
        if (pontuacao[i] > maiorPontuacao) {
            maiorPontuacao = pontuacao[i]
            qtdQuebraRecordes++
        } else if (pontuacao[i] < menorPontuacao ) {
            menorPontuacao = pontuacao[i]
            piorJogo =i + 1
        }
    }
    return[qtdQuebraRecordes, piorJogo]

}

console.log(avaliaPontuacao(stringPontuacao))