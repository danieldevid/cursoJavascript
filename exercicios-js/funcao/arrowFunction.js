 let dobro = function (a) {
    return  2 * a 
 }                               // do jeito normal 




dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a // return está implicito
console.log(dobro(Math.PI))


let ola = function() {return 'ola '}

ola = () => 'Ola' // se você tem uma função sem parâmentros tem que colocar os ()

ola = _ => 'Olá' //possui sim um parametro

console.log(ola())


somar = (a, b) => {
    return a + b 
  
}

console.log(somar(22, 22))

