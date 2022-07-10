const div  = (dividindo, divisor) => {
    let result = Math.floor(dividindo/divisor)
    console.log('A divisão = '+ result )
    console.log('O resto = '+ dividindo % divisor)
}

div (13,5)