function prepareIngredients(){
  setTimeout(function(){
    console.log('Ingredients Prepared')
  } , 2000)
}

function cookDish(){
    setTimeout(function(){
      console.log('Dish cooked')
    } , 5000)
  }

  function serveDish(){
    setTimeout(function(){
      console.log('Dish Served')
    } , 6000)
  }

  function cleanUp(){
    setTimeout(function(){
      console.log("Table cleaned")
    } , 4000)
  }


  prepareIngredients()