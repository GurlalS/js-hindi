// how data is stored and how it is accessed based on that datatypes are divided into two parts => Primitive and Non-Primitive data type.

let score = 55
let result= score;
result = 66;

console.log(score); // 55
console.log(result); //66

/* 
# Primitive => call by value

let score = 55
let result= score;
result = 66;

here when we are going to assign score to result, it generate a copy of the score assign it to result, not the original reference of the score, so when result is updated to 66, the value in the 'score' varibale will remain 55 , but the edited 'result' value become 66
this way is call by value.

7 types:-
  1. String 
  2. Number 
  3. BigInt   // for scientific values or very big values
  4. Boolean
  5. null => null means empty
  6. undefined => memory space is declared but which value will come, we dont know => let field;
  7. Symbol

*/

const scores = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

// const bigNumber = 3456543576654356754n



/* 
# Non Primitive or Reference Type

1. Array
2. Objects
3. Functions
*/


// JS is dynamic-typed Language => datatype will be decided at runtime

let myObj = {
    firstName: "Gurlal",
    lastName: "Singh"
}
//console.log(myObj);

myObj.firstName = "NJ"
//console.log(myObj);

let anotherObj = myObj
anotherObj.firstName = "ChaiAurCode";

console.log(myObj)          // { firstName: 'ChaiAurCode', lastName: 'Singh' }
console.log(anotherObj)     // { firstName: 'ChaiAurCode', lastName: 'Singh' }   changes that are done in anotherObj are reflecting in myObj, 
                            //this is bcoz of refernece type 

const myFunction = function(){
    console.log("Hello Js")
}


myFunction()