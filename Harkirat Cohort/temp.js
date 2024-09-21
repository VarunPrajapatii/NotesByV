// function getDataFromServer(callback) {
//     console.log("Fetching data from server...");
//     setTimeout(() => {
//         const data = {name: "varun", partner: "swechha", age: 24};
//         console.log("data: ", data);
//         callback(data)
//     }, 1500);
// }

// function processData(data, callback) {
//     console.log("Processing data...");
//     setTimeout(() => {
//         const processedData = {...data, status: true};
//         console.log("processedData: ", processedData);
//         callback(processedData);      
//     }, 2000);
// }

// function saveToDatabase(processedData, callback) {
//     console.log("Saving to Database...");
//     setTimeout(() => {
//         const savedData = {success: true, data: processedData};
//         console.log("saved Data: ", savedData);
//         callback(savedData)       
//     }, 2500);
// }


// getDataFromServer((data) => {
//     processData(data, (processedData) => {
//         saveToDatabase(processedData, (savedData) => {})
//     })
// })




// function getDataFromServer() {
//     return new Promise((resolve) => {
//         console.log("Fetching data from server...");
//         setTimeout(() => {
//             const data = {name: "varun", partner: "swechha", age: 24};
//             console.log("data: ", data);
//             resolve(data)
//         }, 1500);
//     })
// }

// function processData(data, name) {
//     return new Promise((resolve) => {
//         console.log("Processing data...");
//         setTimeout(() => {
//             const processedData = {...data, status: true};
//             console.log("processedData: ", processedData, name);
//             resolve(processedData);      
//         }, 2000);
//     })

// }

// function saveToDatabase(processedData) {
//     return new Promise((resolve) => {
//         console.log("Saving to Database...");
//         setTimeout(() => {
//             const savedData = {success: true, data: processedData};
//             console.log("saved Data: ", savedData);
//             resolve(savedData)       
//         }, 2500);
//     })
// }


// getDataFromServer()
//     .then((data) => processData(data, "varun"))
//     .then((processedData) => saveToDatabase(processedData))




function getDataFromServer1() {
    return new Promise((resolve) => {
        console.log("Fetching data from server 1...");
        setTimeout(() => {
            const data = {name: "Varun", age: 24};
            console.log("Data from server 1:", data);
            resolve(data);
        }, 1500);
    });
}

function getDataFromServer2() {
    return new Promise((resolve) => {
        console.log("Fetching data from server 2...");
        setTimeout(() => {
            const data = {name: "Swechha", age: 23};
            console.log("Data from server 2:", data);
            resolve(data);
        }, 2000);
    });
}

function processData(data) {
    return new Promise((resolve) => {
        console.log("Processing data...");
        setTimeout(() => {
            const processedData = {...data, status: true};
            console.log("Processed data:", processedData);
            resolve(processedData);
        }, 2000);
    });
}

// Using Promise.all to fetch data from both servers in parallel
Promise.all([getDataFromServer1(), getDataFromServer2()])
    .then((results) => {
        // Both results are available here
        console.log("Both data fetched:", results);
        return Promise.all([processData(results[0]), processData(results[1])]);  // Process both in parallel
    })
    .then((processedResults) => {
        console.log("Both data processed:", processedResults);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
