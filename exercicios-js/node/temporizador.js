const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 8 * * 7', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando  Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 6)]
regra.hour = 8
regra.second = 30

// setImmediate
// setInterval

const tarefa2 = schedule.scheduleJob( regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})