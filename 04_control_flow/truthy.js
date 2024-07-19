const userEmail = []

if(userEmail){
    console.log("got the user email");
}else{
    console.log("dont get the mail");
}

// falsy  values : false , 0, -0, BigInt ,"", null, undefined ,NotANumber(NaN).BigInt

// truthy values : true , "0", "false"," " , [],{} , function(){} 

if(userEmail.length === 0){
    console.log("isEmpty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}


// false == 0 : true
// false == '' : true
// 0 == "" :true

// Nulish Coalescing Operator (??) : null undefined

// let val1;
// val1 = 5 ?? 10; => 5
// val1 = null ?? 10; => 10
// val1 = undefined ?? 15 => 15
// val1 = null ?? 10 ?? 9 => 10

// # Ternary operator =>  condition ? true : false

// let price = 100;
// if(price> 80) ? console.log(true) : console.log(false);;