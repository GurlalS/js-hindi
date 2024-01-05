// can be denoted in single and double quote : 'test', "test"

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

// another way of string prining => string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// another way of string declaration 
const gameName = new String('hitesh-hc-com')
console.log(typeof gameName);    // object => INTERESTING, it is the object format of 
                                 //string where each key in object is index and value is each character

// console.log(gameName[0]);     // value of the string object
// console.log(gameName.__proto__);


 console.log(gameName); // [String: 'hitesh-hc-com'] => since it is in object format

// console.log(gameName.length); // as it is in object format so it is having many 
                                 //functions like length, toUpperCase() ... etc
                                 
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

 const anotherString = gameName.slice(-1, 3).  // issue for me: for -ve start string is 
                                               //not getting printed =>. have to look once 
 console.log(anotherString); 

 const newStringOne = "   hitesh    "
 console.log(newStringOne); 
 console.log(newStringOne.trim()); // trim() works on white space chars and line 
                                   //terminator 
                                   // Also, there are methods like trimStart and 
                                   //trimEnd() 

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));
