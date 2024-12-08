// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {            //string pe har character pe iterate karta hai
    //console.log(`Each char is ${greet}`)
}

// Maps     //its one more datatype in javascript
//map is an object that holds the key value pairs, koi duplicate values iske andar hoti nahi hai, 
//sabhi values unique rakhni hoti hai.. aur jis order mein enter kiya usi order mein rehti hai

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {       //eaise array ka destructure ho jaata hai, key aur values alag alag le lete hai isme..
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {       //objects interatable nahi hote hai error aayega. objects ko iterate karane ke doosre tareeke hote hai.
//     console.log(key, ':-', value);
    
// }