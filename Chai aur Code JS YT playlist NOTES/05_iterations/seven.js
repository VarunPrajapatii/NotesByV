const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

//lets see chaining
const newNums = myNumers
        .map((num) => num * 10 )
        .map( (num) => num + 1)     //isme num ki value, iske upar jo bhi method laga hai uss method se jo bhi value pass hoke aayi hai voh
        .filter( (num) => num >= 40)

console.log(newNums);