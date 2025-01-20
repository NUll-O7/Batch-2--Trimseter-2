function promise1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const isHeads = Math.random() >= 0;
      if (isHeads) {
        resolve("Promise 1: We got heads");
      } else {
        reject("Promise 1: Rejected as we got tails");
      }
    }, 2000);
  });
}

function promise2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const isHeads = Math.random() >= 0.5;
      if (isHeads) {
        resolve("Promise 2: We got heads");
      } else {
        reject("Promise 2: Rejected as we got tails");
      }
    }, 1000);
  });
}

function promise3() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        const isHeads = Math.random() >= 0.5;
        if (isHeads) {
          resolve("Promise 2: We got heads");
        } else {
          reject("Promise 2: Rejected as we got tails");
        }
      }, 1000);
    });
  }

  function promise4() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        const isHeads = Math.random() >= 0.5;
        if (isHeads) {
          resolve("Promise 2: We got heads");
        } else {
          reject("Promise 2: Rejected as we got tails");
        }
      }, 1000);
    });
  }

// then anc catch

promise1().then(function(result){
    console.log(result)
    return promise2()
}).then(function(result2){
    console.log(result2)
}).catch(function(err){
    console.log(err)
})


