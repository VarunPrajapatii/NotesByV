//kuch loop arrays mein direct he properties mein add kar diye jaate hai like ForEach loop

const coding = ["js", "ruby", "java", "python", "cpp"]

//callback matlab hota hai muzhe ek function dedo muzhe kya karna hai... aacha call back function ka koi naam nahi hota hai
//toh forEach ek ek value par jayega array ke aur usey iss callback function mein pass karega, aue callbcak function mein hum likhenge ki hame un values se karwana kya hai...

// coding.forEach( function (val){      // ye ek callback function hai
//     console.log(val);
// } )


//we can give arrow function as callback function too, like this:-
// coding.forEach( (item) => {
//     console.log(item);
// } )


//now bane huey function ko callback mein pass karrey
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)



// coding.forEach( (item, index, arr)=> {   //forEach ke callback ke paas aur bhi cheezon ka access hota hai jaise index aur poora array bhi aata hai
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