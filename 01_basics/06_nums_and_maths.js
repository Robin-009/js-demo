const score = 400

const balance = new  Number(199)
// console.log(balance)
// console.log(balance.toString())
// console.log(balance.toFixed(5)) // => Returns a string representing a number in fixed-point notation.

// const num =  23.5674
// console.log(num.toPrecision(1)) // => Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

// const hundreds = 1000000000
// console.log(hundreds.toLocaleString('en-IN'));

// console.log(Number.MIN_SAFE_INTEGER)

// ******************************** MaTHS ****************

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(-4.6));

// ceil & floor values

// sqrt => square root ; pow => power

//Math.min => gives lowest value in an array
// Math.max => gives highest value in an array

console.log(Math.random()) // => gives random value btw 0 and 1

const min = 1
const max = 6

const r = Math.floor(Math.random()*(max-min + 1) +min)
console.log(r);