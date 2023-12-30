//var c = 300
let a = 300    //in global scope

// variable a is declare in if condn and outside if so this is case when local/ block scope and global scope comes into picture



if (true) {
    let a = 10   // in local scope
    const b = 20
    // var c = 30 
    // console.log("INNER: ", a);
    
}
 

// console.log(a);
// console.log(b);
// console.log(c);  // the vlue of c will be updated to 30 as var does not undersntd the global and local scope => so this may cause issue if data got overwritten


// nested scope 

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);     // it is accessible as username is global to 
                                   //this function => nested scope
    }
    // console.log(website);   // here website is not accessible as it is  
                               //decalred  in local scope of function two()

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  // error => website is not defined
}

// console.log(username); // error => username is not defined


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //it will print result without any error

function addone(num){
    return num + 1
}



addTwo(5) // reference error : cant access 'addTwo' before initilization 
          // in this way of function handling, this error occurs, related to 
          // hoisting and execution context concept 
const addTwo = function(num){     // Sometimes its called JS expression, variable is holding fuc result
    return num + 2
}
