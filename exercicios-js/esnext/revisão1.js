// let  const 

{
    var a = 2
    let b = 3
    
}

console.log(a) 
// variavel acoplada a um var não tem 
// escopo de bloco 
//console.log(b) // O contrario acontece aqui 
      //  Template String
const produto = 'iPad'
console.log(`${produto} é caro `)
 // Destructuring
const [l,e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2]
console.log(x,y)

const { idade: i, nome } = { nome:'Ana', idade: 9}
console.log(i, nome )