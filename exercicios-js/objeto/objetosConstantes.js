// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'} // unica forma de "mudar" uma constante
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 {...}
//pessoa = {nome:'Ana'} uma constante só pode ser atribuida UMA VEZ 
Object.freeze(pessoa)  //COngelar o Objeto pessoa , não da mais pra mexer , CONGELADO
pessoa.nome ='Maria'
pessoa.end = 'Rua abc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)


const pessoaConstante = Object.freeze({nome: 'João'}) // Se fizer desse jeito do começo 
// quando quiser criar um Objeto imutavel 
pessoaConstante.nome ="maria"
console.log(pessoaConstante)