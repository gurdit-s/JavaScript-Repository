let myVar = "tota"

function myLocalScope(myVar) {
    // Only change code below this line
    // let myVar = "gurdit"
    console.log('inside myLocalScope', myVar);
}
myLocalScope("myVar");




// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);




