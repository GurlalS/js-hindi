// Dates

let myDate = new Date()
 console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // obje ct

// let myCreatedDate = new Date(2023, 0, 23) // declare a specific date, months starts form 0 => Imp
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023") // here months start from 01 = Jan
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // milliseconds value 
// console.log(myCreatedDate.getTime()); // since date is an object, we can use its 
                                         // functions and getTime gives time in millisecs
// console.log(Math.floor(Date.now()/1000)); // in seconds conversion, floor to remove 
                                             // decimal values

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);      // months starts from 0
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `.  //full time printing

newDate.toLocaleString('default', {          // internationalization && customization of 
                                             //foramt
    weekday: "long",  
})