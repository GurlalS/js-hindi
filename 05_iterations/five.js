// for each => most used in arrays => Prop of array

const coding = ["js", "ruby", "java", "python", "cpp"]

// High order fucn
// accepts callback functions
// callback funation ka naam ni hota, so wahi forEach ka input arg hai

// coding.forEach( function (val){
//     console.log(val);
// } )

// callback in arrow func format

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)  // passing another func as parameter .. just pass refernce dont call func


// arr is compelete array which we are iterating
// coding.forEach( (item, index, arr)=> {   // more parameters are also available 
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )