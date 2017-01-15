myApp.factory('RecipeFactory', ['$http', function($http) {

var recipeResult = [];
var recipeId = '';
var tagString = '';


var request = function() {
    //var tagString = $scope.recipeSearchField;
    //formatTagsForApiCall(tagString);

    var request = {
     method: 'GET',
     url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=20&tags=' + tagString,
     headers: {
       'Content-Type': 'application/json',
       'X-Mashape-Key': 'Czdsaz3b8EmshGAOdyDx3GuIQ9VAp1zfhlUjsnPkiqcbwNqMUz'
     }
   };
   var promise = $http(request).then(
      function(response) {
        console.log('req:',request);
        console.log('resp',response);
        returnResults = response.data;
      });
   
    // $http(request).then(successCallback, errorCallback);
    return promise;
  };


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
    var promise = $http(request).then(
        function(response) {
            console.log('req:',request);
            console.log('resp:',response);  
            recipeResult = response.data[0].steps;
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
  },

  sendRequest: function(){
    return request();
  },

  returnRequest: function(){
    return returnResults; 
  }
}

 }]); 