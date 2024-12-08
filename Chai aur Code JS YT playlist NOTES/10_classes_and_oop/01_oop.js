//new keyword actually mein ek constructor function hai, ye aapko allow karta hai ki aap ek he object literal se multiple instances bana sako, toh 
//new keyword naya context banake ke liye kaam aata hai.




const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);  //this keyword jab bhi use karte hai toh hum current context ki baat kar rahe hote hai
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;       //aksar coding practice mein hum same he naam rakhte hai
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this         //agar nahi lihein toh implicitly define hota he hai
}

// const userOne = User("hitesh", 12, true)
// const userTwo = User("ChaiAurCode", 11, false)      //abb userTwo ne saari values override kardi userOne ki..

//abb bus humein new keyword add karna hai... constructor function harr baar ek naya instance deta hai.
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)      //abb userTwo ne saari values override kardi userOne ki..
console.log(userOne.constructor);       //constructor property reference hoti hai aapke khud he ke baare mein...
//console.log(userTwo);


//new keyword jaise he use karte hai toh empty object create hota hai jisko instance bolte hai. Constructor function call hota hai new 
//keyword ke kaaran. ye saare arguments wagehra pack karta hai aur aapko de deta hai. aur phir ye this keyword, jo bhi aapne arguments likhe hai, 
//voh uske andar inject ho jaate hai.





/**
 * JS ka default behaviour hai prototypal behaviour. agar JS ko cheez jo aap dhoondna chahre ho ya expect kar rahe ho toh voh aur uske layer pe upar jaake 
 * dhoondti hai, voh parents aur uske parents ko access karti hai jab tak ki usey null nahi mill jaata hai. Isi behaviour se linked hoke this keyword kaam 
 * karta hai, arrow functions ke andar this ka access nahi hota hai voh isiliye nahi hota, kyuki prototype wahaan pe aajata hai. Prototype he new keyword ka 
 * access wahaan par de raha hai, classes iske through he mili hai, this keyword bhi isi ke through kaam kar raha hai, prototypal inheritance ya inheritance 
 * js ke andar, voh bhi isi ke through aa raha hai. ITS THE BEHAVIOUR OF JS...
 */

//READ ABOUT instanceof