 function sayMyName(){
    console.log("Bruce")
 }

//  sayMyName()

// function add(n1,n2){
//    console.log(n1 + n2); 
// }

// add(23,354663)

function add(n1,n2){
   let rs = (n1 + n2); 
   return rs;
}

// console.log(add(23,354663))

function logInUser(userName){
    if(userName === undefined){
    //   console.log( "plss enter a username"); 
    }
    return `${userName} just logged in `

}
// console.log(logInUser("robin"))
// console.log(logInUser())

function calculateCartPrice(...num1){  //=> REST operator will put multiple parameter in an array
    return num1;
}
console.log(calculateCartPrice(200,400,500));//=> [ 200, 400, 500 ]

function calculateCartPrice(val1, val2,...num1){  //=> REST operator will put multiple parameter in an array
    return num1;
}

console.log(calculateCartPrice(100,200,300,400,500)); //=> [ 300, 400, 500 ] 

const user = {
    userName : "suit",
    price : 1000000
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
}

// handleObject(user);

const myNewArray = [100,200,300,400,500];
function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));