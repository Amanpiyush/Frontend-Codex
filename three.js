//for of 

//['','','',''] == Array with string Element
//[{},{},{}]  == Array with Object Element

  const arr = [1, 2, 3, 4, 5]
  for (const val of arr) {
    // console.log(val)
  }

  const greeting = "Hello SINGH"
  for (const greet of greeting) {
    // console.log(`Each char is ${greet}`)
    if(greet == ' '){
        continue;
    }
  }


  //Maps  -- It the holds the key value pair only uniqu values
  const map = new Map();
  map.set('In', "India")
  map.set('USA', "UNITED STATE OF AMERICA")
  map.set('FN', "France")
  map.set('In', "India")
for (const [key, value] of map) {
    // console.log(key, ': ' , value)
}


 const lang = {
    JS : 'Javascript',
    RB : 'Ruby',
    CPP : 'C++',
    PY : 'Python'
 }
 for (const lan in lang) {
    if (!Object.hasOwn(lang, lan)) continue;
    
    const element = lang[lan];
    
    
 } 