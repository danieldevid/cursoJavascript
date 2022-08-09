const alunos = [
    { nome:'João', nota: 7.3, bolsista: false },
    { nome:'Maria', nota: 9.2,bolsista: true },
    { nome:'João', nota: 9.8, bolsista: false },
    { nome:'João', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsista?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista 
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
