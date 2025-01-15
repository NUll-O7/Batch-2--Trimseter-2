// 1. 

console.log('A')

setTimeout(function () {
    console.log("P");
  }, 200);


  setTimeout(function () {
    console.log("Q");
  }, 100);

  console.log("R");