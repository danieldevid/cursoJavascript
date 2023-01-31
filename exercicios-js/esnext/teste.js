const { map, set, times } = require("lodash");

/*const soma = ( a , b ) => a + b / 2

//Operdaor rest
 function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
 }
console.log(total(1,3,4,5))


// Class 
class Animal {}
class Cachorro extends Animal {
   falar() {
      return 'Au AU AU '
   }
}
console.log(new Cachorro().falar())

// usar spread com objeto
const funcionario = { nome:'Maria', salario: 1234.56 }
const clone = { ativo:true, ...funcionario }
console.log(clone)
// usar spread com Array 
const grupoA = [ 'Daniel', 'Alan', 'Silvio']
const grupoFinal =  [ 'João', ...grupoA, 'Emersom']
console.log(grupoFinal)




function real (partes, ...valores) {
   const resultado = []
   valores.forEach((valor, indice) => {
      valor = isNaN(valor) ? valor: `R$ ${valor.toFixed(2)}`
      resultado.push(partes[indice],valor)
      
   })
   return resultado.join('')
}

const preco = 22.99
const precoParcela = 11

console.log(real `1x de ${preco} ou em 3x de ${precoParcela}`)



const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})
//console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)*/

const timeDePernambuco = new Set ()
timeDePernambuco.add('Santa Cruz ')
timeDePernambuco.add('Sport').add('Náutico')
console.log(timeDePernambuco)
timeDePernambuco.delete('Náutico')
console.log(timeDePernambuco)
console.log(timeDePernambuco.size) 
console.log(timeDePernambuco.has('Santa Cruz'))

const nomes = [ 'Daniel', 'Carlos', 'Joyce', 'Elaine','Elaine','Elaine']
const nomesSet = new Set(nomes)
console.log(nomesSet) // retirando assim as repetições 