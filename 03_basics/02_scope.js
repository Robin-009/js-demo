// var c = 300

let d = 100;
if(true){
    let a= 10;
    const b = 20;
    var c = 30;
}

// console.log(a) ==> not defined
// console.log(b) ==> not defined
// console.log(c) ==> 30

function one (){
 function two(){
    const website = "nitesh"
    console.log(website);
    }
    // console.log(website); => out of scope
    two();
}
// one();

// if(true){
//     const username = "robin";
//     if(username === "robin"){
//         const web = "singh"
//         console.log(username + web);
//     }
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(addone(5)); ==> no error
function addone(num){
    return num+1;
}
console.log(addone(5));


// console.log(addtwo(5)) ==> will give error
const addtwo = function(num){
    return num + 2;
}
console.log(addtwo(5))
