const soma = ( a , b ) => a + b / 2

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
   valores.forEach((valores, resultado) => {
      
   })
}