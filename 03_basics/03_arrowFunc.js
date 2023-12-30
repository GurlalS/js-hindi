// ES6 came in 2015, it came up with arrow function and many other features

// when we are refering to the current context then 'this' keyword will come into 
// picture

// arrow functions me "this" nahi hota hai
// kyu???

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // here this is referring the current context that is username in this scope

        console.log(this);   // here "this" is not empty object => it is 
                             //referring to current object
    }

}

console.log(user.welcomeMessage)    //[Function: welcomeMessage]

//     *************** Interesting about this ************************
console.log(this)                   // {} => empty object bcoz we are in node env 
                                    // and global is not having any context

// but if we are on the browser console, then the value of this is window object that why we can capture the window's event in dom
// *************************************************************************


console.log(this.user)              // undefined
//this.user.welcomeMessage()          //TypeError: Cannot read properties of undefined (reading 'welcomeMessage')

user.welcomeMessage()
user.username = "Sammy"
user.welcomeMessage()    // now the context of "this" will be changed as obj is updated and its new context is new updated object 


// ---------- Some general concept about func --------------

const test = function() {    // now the function name is in const variable
     //return 1
}
test()

// but if we are not assigning a func to any variable then we have to write func name like in chai() function

// --------------------------------------------------------------------

function chai(){
    console.log("Inside Chai Func");
    console.log(this) // giving an global object with so many values

    // but now if i define a variable in this func

    let username = "Github"
    console.log(this.username)    // undefined 

    // the value is undefined bcoz this is not able to access the props in func => it wont work on function's context
    // it is woring only in objects not in fuctions
}
chai()

// func is written in another way, here also this.username is undefined so its not depending on the way of function defintiton


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()


// ++++++++++++++++ Arrow Functions +++++++++++++++++++


// to create arrow function, remove function keyword and place an arrow(=>) next to parenthesis ()
// let arrowFunc = function () {}
let arrowFunc = () => {}     // this represents an arrow fucntion

// now lets see "this" in arrow fucntion

let anotherFunc = () => {
    let username = "Webhook"
    console.log(this.username) // undefined => ??
    console.log(this)   // {} => why??
}
//anotherFunc();

// basic arrow function
// () => {}

// +++++++++++++++++++ Some Research on Basic Arrow Func +++++++++++++++++

// Q. how to call this basic arrow func
// A. to call this func, we have to convert it to an IIFE => immediately invoke

// Parameterised IIFE => will learn in next 
((testStr) => {
    console.log(this)   // {}
    console.log(testStr) 
})("Basic Arrow Funtion")

// another way to invoke
// Pass the arrow function as an argument to another function and invoke it
(function (func) {
    func();
})(() => {
    console.log("Basic Arrow Function");
});


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Simple arrow func 
// const addTwo = (num1, num2) => {
//     return num1 + num2 // explicit return, using return keyowrd
// }

// Implicit return, as statement is of one line so no need to write "return" keyword
// const addTwo = (num1, num2) =>  num1 + num2
// OR
// const addTwo = (num1, num2) => ( num1 + num2 )
//console.log(addTwo(3, 4))


// returning object 
//const returnObj = () => {username: "hitesh"}   // undefined, have to wrap in ()
const returnObj = () => ({username: "hitesh"})  // got object



// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach( we can use arrow func here  .. will understand in next notes)







