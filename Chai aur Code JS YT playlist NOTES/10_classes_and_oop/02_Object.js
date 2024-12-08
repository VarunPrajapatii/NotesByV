function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);






function createUser(username, score){
    this.username = username
    this.score = score
}

//function bhi object hai aur object like Array ke andar kai saari properties jaise length, join, slice etc... like this we can make our own functionalities, like this: 
createUser.prototype.increment = function(){
    this.score++;       //this nahi lagayenge toh function ko kaise pata chalega kiske context mein baat ho rahi hai.. chai ya tea..
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()      //isme dot prototype lagane ki zaroorat nahi hai, kyuki js behind the scene kar leta hai, its syntactical sugar...


//also agar const chai = createUser("chai", 25); iss statement mein new nahi likhenge toh .printMe use karne mein dikkat aayegi. Kyuki abhi humne 
//function se chai ke andar values transfer kari toh humne bataya nahi hai ki .printMe jaise additional properties aayi hai, ye batana padega, aur ye 
//batane ke kaam karega new keyword. Agar hum new keyword nahi lagaye aur function ke andar he printMe define kare toh dikkat nahi aayegi kyuki 
//function ke andar function toh ho sakta hai obviously.

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access 
to properties and methods defined on the constructor's prototype.
JS classes ke through constructor function nahi deti hai, new keyword ke through constructor function deti hai. toh new ke baad he voh object 
leti hai usme prototype inject karti hai aur usme humne createUser.prototype.increment jaise jittey bhi prototype functions banaye hai unki inject karti hai.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no 
explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, 
function, etc.), the newly created object is returned.

*/