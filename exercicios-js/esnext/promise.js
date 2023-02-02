function falarDepoisDe(segundos, frase) {
    return new Promise ((resolve, reject ) => {
        setTimeout(() => {
            resolve(frase)
        },segundos*1000)
    }) 
}

falarDepoisDe(3, 'TA COMPLICADO!!')
    .then(frase =>  frase.concat('??!!'))
    .then(Outrafrase => console.log(Outrafrase))
    .catch( e => console.log(e))