// Immediately Invoked Function Expressions (IIFE)

/**
 * jaise he aapne function likha usko turant he execute karwana hai, kai baar hame zaroorat padhti hai eg:- ek file hum likhte hai jiske andar 
 * sirf database connection hai, aur hum chahte hai ki jaise he application start ho vaise he uss file ke andar db connection start ho jaye... 
 * eg: kai baar bhhout se global variables ho jaate hai, toh kai baar functions global scope se pollute ho jaate hai, toh hum alag ek poora scope bana late hai, 
 * aur hum chahte hai ki voh immediately execute ho jaaye. 
 * REMEMBER: global scope ke pollution se problem hoti hai kai baar, toh un declarations ya variables ke pollution ko hatane ke liye humne iffe ka use kiya
 */

(function chai(){       // ye named iffe hai
    // named IIFE
    console.log(`DB CONNECTED`);
})();       // toh iife ke liye function definition pe parenthesis laga do aur immediately call karne ke liye ek aur parenthesis laga do...
// toh first parenthesis ho gaya definition aur second parenthesis ho gaya hamara execution call

//REMEMBER to use semicolon after using iffe, some prefer using semicolon before using iffe ki kahin agar kisi aur coder ne pichle iffe ke 
//baad semicolon na lagaya ho toh dikkat na aaye

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

