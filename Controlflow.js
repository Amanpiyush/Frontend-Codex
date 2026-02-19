//if 

const userLoggedIN = true

if(userLoggedIN){
    let username = (Name) => {
        return Name;
    }
    let user = username('Aryan')
    // console.log(`${user} is Logged In`)
}

const score = 200 
if (score > 100){
    let power = 'fly'
    // console.log(`User Power ${power}`)
}


let balance = (Bal) => {
    if(Bal >= 500){
        console.log("Greater than 500")
    }else if (Bal < 500){
        console.log("Less than 500")
    }else if (Bal == 500){
        console.log("Balnce is 500")
    }else{
        console.log("Balance is euqal to 1000")
    }
}
//balance(1000);


const userLoggedIn = true;
const debitcard = true;

if(userLoggedIN && debitcard){
    console.log("You can Do Sopping")
}

let month = 3;

//SWITCH
switch(month){
    case 1 : console.log("JAN");
    break;
    case 2 : console.log("FEB");
    break;
    case 3: console.log("MAR");
    break;
    case 4: console.log("APR");
    break;
    case 5: console.log("MAY");
    break;
    default: console.log("No Month Name is Exists")
}


const emptobj = {}
if(Object.keys(emptobj).length === 0){
    console.log("Object is empty")
}


//Terniory Operator
//condition ? true : false

