// reduce method()

const myNums = [1, 2, 3]

// reduce method have three parameters=> initialValue, Accumulator, CurrentValue
//initial value is given by the user from where it has to start, then accumulator 
// holds result of each iteration and current value is array current value 

// similar to sum of array elements

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)  // this 0 is initial value, we can can any initial value 


// reduce with arrow function
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) // here 0 is initialVal

console.log(myTotal);

// reduce on array of objects

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);