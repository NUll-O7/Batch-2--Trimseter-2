const p1 = new Promise(function(resolve , reject){
    let a = 5
    let b= 6

    if(a===b){
        resolve("Values Matched")
    }
    else{
        reject('Values Did not Match')
    }

    
})

console.log(p1)