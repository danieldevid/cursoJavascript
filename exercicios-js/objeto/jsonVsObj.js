const obj = {a: 1, b: 2, c: 3, soma() { return a + b + c } }

console.log(JSON.stringify(obj)) // Objeto > JSON
//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 } ')) // JSON > Objeto