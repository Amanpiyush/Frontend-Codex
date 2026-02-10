//Create a function that return your name as a string
function myName(Name){
    return Name;
}
// console.log(myName("Alex"));

function addNum (num1 , num2){
    return num1 + num2;
}
// console.log(addNum(3,4));

function numDouble(num){
    return num + num;
}
// console.log(numDouble(5))

function strJs (){
    return `Learning Javascript`;
}
// console.log(strJs());

function twoPara (num1 , num2){
    return num1;
}
// console.log(twoPara(2,4));

//Return and console.log
//if the function has the console.log() instead of return the hole funcion value is output. and control are limited compare to the return.
//If the return is nothing then the valus id "Undefined"

function addTest (age){
    return age;
    console.log("I'm Happy!")
}
// console.log(addTest(23))  //after the return no code is exicuted


function userLogged (user){
    return `${user} is logged In`;
}
// console.log(userLogged("sam"))


function userLogged (user = 'Guest'){
    return `${user} is logged In`;
}
// console.log(userLogged("sam"))
// console.log(userLogged())

function passUndefined (undefined){
    return undefined;
}

// console.log(passUndefined(3))  //nothing working find, undeiend is trated as the paramter in the function.
// function passUndefined (null){
//     return null;
// }

// console.log(passUndefined(3))  //null is trowing error



//REST Operator

function shoppingCart (...cart){
    return cart;
}

// console.log(shoppingCart(2,4,5,2))


function shoppingCart (...cart){
    return cart;
}

// console.log(shoppingCart(2,5,3,5,3).length)


 




