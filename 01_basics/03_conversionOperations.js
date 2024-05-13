let score = "33"

console.log(typeof score) // => number

let valueInNumber = Number (score)
console.log(typeof score)

console.log(typeof NaN) // => number

// conversion of string into number gives NaN
// "33" => 33
// "33abc" => NaN

let isLoggedIn =''
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true ; 0 => false
// "" => false
// "robin" => true

let n = 33
let strn = String(n) 
console.log(typeof strn) // => string