/*Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

const diaUtil = function(num) {
    switch(num) {
        case 1 :
            console.log('Final De Semana ')
            break
        case 2: case 3: case 4: case 5: case 6:  console.log('Dia Util')
            break
        case 7: console.log('Final De Semana')
                break
        default:
            console.log('Dia inválido')
    }
}

diaUtil(7)
diaUtil(3)
diaUtil(1)
diaUtil(10)
