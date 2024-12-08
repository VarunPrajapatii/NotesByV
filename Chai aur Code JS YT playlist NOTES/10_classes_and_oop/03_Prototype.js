// let myName = "varun     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

//in objects.js previously weve had seen that we can add our own function in prototype of function.. 
//hum chahte hai ki kabhi bhi koi object declare ho toh base uss object mein he declare kardo, toh function, array, string 
//sab object se he toh hoke guzar rahe hai, subke paas power aajani chahiye. Object ka super prototype nahi hota phir, null...
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.varun = function(){
    console.log(`varun is present in all objects`);
}

Array.prototype.heyvarun = function(){
    console.log(`varun says hello`);
}

// heroPower.varun()
// myHeros.varun()
// myHeros.heyvarun()
// heroPower.heyvarun()

// inheritance


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User
//yehi prototypal inheritance hai, ki aap kaise kisi aur ki properties ko access kar sakte ho. Ye wala approach thoda outdated hai, naye code base mein 
//ye approaches nahi milegi



// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)     //Matlab teachingsupport saari properties access kar sakta hai teacher ki bhi..

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"varun".trueLength()
"iceTea".trueLength()