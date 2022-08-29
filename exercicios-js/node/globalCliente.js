require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome ='Eita!'// O perigo de deixar em aberto no global
// Um modo de proteger isso seria com Object.freeze.
console.log(MinhaApp.nome)