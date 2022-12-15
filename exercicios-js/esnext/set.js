const { set } = require("lodash")

// não aceita repetição/não indexada
const times = new Set()
times.add('Santa Cruz')
times.add('Sport')
times.add('Náutico').add('Paisandu')
times.add('Santa Cruz')
console.log(times)

console.log(times.size)
console.log(times.has('Sport'))
console.log(times.delete('Sport'))
console.log(times.has('Sport'))

const nomes = ['Daniel', 'Carlos','Joyce', 'Alan','Daniel' ]
const nomesSet = new Set(nomes)
console.log(nomesSet)