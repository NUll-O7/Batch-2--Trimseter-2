const FileSystem = require("fs");

console.log("start");

FileSystem.readFile("f2.txt", function (err , data) {
   if(err){
    console.log("Cannot read File")
   }
   else{
    console.log("This is file 2 data -> " + data)
   }
});


setTimeout(function(){
    console.log('Hello')
}, 4000)

let f1data = FileSystem.promises.readFile('f1.txt')

f1data.then(function(data){
    console.log("this is File Data " + data)
}).catch(function(err){
    console.log("Err: "+ err)
})

console.log('end')