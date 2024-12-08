const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);   //jab hum current context ko refer kar rahe hai, toh uske saath hum lagate hai this keyword. means scope ke andar variables
                                                                //ko access karne ke liye this laga denge. Context ka matlab hai values, jo variables kya hold kar rahe hai.
        console.log(this);  //ye current context batayega object ka
    }

}





// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);       //isko run karne se empty object milega kyuki , node environment mein hai, aur isko browser pe run karne se window object milega, browser ke 
//andar global object window object hai.  pehle javascript ko execute karne ka ek he tareeka tha browser ke andar, js ko execute karne wala engine browser ke andar he paaya jaata 
//tha, abhi hamare paas engine standalone hai.. node, deno, bun etc ke naam pe...

// function chai(){
//     let username = "hitesh"
//     console.log(this);    //bhhout saari information aati hai. so we can use this in regular type of function
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);          //here we get empty object, because this keyword refers to the object that lexically encloses the arrow function
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2      //implicit return, it assumes you dont want to write return as you have one statement


// const addTwo = (num1, num2) => ( num1 + num2 )       // toh parenthesis laga do toh automatically ek block ban jaata hai
//REMEMBER: curly braces use kiye toh return keyword likhna he padega, aur pranthesis use hua toh return keyword nahi likhna rahega



const addTwo = (num1, num2) => ({username: "hitesh"})       // for object..


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

//you may use this
// myArray.forEach(() => {})
// myArray.forEach(() => {})
// myArray.forEach(function () {})