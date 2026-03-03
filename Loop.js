//loops  == Iterations

//For Loop
for(let i = 0; i < 10 ; i++){
    const element = i;
    if(element == 5){
        //console.log("5 Is a Best Number")
        break;
    }
    //console.log(element)
}


let myarry = ['flash', 'Batman', 'superman']
for(let i = 0;i<myarry.length;i++){
    // for (let j = 0; j<=10; j++){
    //     console.log(`inner loop value : ${j}`)
    // }
    // console.log(`Outervalue : ${myarry[i]}`)

}



let arr = 0;
while ( arr < myarry.length){
    // console.log(`Superhero are ${myarry[arr]}`)
    arr =   arr + 1;
}


let score = 11;
do {
    console.log(`score is ${score}`)
    score++
}
while(score <= 10);