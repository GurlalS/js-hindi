// JS arrays are resizeable and one array can store mix datatypes
// JS arrays are not assosiative, cant access an elemt from array with string indexs like  const myArr = [0,2,3,4,5],so myArr["one"] => incorrect,  myArr[0] => correct


// Array copy in JS have Shallow copy 

// Shallow Copy => copy and original shares the same reference 
// changes in copy will also be applied to the original

// Deep Copy => copy and original do not share the same reference 
// changes in copy will not be applied to to the original 


const myArr = [0, 2, 3, 4, 5] 
const myHeros = ["Shakitman","nagaraj"]

const mixDataType = [0, 1, "Shakitaman", [1, 2, 3], {name: "JS"}]

const newArrDeclaration = new Array(1, 2, 3, 4, 5)

// Array Methods:

myArr.push(9) // pushes elemet at at end
myArr.push(7)

myArr.pop()   // removes elemet from the end of array

myArr.unshift(9) // adds element at the begining of the array and shift all elements by 1 index

myArr.shift() // removes element form the starting

myArr.includes(9) // gives true or false whethere value is present or not
myArr.indexOf(3) // gives index of element in array if element is not present retuen -1

let index = myArr.findIndex((element) => element > 5). // first index when codn satsisfed
console.log(index);

myArr.join()  // convert array into single string with comma seperated values

// splice, slice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3).  // retruns an array of values from 1 to 2, last index is not included and original array remains same 

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // it includes last index element also and it removes the values selected by splice from the original array., so it manuplulates the org arry

console.log("C ", myArr);
console.log(myn2);
