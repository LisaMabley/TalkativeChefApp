myApp.factory('RecipeFactory', ['$http', function($http) {

var recipeResult = [];
var recipeId = '';
var findRecipe = function() {

    // var recipeId = id;
    // console.log(recipeId);

    var request = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + recipeId + '/analyzedInstructions',
      headers: {
        'Content-Type': 'application/json',
        'X-Mashape-Key': 'Czdsaz3b8EmshGAOdyDx3GuIQ9VAp1zfhlUjsnPkiqcbwNqMUz'
      }
    };  
    // console.log(request);  
    var promise = $http(request).then(
        function(response) {
            console.log('req:',request);
            console.log('resp:',response);  
            recipeResult = response.data
        });

  return promise;
  };



return {
  getRecipeFactory: function(){
    return findRecipe();
  },

  recipeSteps: function(){
    return recipeResult;
  },

  setID: function(id) {
    recipeId = id;
  }
}

 }]); 