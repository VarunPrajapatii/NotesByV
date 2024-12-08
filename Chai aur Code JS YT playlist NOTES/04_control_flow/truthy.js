const userEmail = "Varun"       //string mein kuch hai toh true
// const userEmail = ""       //string mein kuch nahi hai toh false
// const userEmail = []       //empty array hai toh true


if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt  mein 0n likhte hai, "", null, undefined, NaN
//inke alawa jo bhi hai unko true value maana jaata hai

//truthy values
//REMEMBER these truthy values: "0", 'false', " ", [], {}, function(){} ye empty function bhi truthy value hai


// const userEmail = []
// if (userEmail.length === 0) {           //thats how you check array empty or not
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {           //thats how you check object empty or not
    console.log("Object is empty");
}


//in console of browser you can check these:
// false == 0    //its true
// false == ''    //its true
// 0 == ''     //its true



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10       
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20     //jo bhi first value isko mil gayi hai ye isko assign kar deta hai

//ye basically agar null value aayi hai toh uska safety check kar deta hai.. jaise kabhi kabaar db mein ya firebase wagehra mein directly response nahi milta, 
//lets say aapko do values milti hai toh ye un mein null ya undefined ka safety check kar deta hai



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")