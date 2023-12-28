const accountId = 122333
let accountEmail = "gurlal@gmail.com"
var accountPassword = "123433"
accountCity = "BLR" // a variable can be decalred like this without any data-type in JS 

let accountState; // its value is 'undefined', declared but not initilized

//  accountId = 3. -> cant edit value provided in const -> not allowed

accountEmail = "temp@gmail.com"

console.log(accountEmail);

// another to print multiple values together 
console.table([accountId, accountEmail, accountPassword, accountCity])


/*
Why 'var' data type is not used to often?

The problem with the var is that it does not work on the block scope and function scope.
once it is declared it can be accessed globally everywhere in that file.


*/