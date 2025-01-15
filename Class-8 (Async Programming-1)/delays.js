// 1. 

console.log('A') // done



function P(){
    console.log("P");
  }

  function Q(){
    console.log('Q')
  }

  setTimeout(P , 100);
  setTimeout(Q, 100);

  console.log("R");