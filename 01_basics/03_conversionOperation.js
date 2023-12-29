let score = 33 
//console.log(typeof score);  // number 

let testNumber  = "33"
//console.log(typeof testNumber); // string
// convert to number  
//console.log(typeof (Number(testNumber)))  // converted to number where NUmber is a number Class

let testVar = "33abc";
// console.log(typeof testNumber)  // string 
// console.log(typeof (Number(testVar))) //converted to number 
//console.log((Number(testVar)))  // value of this conversion is NaN. ->. so be carefull


let field = undefined
// console.log(Number(field)) // NaN
// console.log(typeof Number(field)) // number

field = null
// console.log( Number(field));  // 0
// console.log(typeof Number(field)) // number 


/* Summary -> conversion to number by Number()
    "33" => 33
    "33acnv" => NaN
    true => 1; false = 0
    null => 0 
    undefined => NaN
*/



let isLoggedIn = true
//console.log(typeof isLoggedIn); // boolean

isLoggedIn = "test"
//console.log(Boolean(isLoggedIn)) //true
//console.log(typeof Boolean(isLoggedIn)); // boolean 

isLoggedIn = -1
//console.log(Boolean(isLoggedIn)) //true
//console.log(typeof Boolean(isLoggedIn)); // boolean

isLoggedIn = 0
// console.log(Boolean(isLoggedIn)) //false
// console.log(typeof Boolean(isLoggedIn)); // boolean

isLoggedIn = null
// console.log(Boolean(isLoggedIn)) //false
// console.log(typeof Boolean(isLoggedIn)); // boolean

isLoggedIn = undefined
// console.log(Boolean(isLoggedIn)) //false
// console.log(typeof Boolean(isLoggedIn)); // boolean


/*
Summary -> conversion to Boolean()
true => boolena
"test" => true/boolean
""=> false/boolean
-1/1 => any negative or positive value => boolean
0 => false/ boolean
null=> boolean
undefined => boolean

*/

// String

let someNumber = 33     // 33/string
someNumber = null       // null/string
someNumber = undefined // undefined/string

console.log(String(someNumber))
console.log(typeof String(someNumber));

// ************************** Operations ************************

 //Basic Maths Operations

 // console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // power 2^3
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " JS"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);           // 12
// console.log(1 + "2");           //12
// console.log("1" + 2 + 2);       //122. => the value i.e., written at first, conversion will be base on that
// console.log(1 + 2 + "2");       //32   => 1+2 => number so number + string == string 

// console.log( (3 + 4) * 5 % 3);  // generally dont write like this

// console.log(+true);            //convert to number = 1
// console.log(+"");              // conver to number =0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2        // dont prefer to write like this => write more readable code.

let gameCounter = 100
++gameCounter;        
console.log(gameCounter);        // 101 => read post and pre increment 
 
// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

