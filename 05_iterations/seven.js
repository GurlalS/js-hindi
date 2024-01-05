// array map => return values automatically

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

// Chaining: map on map ..... map and filter 

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)  // here hum will be the result from above map
                .filter( (num) => num >= 40) // here also num will be above map (num*10 +1)

console.log(newNums);