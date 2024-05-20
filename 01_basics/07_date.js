// Dates

let myDate = new Date()
console.log(myDate.toString());// => Mon May 20 2024 17:34:01 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());// => Mon May 20 2024
console.log(myDate.toISOString());// => 2024-05-20T17:34:01.072Z
console.log(myDate.toLocaleDateString());// => 5/20/2024
console.log(myDate.toLocaleString());// => 5/20/2024, 5:34:01 PM

console.log(typeof myDate);

let myCreatedDate = new Date("04-16-2024")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);

let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth()+1)
// `${newDate.getDay()} and the time is...`

newDate.toLocaleString('default',{
    weekday:"long"
    
})