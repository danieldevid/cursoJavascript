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
   falar () {
      return 'Au Au Au '
   }
 }

 console.log(new Cachorro().falar())