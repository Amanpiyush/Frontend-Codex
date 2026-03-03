//Chaining 

// const Number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const userNum = Number.map( (Num)=>Num + 10)
//                 .map( (Num)=> Num * 10)
//                 .map( (Num)=> Num - 2)
//                 .filter( (Num)=> Num > 140)

                // console.log(userNum)



//Reduce Methods
// const Number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const userNumber = Number.reduce( (acc, curval) => {
//     console.log(`acc ${acc}, curval ${curval}`)
//     return acc + curval
// }, 0)
// const userNumber = Number.reduce( (acc, curval) => acc+curval, 0)
// console.log(userNumber)



const Shoppingcart = [
    {
        course : "JS",
        price : 299
    }, 
    {
        course : "C++",
        price : 299
    }, 
    {
        course : "HTML,CSS",
        price : 5299
    }, 
    {
        course : "Android Development",
        price : 7299
    }, 
    {
        course : "Data Science",
        price : 78299
    }, 
]

const user = Shoppingcart.reduce((acc, items) => acc+items.price, 0)
console.log(user)