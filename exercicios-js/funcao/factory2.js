function criaProduto (nome, preco) {
    return {
        nome, 
        preco, 
        desconto: 0.1

    }
}

console.log(criaProduto('Carteira',50))
console.log(criaProduto('Computador',3000.50))