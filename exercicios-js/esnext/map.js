const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('angular').framework)

const chavesVariadas = new Map ([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) 
// Função que diz se o elemento está contido nesse map .has 

chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) 
// size quantifica quantos elementos tem no map 
chavesVariadas.set(123, 'a')
chavesVariadas.set(123,'b')
chavesVariadas.set(152,'b')
console.log(chavesVariadas)

