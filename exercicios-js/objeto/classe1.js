class Lancamento {
    constructor(nome = 'Genérioco', valor = 0) {
        this.nome = nome
        this.valor = valor  
    }

}

class CicloFinanceiro {
    constructor(mes, ano ) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0 
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
        
    }
}

const salario = new Lancamento ('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)
const contaAgua = new Lancamento('Agua', -50)
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz, contaAgua)
console.log(contas.sumario())