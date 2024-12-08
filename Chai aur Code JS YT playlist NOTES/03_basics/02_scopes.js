let a = 300
if (true) {
    let a = 10
    const b = 20
    //var c = 30
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);      //30 print ho jaega par baakiyo mein error aayega. so dont use var. aacha direct c=10 likhna bhi var c=10 ke barabar he hai


// browser mein inspect mein jaake scope dekhenge voh alag hai code environment mein jo scope hota hai ussey



function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))      //here no error will come as we havent hold function in variable

function addone(num){
    return num + 1
}



addTwo(5)       //will make error as its accessed before declared, we'll see when we discuss concept of hoisting
const addTwo = function(num){   //ye bhi function he hai par isko expression bhi kaha jaa sakta hai, js mein variables are very powerful they can hold functions, json, etc..
    return num + 2
}
