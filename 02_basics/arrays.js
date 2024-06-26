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

const aimt_heroes = ["ambika", "shweta" , "alok",' vipin']
const aimt_boys = ['rohit','sachin','ritik']

// aimt_heroes.push(aimt_boys)
// console.log(aimt_heroes); // => [
//     'ambika',
//     'shweta',
//     'alok',
//     ' vipin',
//     [ 'rohit', 'sachin', 'ritik' ]
//   ]

// const aimt = aimt_heroes.concat(aimt_boys)
// console.log(aimt); // =>[
//     'ambika',
//     'shweta',
//     'alok',
//     ' vipin',
//     [ 'rohit', 'sachin', 'ritik' ],
//     'rohit',
//     'sachin',
//     'ritik'
//   ]

const aimt1 = [...aimt_heroes,...aimt_boys] // => known as spreading
console.log(aimt1);

const arr1 = [1,2,3,4,5,[11,12,13,[111,112,113]]]


const arr2 = arr1.flat(3)//=> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
console.log("A",arr1);
console.log("B",arr2);//=> B [
//     1,  2,  3,   4,   5,
//    11, 12, 13, 111, 112,
//   113
// ]

console.log(Array.isArray("Bruce")) //=> false
console.log(Array.from("Batman"));//=> [ 'B', 'a', 't', 'm', 'a', 'n' ]
console.log(Array.from({name : "bruce"})); // interesting

let score1 =100
let score =200
let score2= 300
console.log(Array.of(score,score1,score2));