let a = 300

if (true){
    let a = 10
    const b = 20
}

// console.log(a);
// console.log(b);


//scope are 2 types : block and global scope.

//Nested Scope : 
function one (){
    const username = "Alex"

    function Two (){

        const website = "Youtube"
        console.log(user)

    }
    // console.log(website)
    Two()
}
// one()


if(true){
    const username = "Alex"
    if(username === 'Alex'){
        const website = "youtube"
        // console.log(`${username} is a ${website}r`)
    }
    // console.log(website);
}
// console.log(username);



//+++++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++++
function addOne (num){
    return num + 1;
}

addOne(5)

//Hosting upworking Topics
const addTwo = function(num){   //Expresssion also
    return num + 2
}
addTwo(5)

