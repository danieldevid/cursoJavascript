const jurosSimples =(capital,taxa,temp) => {
    return capital + (capital * taxa * temp )
}

const jurosComposto = (capital, taxa, temp) => {
    return capital *(1 + taxa) ** temp
}

console.log("Juros Simples: " + jurosSimples(100,10 / 100, 2).toFixed(2))
console.log("Juros Simples: " + jurosComposto(100,10 / 100, 2).toFixed(2))