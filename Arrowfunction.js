//This : 
const user = {
    username : "Alex",
    price : 999,
    welcomeMessagee: function(){
        console.log(`${this.username}, welcome to website`)  //current context refer this keyword
    }

}


// user.welcomeMessagee()
// user.username = 'sam';
// user.welcomeMessagee()  //contex == values

// console.log(this)


// function one(){
//     let username = "Alex"
//     console.log(this);
// }
// one()


//++++++++++++++++++++++=Arrow Function +++++++++++++++++++
// const One = () => {
//     let username = "Alex"
//     console.log(this)
// }
// One()


// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }
// const addTwo = (num1, num2)=>  num1 + num2  //implecit
const addTwo = (num1, num2) =>  (num1 + num2)  //implecit

console.log(addTwo(3,4));

