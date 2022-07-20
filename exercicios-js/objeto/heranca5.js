console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Muito massa '.reverse())


Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5, 6].first())
console.log(['a', 'b', 'c' ,'d'].first())

String.prototype.toString = function () {
    return 'Lascou tudo'
}
console.log('Escola Cod3r'.reverse())  // Nunca tente isso, tem efeito colaterais 
// não faça isso e não substitua comportamentos que já existam dessa forma
//global porque você vai gerar um efeito catastrófico e porque outras outras APIs outras funções esperam
//receber a função de Justin padrão da API do JavaScript que você fazer isso é um risco enorme para a
//sua aplicação