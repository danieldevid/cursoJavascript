console.log('01)','1' == 1) // comparando valor e não estou preocupado com o tipo 
console.log('02)','1' === 1) //  comparando tipagens , cê  são estritamentes diferentes
console.log('03)','3' != 3) // Se os valores são  difentes, não se preocupando com o tipo  
console.log('04)','3' !== 4) // estritamente diferente , com foco na tipagem 

console.log('05)', 3 < 2) // 3 é menor que 2?
console.log('06)', 3 > 2 )// 3 é maior que 2?
console.log('07)', 3 <= 2 )// 3 menor  ou igual a 2?
console.log('08)', 3 >= 2 )// 3 é maior ou igual a 2?

const d1 = new Date (0)
const d2 = new Date (0)

console.log('09)', d1 === d2 )//  Nesse caso os dois são referêcias de memórias por isso são diferentes , False
console.log('10)', d1 == d2 ) 
// cada referencia de memória é unica 
console.log('11)', d1.getTime() === d2.getTime()) // como o eletemento getTime ele começa a passar 
//valores e não referências,  estão comparado Nmbers , como a data é a mesma e o tipo também então True

console.log('12)', undefined == null)  // 
console.log('13)', undefined === null)// são tipos diferentes por isso False

