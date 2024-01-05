const score = 400

let balance = new Number(100)  // dedicately want a number type variable.
//balance = "convertToString"     // but it can be converted to string here also  
                                //and its typeof value is string
// console.log( balance); // [Number: 100]
// console.log(typeof balance); // object

// console.log(balance.toString());
// console.log(balance.toFixed(2)) // precision numbers after decimal 100.00

const otherNumber = 111.4444
//console.log(otherNumber.toFixed(1)) //111.4

//console.log(otherNumber.toPrecision(2))  // 1.1e+2
// total precision or digits u want (before + after decimal

const hunreds = 10000000
//console.log(hunreds.toLocaleString()); // gives comma seperated value 10,000,000 -> in USA standard=> thousand, hundered thousand .....

//console.log(hunreds.toLocaleString('en-IN')) // in Indian standard 1,00,00,000


// Also Number have its MAX and MIN value => +oo or -oo So we can select <oo = infinity>
//console.log(Number.MIN_VALUE)




// +++++++++++++++++++++++ Maths +++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); // 5 => value greater than 4
// console.log(Math.floor(4.9)); // 4 => lowest value
// console.log(Math.min(4, 3, 6, 8)); // 3 => minimum from set of values/ array
// console.log(Math.max(4, 3, 6, 8)); // 8 => maximum from set of values/ array

console.log(Math.random()); // always gives a random values b/w 0 and 1 
console.log((Math.random()*10) + 1); // to get a value greater than 0, and to avoid '0' case +1 is added
console.log(Math.floor(Math.random()*10) + 1); // to get single digit value 


// In case we want a random value in a given range only, suppose b/w 10 to 20
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)










