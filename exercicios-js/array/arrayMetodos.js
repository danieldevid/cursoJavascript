const pilotos = [ 'Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // retira o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') // Add um elemento no array
console.log(pilotos)

pilotos.shift()// retira o primeiro elemento 
console.log(pilotos)

pilotos.unshift('Hamilton') // Add um elemento na primeira possição do array [ -1 ]
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0 , 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // Massa quebro de novo :( kk
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array 
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)