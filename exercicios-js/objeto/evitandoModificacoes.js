// Object.preventExtensions
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99 , tag: 'promoção'
})

console.log('Exetensível:', Object.isExtensible(produto)) // teste 


produto.nome = 'Borracha'
console.log(produto)
produto.descrisao ='Borracha escolar branca'
console.log(produto)
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // Teste

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 12
console.log(pessoa)


//Object.freeze = selado + valores constantes

