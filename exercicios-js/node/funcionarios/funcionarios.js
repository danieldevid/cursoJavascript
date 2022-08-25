const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const getchina = funcionarios => funcionarios.pais
 
    console.log(funcionarios.map(getchina))
})

