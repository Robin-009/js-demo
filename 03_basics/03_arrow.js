const user ={
    username : "robin",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to th website`);
        console.log(this);
    }
}

//user.welcomeMessage() //=> robin, welcome to th website
//console.log(this);// => {}

// browser have "window" as global object.

// function namkeen(){
//     console.log(this);
// }
// namkeen();

const namkeen =() => {
    let username = "hitesh";
    console.log(this);
}
// namkeen()

const addtwo = (num1 ,num2) => { //=> explicit return 
    return num1+num2;
}

addtwo(23,34)

// const addtwo = (num1 ,num2) => num1+num2;  ==> implicit return 

// const addtwo = (num1 ,num2) => num1+num2;

const objFunc = () => ({username : "robin"})

console.log(objFunc());
