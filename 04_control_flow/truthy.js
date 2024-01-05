const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values     => kin kin values ko false assume kiya jata hai
// false, 0, -0, BigInt=> 0n, "", null, undefined, NaN

//truthy values     => kin kin values ko true assume kiya jata hai
// "0", 'false', " ", [], {}, function(){} <= empty function


// check array length
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


// check empty object
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??):working depends only on "null" and "undefined"

let val1;
// val1 = 5 ?? 10.     // first not null or not undefined value will be output
// val1 = null ?? 10        // 10
// val1 = undefined ?? 15   //15
val1 = null ?? 10 ?? 20     // output 10
console.log(val1);


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


// Some browser console results for interview:
/*
 
 logic we can use if we are checking falsy with falsy value then output will be true and vice versa for truthy

 false == 0 => true
 false == '' => true
 0 == '' => true
*/