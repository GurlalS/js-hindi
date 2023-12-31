// These loops are array specific

// for of.  => works on array

// ["", "", ""] // arr of strings
// [{}, {}, {}] // arr of objects

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {        //iteranting over array and prints arr values
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Map => object that holds key value pair
// insertion order remains the same as key-value is inserted
// it stores unique values

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  // stores unique value so it wont get inserted


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// for of on object => throws error => myObj is not iterable ***** 

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }