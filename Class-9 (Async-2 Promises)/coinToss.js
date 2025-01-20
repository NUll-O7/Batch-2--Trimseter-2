const promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const isHeads = Math.random() >= 0.5;
    if (isHeads) {
      resolve("We got heads");
    } else {
      reject("Rjected as we got tails");
    }
  }, 2000);
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const isHeads = Math.random() >= 0.5;
    if (isHeads) {
      resolve("We got heads");
    } else {
      reject("Rjected as we got tails");
    }
  }, 1000);
});

console.log(promise1);

// Promise Handlers
// then and catch

promise1.then(function (result) {
  console.log(result);
});







// finally
