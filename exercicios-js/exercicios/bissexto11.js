function bissexto (ano) {
    if(ano % 4 ==0 && ano % 100 != 0 || ano % 400 == 0  ) {
        console.log(`O ${ano} é Bissexto`)
    } else {
        console.log(`${ano} Não é Bissexto `)
    }
}

bissexto(1988)
bissexto(2022)
bissexto(2100)
bissexto(2400)