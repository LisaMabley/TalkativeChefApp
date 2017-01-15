myApp.controller('resultsController', ['$http', '$scope', '$window', 'RecipeFactory', function($http, $scope, $window, RecipeFactory) {

$scope.recipeFactory = RecipeFactory;

var id = 630187;

    console.log(id);
    $scope.recipeFactory.setID(id)

    $scope.recipeFactory.getRecipeFactory().then(function(response){
      $scope.steps = $scope.recipeFactory.recipeSteps();
      console.log($scope.recipeFactory.recipeSteps());

      sendRequest();
  	});
    
function sendRequest () {

    var request = {
     method: 'GET',
     url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+ id +'/information',
     headers: {
       'Content-Type': 'application/json',
       'X-Mashape-Key': 'Czdsaz3b8EmshGAOdyDx3GuIQ9VAp1zfhlUjsnPkiqcbwNqMUz'
     }
   };

    $http(request).then(
        function(response) {
            console.log('req:',request);
            console.log('resp:',response);
            $scope.recipeList = response.data;
            console.log($scope.recipeList.extendedIngredients);
  });
}

function successCallback(response) {
    $scope.recipeList = response.data.recipes;
    $scope.responseReceived = true;
    $scope.recipeSearchField = '';
    window.recipeList = $scope.recipeList;
  }

function errorCallback(error) {
    if (error) {
      alert('No recipies found' + response);
    }
  }
}]);
