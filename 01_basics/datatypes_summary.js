// # Primitive 

// 7 types : String , NUmber ,  Boolean , Null , undefined , Symbol , BigInt

const score = 100
const value = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 33343434324234234234342n
console.log(typeof outsideTemp); // => object

// # refrence or NonPrimitive : arrays , objects , functions

const heroes = ["batman", "superman", "ironman"]

let myObj = {
    name : "robin",
    age : 22
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof heroes);

//*****************Memory***************

// Heap {non - primitive} , Stack {primitive}

let rohit = "rohit babu"

let anotherName = rohit;
anotherName = "chai aur code"

console.log( anotherName)

let user ={
    email : "user@gmail.com",
    upi : "robin.upi"
}

let user1 = user

user1.email = "robin@gmail.com"

console.log(user.email)
console.log(user1.email)