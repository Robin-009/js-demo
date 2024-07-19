// JavaScript Execution AudioContext

// JS is singlethreaded.is

// -> Global Execution Context
// -> Function Execution Context
// -> Eval Execution Context

// Js runs in two phases :

// -> Memory Creation Phase / Creation Phase
// -> Execution phases

// 1. Global Execution Context -> this
// 2. Memory Phase -> val1, val2 = undefined; addNum: defination; result1, result2 = undefined
// 3. Execution Phase -> val1 =10; val2 = 5; addNum: [new Variable environment + execution thread(for function a seperate memory and execution context is created.) (it returns the value in global execution context.) (after work has been finished it is deleted)]


let val1 = 10;
let val2 = 5;
function addNum(num1,num2){
    let total = num1+num2;
    return total;
}
let result1 = addNum(val1,val2);
let result2 = addNum(10,5);

// ## CALL STACK :
