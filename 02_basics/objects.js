// singleton 

// object literals(no singleton is made)
const mySym = Symbol("key1")
const JsUser = {
    name : "Bruce",
    age : 22,
    location : "gotham",
    [mySym] : "mykey1"
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(typeof JsUser[mySym]);
// console.log(JsUser);
// // Object.freeze(JsUser)//=> freeze all the values i.e. they can not be modified.

// JsUser.greeting = function(){
//     console.log(`hello Bruce , ${this.name}`);
// }

// console.log(JsUser.greeting());
// // symbols

const mySymbol = Symbol("key1")

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const tinderuser = new Object() //=> singleton object
const tinderuser1 = {} //=> non-singleton object

tinderuser1.id = "12a"
tinderuser1.name = "tony"

const regularuser = {
    email: "batman@gmail.com",
    fullname : {
        userfullname : {
            firstname : "tony",
            lastname : "stark"
        }}
    }

// console.log(regularuser)

// console.log(regularuser.fullname.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"};
const obj4 = {5:"e",6:"f"};

const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);

const obj5 = {...obj1,...obj2};
// console.log(obj5);

const users = [
    {
        id : 1,
        email : "bruce@gmail"
    },
    {
        id : 1,
        email : "bruce@gmail"
    },
    {
        id : 1,
        email : "bruce@gmail"
    }
]

// console.log(users[1].email); => bruce@gmail

// console.log(tinderuser1) => { id: '12a', name: 'tony' }

console.log(Object.keys(tinderuser1));//=> [ 'id', 'name' ]

console.log(Object.values(tinderuser1)); //=> [ '12a', 'tony' ]

console.log(Object.entries(tinderuser1)) //=> [ [ 'id', '12a' ], [ 'name', 'tony' ] ]
console.log(tinderuser1.hasOwnProperty('id')); //=> true