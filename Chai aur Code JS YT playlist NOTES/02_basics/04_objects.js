// const tinderUser = new Object()   //its a object declaration- singleton object
const tinderUser = {}  //its also a object declaration - its not singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)     //isme empty curly paranthesis diye, its optional par dena chahiya, good practice in production grade code

const obj3 = {...obj1, ...obj2}     //adhiktar hum yehi use kar rahe honge
// console.log(obj3);

// database se kai baar array of objects aayenge then you will use like
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

// console.log(Object.keys(tinderUser));        // saare keys ka array mil jaata hai issey, very imp to remember
// console.log(Object.values(tinderUser));      // saare values
// console.log(Object.entries(tinderUser));     // kam use aata hai par ye saare key value pair ko array mein daal deta hai

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));    // it checks if it has the property in object, result in boolean

//see prototypes of objects in inspect of chrome



//lets see object destructuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
// const {courseInstructor} = course;
const {courseInstructor: instructor} = course       //you can give it different name like this

// console.log(courseInstructor);
console.log(instructor);

//aaj kal api aam taur pe json ke format mein hoti hai
//its a json example
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//kai baar api iss tarah se na milke array ke form mein milti hai jiske andar kaafi saare objects hote hai

[
    {},
    {},
    {}
]

