let cleanRoom = function () {
  return new Promise(function (resolve, reject) {
    // 50% chance of success
    if (Math.random()>0.5) {
      resolve("Cleaned The Room");
    } else {
      // 50% chance of failure
      reject("Failed to clean the room");
    }
  });
};

let removeGarbage = function (message) {
  return new Promise(function (resolve, reject) {
    // 50% chance of success
    if (Math.random()>0.5) {
      resolve(message + ' removed garbage');
    } else {
      // 50% chance of failure
      reject("Failed to remove garbage");
    }
  });
};



let winIcecream = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + " then won Icecream");
  });
};

// Promise Chaining

cleanRoom().then(function (result) {
  console.log(result);
  return removeGarbage(result)
}).then(function(result2){
    console.log(result2)
    return winIcecream(result2)
}).then(function(result3){
   console.log(result3)
}).catch(function(err){
    console.log(err)
});




// Async/ Await
