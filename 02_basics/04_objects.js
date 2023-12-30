// const tinderUser = new Object() // object will be singleton
const tinderUser = {} // object declaration by literal method

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


// objects inside objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// accessing objects inside objects
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// merging objects
// const obj3 = { obj1, obj2 }.  // it will assign two objects in one, but not two in one
// const obj3 = Object.assign({}, obj1, obj2, obj4) // merge all abjs in one object

const obj3 = {...obj1, ...obj2} // merge objs in one obj
// console.log(obj3);


// array of objs => very common format of APIs response
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // return an array of object keys 
// console.log(Object.values(tinderUser)); // return an array of object values
// console.log(Object.entries(tinderUser)); // make each key-value pair in array and return an anrray which incles all key-value pair arrays 

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // method to check whether a partiular property exixts in obj or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// Destructuring of objs or another way of property accessing in JS 
const {courseInstructor: instructor} = course // here instuctor is another name that we can give while using

// console.log(courseInstructor);
console.log(instructor);

//JSON => Java Script Object Notation
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

// decalre and initilize obj
let myObj = {}
 myObj.name = "JS"
 myObj.version = "ES6"
 console.log(myObj);