const porta = 3003

const express = require('express')
const app = express() 
const bancoDeDados = require('./bancoDeDados')
const { extend } = require('lodash')

app.use( express.json() )
const passoAqui = function(req, res, next ) {
    console.log('Passou por aqui ')
    next()
}
app.use(passoAqui)

app.get('/produtos', (req, res, next) => {
    res.send( bancoDeDados.getProdutos())
    
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)// JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)// JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto)// JSON
})

app.listen(porta, () => {
    console.log(` Servidor executando está porta ${porta}.`)
})