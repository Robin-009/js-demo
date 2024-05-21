// Arrays

const myArr = [1,2,3,4,5] // it can have value of different types
console.log(myArr);
const arr = new Array(1,1,1,1)

// array methods 

myArr.push(7)
// console.log(myArr);
myArr.pop()
//console.log(myArr);

myArr.unshift(6)
console.log(myArr);//=> [ 6, 1, 2, 3, 4, 5 ]
myArr.shift()
console.log(myArr);

console.log(myArr.includes(3))
console.log(myArr.indexOf(3));

const newArr = myArr.join() // joins whole array as astring

// slice , splice

console.log("A",myArr); // => A [ 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)
console.log("B",myArr);//=> B [ 1, 2, 3, 4, 5 ]
console.log(myn1);// => [ 2, 3 ]

const myn2 = myArr.splice(1,3)
console.log("c",myArr);//=> c [ 1, 5 ]
console.log(myn2)//=> [ 2, 3, 4 ]

