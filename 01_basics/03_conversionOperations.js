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

//*************************Operations*********************

let value = 3
let negvalue = -value
console.log(negvalue);

console.log(2+2); 

let str1 = "hello"
let str2 = "robin"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 1+ 2);// => 112
console.log(1 + 1 + "2"); // => 22

console.log(+true); // => 1

console.log(+false); // => 0

let n1, n2 , n3

n1 = n2 = n3 = 2+2

let gameCounter = 100
gameCounter++
console.log(gameCounter);
