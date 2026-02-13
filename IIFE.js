//IIFE (Immediately Invoked Function Expression)


(function chai(){
    //named IIFE
    console.log("DB Connected")
})();

( (name) => {
    //unmaed IIFE
    console.log(`DB Connected ${name}`);
} )('Alex');

