const FileSystem = require("fs");

console.log("start");

FileSystem.readFile("f1.txt", function (err , data) {
   if(err){
    console.log("Cannot read File")
   }
   else{
    console.log("This is file data -> " + data)
   }
});



console.log("End");
