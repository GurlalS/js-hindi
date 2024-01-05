// IIFE => Immediately Invoked Function Expression 

/* 
Q. why IIFE is needed??
A. its bcoz some function has to be executed soon after it declaration. 
   1. The reason for this like some server or database connection we want to connect as soon as the project or server is started so for that IIFE will helps.
   2. There should be no global scope pollution. As variables decalred globally cant effect current requirement ===???

*/

 // named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();  // <= IIFE dont know where to stop context so always terminate with ;


// un-namend and paramertesed IIFE ... treat IIFE same like function only
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');
