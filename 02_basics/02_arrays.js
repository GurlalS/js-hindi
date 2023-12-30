const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros).  // pushes dc_heros as array in marvel_heros

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //conacat two arrays and return new arr
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // ... => spread operator 
console.log(all_new_heros);

// ... => spread operators aslo merge two or more arrays in a single array and returns a new array

const allHeros = new Array(...marvel_heros, ...dc_heros)
console.log(allHeros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // converts into a single array and Infinity is the depth upto which we want to flat that array
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // return true/false if argument is array or not
console.log(Array.from("Hitesh")) // converts input into array ["H","i","t","e","s","h"]

console.log(Array.from({name: "hitesh"})) // interesting > while making array out of objects we have to specify that array should be create from Keys aor Values , if we have not specified anything it will return [].

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // making an array by using mutiple input values.