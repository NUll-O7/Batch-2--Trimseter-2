const FileSystem = require("fs");

console.log("start");


FileSystem.readFile("f1.txt", fileReadCb1);

function fileReadCb1(err, data) {
  if (err) {
    console.log("Cannot read File");
  } else {
    console.log("This is file 1 data -> " + data);
    FileSystem.readFile("f2.txt", fileReadCb2);
  }
}

function fileReadCb2(err, data) {
    if (err) {
      console.log("Cannot read File");
    } else {
      console.log("This is file 2 data -> " + data);
      FileSystem.readFile("f3.txt", fileReadCb3);
    }
  }

  function fileReadCb3(err, data) {
    if (err) {
      console.log("Cannot read File");
    } else {
      console.log("This is file 3 data -> " + data);
    }
  }






console.log("End");
