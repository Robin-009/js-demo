// immediately invoked functions expressions(iife)

(function chai(){
    console.log(`DB CONNECTED`);
})();

( hellodb = (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('robin');