//1. What is asynchronous programming, and why is it important in JavaScript?
/*sol1) Asynchronous programming is a programming paradigm that allows for the execution of multiple tasks concurrently, improving the responsiveness and efficiency of the program
while allowing the webpage to be responsive. It also eliminates the sigle threaded nature of JS and improves the overall efficiency of the program by handling multiple tasks at a time.*/

//2. 2. Explain the difference between synchronous and asynchronous code execution.
/*sol2) Synchronous code execution executes one line of code at a time, waiting for the task on hand to complete on the other hand
asynchronous code execution executes multiple lines of code at the same time, allowing the webpage to be responsive while the code is executing.*/








//CODE BASED QUESTIONS
//1. Write a function `fetchData(callback)` that simulates fetching data from an API. 
// Use `setTimeout` to delay the execution for 2 seconds. 
// The function should return either data or an error message via the callback.

//SOL 1)
// function fetchData(callback) {
//     setTimeout(() => {
//         const err = Math.random()>= 0.5
//     let error = null
//     if(err){
//         error = "API fault"
//     }
//     const data = "Hello World"
//     callback(error,data)
//     }, 2000);
// }
// fetchData((error, data) => {
//     if(error){
//         console.log(error);
        
//     }else{
//         console.log(data);
//     }
// });

/*2. Convert the following callback-based function into one that uses Promises:  
   ```javascript
   function getUserData(callback) {
       setTimeout(() => {
           callback(null, { name: "John", age: 25 });
       }, 1000);
   }*/

function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "John", age: 25 });
            }, 1000);
    })
}

