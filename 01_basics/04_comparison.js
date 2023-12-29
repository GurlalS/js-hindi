// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);


/*
 equality == and comparison checks  > < >= <= works differently 
 in comaprison check it convert other value, null in 3rd case, into number, 0, thats why its true 
*/
console.log(null > 0);    //false
console.log(null == 0);   // false
console.log(null >= 0);   // true 

console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined <= 0);   // false

// ===  strict check => it checks the datavalue and datatype as well

console.log("2" === 2);   // false